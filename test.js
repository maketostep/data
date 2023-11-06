// LoginWithData('maketostep', '1234')

// btn.onclick = function(e) {
//     e.preventDefault()
//     console.log(login, password)
// }
// async function getUserPoints(data) {

// }
// console.log('Start');

// console.log('Start 2');

// function timeout2sec() {
//     console.log('timeout2sec')
// }

// setTimeout(() => {
//     console.log('Start через 5 секунд')
// }, 5000)

// setTimeout(timeout2sec, 2000)

// setInterval(() => {
// console.log('Переодический старт')

// }, 2500)




// console.log('REQUEST DATA...');
// setTimeout(() => {
//     console.log('PREPARING DATA...');

//     const backendData = {
//         server: "www",
//         port: 2000,
//         status: "working"
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Getting data', backendData);
//     })
// }, 2000)



// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('PREPARING DATA...')

//         const backendData = {
//             server: "www",
//             port: 2000,
//             status: "working"
//         }

//         resolve(backendData)
//     }, 2000)
// })

// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
            
//         }) 
//     })
// }).then(clientData => {
//     console.log('Data receivied', clientData);
//     clientData.fromPromise = true
//     return clientData
// }).then(data => {
//     console.log
// })

// console.log(p)
// const delay = ms => {
//     return new Promise(r => setTimeout(() => r(), ms))
// }

// delay(2000).then(() => console.log('2 sec delay'))


// fetch(url, {
//     method: 'POST',
//     HEA
// })

// function fetchData() {
//     console.log('Starting fetch')
//     return delay(2000)
//     .then(() => {
//         return fetch(url)
//     })
//     .then(response => response.json())
// }

// fetchData()
//     .then(data => {
//         console.log('Data:', data)
//     })
//     .catch(e => console.error(e))

//////////////////////////////// FETCH
// async function fetchAsyncData () {
//     console.log('Starting fetch')

//     try {
//         await delay(2000)
//         const response = await fetch(url)
//         const data = await response.json()
//         console.log('Data:', data)
//     } catch (e) {
//         console.error(e)
//     } finally {
//         console.log('Finally')
//     }
// }
// fetchAsyncData()




// const xhr = new XMLHttpRequest()

// xhr.open('GET', url)

// xhr.responseType = 'json'

// xhr.onload = () => {
//     if(xhr.status >= 400) console.error(xhr.response)
//         else console.log(xhr.response)
// }

// xhr.onerror = () => {
//     console.log(xhr.response)
// }

// xhr.send()


// function sendRequest() {

// }
// console.log(data)