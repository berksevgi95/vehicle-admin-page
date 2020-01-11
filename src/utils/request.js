// import axios from 'axios';
import { NotificationManager } from 'react-notifications';

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
      NotificationManager.error(response.data.error)
      reject && reject(response.data)
    }
    else {
      resolve && resolve(response.data)
    }
    worker.terminate()
  })
}

// export async function post(url, endpoint, body) {
//   return axios.post(`${url}${endpoint ? endpoint : '/'}`, body, {
//     headers: {
//       //TODO: To be taken from cookie
//       Authorization: "eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcmZ1bCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJrdWJlcmZ1bC1zZXJ2aWNlYWNjb3VudC10b2tlbi1ia2dxeCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJrdWJlcmZ1bC1zZXJ2aWNlYWNjb3VudCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImI1NDRjYjY4LWVjZGEtMTFlOS1hYTM3LWVhM2I1NTdhODViOSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcmZ1bDprdWJlcmZ1bC1zZXJ2aWNlYWNjb3VudCJ9.UwdRha2-t-cNF-O-fmi1TZ5zUvEJl5rzxQwrS8ZwJGv7MqT7pe1yzDlx6SiuvHGqRSBuXmsZkkeHN4d_X-T9gJBUktOc0lQmjN676O6-xPuGIKr0fxpYWY8Pyvni6Rn6e9TTvUbZIuItQ9fZJEruUO8dIcN24X563FgOAX3w5M_C34PXrixwUA5U-DJrXhOzqok6BGiqKH4gJv-6gu1s1pVoDohnpR0OvlB-gTAReBz57K_5jfPgOuzleb2R9EuGMfanwZnC_9slYeSdj_ombsPJsovD4k_SiRHGMLLrrfrW0LxUNG1gGQvG2eLceCCPBGQ5t9605pu36bYiBbLnWRlnCUf62uAZeCGd6cb5stpoMOA_CeQCUJPA5Xm7Rc2O-WATszYyaYxEry3dqobtjDBDNs0RGTJ07DQwJChnMb3ighKOEwcTS9k8Gks5ZsOZIhk0xiP1h2GGKwRSYG-i4PFlMXb_k94w0xpij7YnmqjMx-5SI-xhXZKDzAQWXOs_LH2fSRReinxNe0-XF9Z-VXwEFJxLueRVWrz03oUXfKD0a1X-kZ9eMS0cI4HKVIaDiA4TF0mJX-heKoEV3G9RU0DY84SzcnDQYS8TjgT4T74x0W2ivvdIKbCCkOguWUmzq1209vrGhnbe9FHhEytnkZ2qeM8TmNyabJTw7JxKf-g"
//     }
//   })
//     .then(response => response.data)
//     .catch(e => {
//       NotificationManager.error(e.message);
//       return new Promise((resolve, reject) => reject(e))
//     })
// }