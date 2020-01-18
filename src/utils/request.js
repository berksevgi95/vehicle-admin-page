
export async function get (url, endpoint, resolve, reject) {
  const worker = new Worker(URL.createObjectURL(new Blob([
    `(function () {
      fetch("${url}${endpoint ? endpoint : '/'}").then(function (response) {
        return response.json();
      }).then(function (json) {
        return postMessage(json);
      }).catch(function(e){
        return postMessage({
          error : e.message
        })
      });
    })()`
  ])))

  worker.addEventListener('message', (response) => {
    if(response.data.error) {
      reject && reject(response.data)
    }
    else {
      resolve && resolve(response.data)
    }
    worker.terminate()
  })
}

export async function post (url, endpoint, body, resolve, reject){
  const worker = new Worker(URL.createObjectURL(new Blob([
    `(function () {
      fetch("${url}${endpoint ? endpoint : '/'}", {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(${JSON.stringify(body)})
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        return postMessage(json);
      }).catch(function(e){
        return postMessage({
          error : e.message
        })
      });
    })()`
  ])))

  worker.addEventListener('message', (response) => {
    if (response.data.error) {
      reject && reject(response.data)
    }
    else {
      resolve && resolve(response.data)
    }
    worker.terminate()
  })
}