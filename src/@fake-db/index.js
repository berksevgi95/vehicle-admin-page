export const Status = {
    FINISHED : 'Finished',
    DISPATCHED : 'Dispatched'
}


export const Vehicles = [{
    id: 1,
    plateNumber: '06 AA 4564',
    img: 'https://www.motortrend.com/uploads/sites/10/2017/10/2018-ford-focus-se-sedan-angular-front.png',
    brand: 'Ford',
    modelName: 'Focus',
    modelType: '2.0 T',
    year: 2010,
    km: 410000,
    transmission: 'Manual',
    cubic: '1998cc',
    horsepower: 136,
    fuelType: 'Gasoline',
    events: [{
        type: 'Sürücü Değişikliği',
        value: 'Doğan Vural',
        description: '70kmlik mesafe tamamlandı'
    },{
        type: 'Yakıt Alımı',
        value: '5lt',
    },{
        type: 'Trafik Cezası',
        value: '700TL',
        description: 'Dumlupınar Bulvarında aşırı hız'
    },{
        type: 'Rutin Bakım',
        value: '30000 KM',
        description: 'Yağ, benzin filtresi ve fren diskleri değiştirildi'
    },{
        type: 'Trafik Muayenesi',
        value: '35000 KM',
    }]
}, {
    id: 2,
    plateNumber: '06 AA 4314',
    img: 'https://www.motortrend.com/uploads/sites/10/2019/10/2020-bmw-2-series-230i-sport-line-rwd-coupe-angular-front.png',
    brand: 'BMW',
    modelName: '218i',
    modelType: '1.5L I3 turbo',
    year: 2015,
    km: 10000,
    transmission: 'Automatic',
    cubic: '1198cc',
    horsepower: 101,
    fuelType: 'Gasoline',
    events: [{
        type: 'Sürücü Değişikliği',
        value: 'Doğan Vural',
        description: '70kmlik mesafe tamamlandı'
    },{
        type: 'Yakıt Alımı',
        value: '5lt',
    },{
        type: 'Trafik Cezası',
        value: '700TL',
        description: 'Dumlupınar Bulvarında aşırı hız'
    },{
        type: 'Rutin Bakım',
        value: '30000 KM',
        description: 'Yağ, benzin filtresi ve fren diskleri değiştirildi'
    },{
        type: 'Trafik Muayenesi',
        value: '35000 KM',
    }]
}, {
    id: 3,
    plateNumber: '06 AA 4266',
    img: 'https://www.motortrend.com/uploads/sites/10/2020/02/2020-audi-a3-premium-sedan-angular-front.png',
    brand: 'Audi',
    modelName: 'A3',
    modelType: '2.0 TDI',
    year: 2015,
    km: 10000,
    transmission: 'Automatic',
    cubic: '1998cc',
    horsepower: 101,
    fuelType: 'Diesel',
    events: [{
        type: 'Sürücü Değişikliği',
        value: 'Doğan Vural',
        description: '70kmlik mesafe tamamlandı'
    },{
        type: 'Yakıt Alımı',
        value: '5lt',
    },{
        type: 'Trafik Cezası',
        value: '700TL',
        description: 'Dumlupınar Bulvarında aşırı hız'
    },{
        type: 'Rutin Bakım',
        value: '30000 KM',
        description: 'Yağ, benzin filtresi ve fren diskleri değiştirildi'
    },{
        type: 'Trafik Muayenesi',
        value: '35000 KM',
    }]
}, {
    id: 4,
    plateNumber: '06 AA 4078',
    img: 'https://www.motortrend.com/uploads/sites/10/2019/06/2019-nissan-versa-note-sv-5door-hatchback-angular-front.png',
    brand: 'Nissan',
    modelName: 'Versa Note',
    modelType: '2.0',
    year: 2019,
    km: 10000,
    transmission: 'Automatic',
    cubic: '1198cc',
    horsepower: 101,
    fuelType: 'Gasoline',
    events: [{
        type: 'Sürücü Değişikliği',
        value: 'Doğan Vural',
        description: '70kmlik mesafe tamamlandı'
    },{
        type: 'Yakıt Alımı',
        value: '5lt',
    },{
        type: 'Trafik Cezası',
        value: '700TL',
        description: 'Dumlupınar Bulvarında aşırı hız'
    },{
        type: 'Rutin Bakım',
        value: '30000 KM',
        description: 'Yağ, benzin filtresi ve fren diskleri değiştirildi'
    },{
        type: 'Trafik Muayenesi',
        value: '35000 KM',
    }]
}, {
    id: 5,
    plateNumber: '06 AA 4455',
    img: 'https://www.motortrend.com/uploads/sites/10/2017/09/2018-toyota-prius-c-one-hatchback-angular-front.png',
    brand: 'Toyota',
    modelName: 'Prius C',
    modelType: '1.5',
    year: 2020,
    km: 10000,
    transmission: 'Automatic',
    cubic: '1198cc',
    horsepower: 101,
    fuelType: 'Gasoline',
    events: [{
        type: 'Sürücü Değişikliği',
        value: 'Doğan Vural',
        description: '70kmlik mesafe tamamlandı'
    },{
        type: 'Yakıt Alımı',
        value: '5lt',
    },{
        type: 'Trafik Cezası',
        value: '700TL',
        description: 'Dumlupınar Bulvarında aşırı hız'
    },{
        type: 'Rutin Bakım',
        value: '30000 KM',
        description: 'Yağ, benzin filtresi ve fren diskleri değiştirildi'
    },{
        type: 'Trafik Muayenesi',
        value: '35000 KM',
    }]
}]

