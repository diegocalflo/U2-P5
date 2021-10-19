if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
}

// if(window.caches){
//     console.log('Cache available');

//     caches.open('test')

//     caches.has('test')
//         .then(console.log);

//     caches.open('cache-v1')
//         .then((cache) => {
//             //cache.add('/index.html');
//             cache.addAll([
//                 '/index.html',
//                 '/css/page.css',
//                 '/img/husky.jpg'
//             ]).then(() => {
//                 cache.put('index.html', new Response('Updated from cache'));
//             });

//             cache.match('index.html')
//                 .then((response) => {
//                     response.text().then((responseText) => {console.log(responseText)});
//                     console.log(response);
//                 });
//         });

//         caches.keys().then((cacheKeys) => {
//             console.log(cacheKeys);
//         })
// }