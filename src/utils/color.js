

import chroma from 'chroma-js'
import bezier from 'bezier-easing'

const Curves = {
    linear : bezier(0.5,0.5,0.5,0.5),

    easeInCubic : bezier(0.55, 0.055, 0.675, 0.19),
    easeOutCubic : bezier(0.215, 0.61, 0.355, 1),
    easeInOutCubic : bezier(0.645, 0.045, 0.355, 1),

    easeInSine : bezier(0.47, 0, 0.745, 0.715),
    easeOutSine : bezier(0.39, 0.575, 0.565, 1),
    easeInOutSine : bezier(0.445, 0.05, 0.55, 0.95),

    easeInQuad : bezier(0.55, 0.085, 0.68, 0.53),
    easeOutQuad : bezier(0.25, 0.46, 0.45, 0.94),
    easeInOutQuad : bezier(0.455, 0.03, 0.515, 0.955),

    easeInQuart : bezier(0.895, 0.03, 0.685, 0.22),
    easeOutQuart : bezier(0.165, 0.84, 0.44, 1),
    easeInOutQuart : bezier(0.77, 0, 0.175, 1),

    easeInCirc : bezier(0.6, 0.04, 0.98, 0.335),
    easeOutCirc : bezier(0.075, 0.82, 0.165, 1),
    easeInOutCirc : bezier(0.785, 0.135, 0.15, 0.86),

    easeInQuint : bezier(0.755, 0.05, 0.855, 0.06),
    easeOutQuint : bezier(0.23, 1, 0.32, 1),
    easeInOutQuint : bezier(0.86, 0, 0.07, 1),

    easeInExpo : bezier(0.95, 0.05, 0.795, 0.035),
    easeOutExpo : bezier(0.19, 1, 0.22, 1),
    easeInOutExpo : bezier(1, 0, 0, 1),

    easeInBack : bezier(0.6, -0.28, 0.735, 0.045),
    easeOutBack : bezier(0.175, 0.885, 0.32, 1.275),
    easeInOutBack : bezier(0.68, -0.55, 0.265, 1.55)
}


function distribute(value, rangeA, rangeB) {

  const [fromLow, fromHigh] = Array.from(rangeA)
  const [toLow, toHigh] = Array.from(rangeB)

  const result = toLow + (((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow));

  if (toLow < toHigh) {
    if (result < toLow) { return toLow }
    if (result > toHigh) { return toHigh }
  } else {
    if (result > toLow) { return toLow }
    if (result < toHigh) { return toHigh }
  }

  return result;
}

export default function({specs}) {

  function generateNumberOfSteps(curve, steps) {
    var array = []
    for (var step in Array.from(Array(steps).keys())) {
      const value = curve(step/ (steps - 1))
      array.push(value)

    }
    array.reverse()
    return array
  }

  var lum_array = generateNumberOfSteps(Curves[specs.lum_curve], specs.steps)
  var sat_array = generateNumberOfSteps(Curves[specs.sat_curve], specs.steps)
  var hue_array = generateNumberOfSteps(Curves[specs.hue_curve], specs.steps)
  var lum_array_adjusted = []
  var sat_array_adjusted = []
  var hue_array_adjusted = []

  for (var index in lum_array){
    const step = lum_array[index]
    lum_array_adjusted.push(distribute(step, [0, 1], [specs.lum_end * .01, specs.lum_start *.01], true))
  }


  for (var index in sat_array ){
    const step = sat_array[index]
    var sat_step = distribute(step, [0, 1], [specs.sat_start * .01, specs.sat_end *.01], true)

    sat_step = sat_step * (specs.sat_rate *.01)
    sat_array_adjusted.push(sat_step)
  }

  for (var index in hue_array){
    const step = hue_array[index]
    hue_array_adjusted.push(distribute(step, [0,1], [specs.hue_start, specs.hue_end]))
  }

  sat_array_adjusted.reverse()
  hue_array_adjusted.reverse()

  lum_array = lum_array_adjusted
  sat_array = sat_array_adjusted
  hue_array = hue_array_adjusted

  var colorMap = []

  for (var index in lum_array) {

    var step = lum_array[index]

    var params = {
      hue:hue_array[index],
      saturation:sat_array[index],
      luminosity:lum_array[index],
    }

    if (params.saturation >  1) {params.saturation = 1}

    var hex = chroma(chroma.hsv([params.hue, params.saturation, params.luminosity]))
    var hexRGB = chroma(chroma.hsv([params.hue, params.saturation, params.luminosity])).rgb()

    const contrastWhite = chroma.contrast(hex, "white").toFixed(2)
    const contrastBlack = chroma.contrast(hex, "black").toFixed(2)

    var displayColor = ""
    if (contrastWhite >= 4.5) { displayColor = "white" } else { displayColor = "black" }

    var colorObj = {
      hex: chroma(hex).hex(),
      hue: chroma(hex).hsv()[0],
      sat: chroma(hex).hsv()[1],
      lum: chroma(hex).hsv()[2],
      hsv: chroma(hex).hsv(),
      hsl: chroma(hex).hsl(),
      rgb: chroma(hex).rgb(),
      hueRange: [specs.hue_start, specs.hue_end],
      steps:specs.steps,
      label:specs.modifier * index,
      contrastBlack:contrastBlack,
      contrastWhite:contrastWhite,
      displayColor:displayColor,
    }
    colorMap.push(colorObj)
  }

  return colorMap
}