export const Accidents = [{
    id: 1,
    vehicle1: Vehicles[0],
    vehicle2: {
        id: 2,
        plateNumber: '06 TY 879',
        img: 'https://www.motortrend.com/uploads/sites/10/2017/09/2018-toyota-prius-c-one-hatchback-angular-front.png',
        brand: 'Toyota',
        modelName: 'Prius C',
        modelType: '1.5',
        year: 2020,
        km: 10000,
    },
    description: 'Lorem ipsum dolor sit amet',
    date: new Date(),
    time: new Date().getTime(),
    files: []
}, {
    id: 2,
    vehicle1: Vehicles[2],
    vehicle2: Vehicles[1],
    description: 'Lorem ipsum dolor sit amet',
    date: new Date(),
    time: new Date().getTime(),
    files: []
}]

export const Drivers = [{
    id : 1,
    name : 'berk'
}]

export const Routes = [{
    id : 1,
    name: 'vardiya 1',
    vehicle : Vehicles[0],
    date : '2019-07-10',
    time : '13.12',
    driver : Drivers[0],
    helper : null,
    performance : '13/13',
    status : Status.DISPATCHED,
    deptLoc : {
        lat : 51.5206787641320712,
        lng : -0.091345123141562
    },
    arrLoc : {
        lat : 51.523423631320712,
        lng : -0.093894753141562
    }
},
{
    id : 2,
    name: 'vardiya 2',
    vehicle : Vehicles[1],
    date : '2019-07-02',
    time : '13.12',
    driver : Drivers[0],
    helper : null,
    performance : '13/13',
    status : Status.DISPATCHED,
    deptLoc : {
        lat : 51.5206787641320712,
        lng : -0.031345123141562
    },
    arrLoc : {
        lat : 51.433423631320712,
        lng : -0.073894753141562
    }
},
{
    id : 3,
    name: 'vardiya 3',
    vehicle : Vehicles[0],
    date : '2019-04-10',
    time : '13.12',
    driver : Drivers[0],
    helper : null,
    performance : '13/13',
    status : Status.DISPATCHED,
    deptLoc : {
        lat : 51.6706787641320712,
        lng : -0.091345123141562
    },
    arrLoc : {
        lat : 51.523423631320712,
        lng : -0.053894753141562
    }
}]