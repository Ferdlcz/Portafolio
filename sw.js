const nombreCache = "Portafolio Fernando Delacruz"
const archivosCache = [
    "/",
    "/index.html",
    "/src/input.css",
    "/tailwind.config.js",
    "/dist/img/AppEval/appEval1.webp",
    "/dist/img/AppEval/appEval2.webp",
    "/dist/img/AppEval/appEval3.webp",
    "/dist/img/icons/logo.svg",
    "/dist/img/Morty/Morty1.webp",
    "/dist/img/Morty/Morty2.webp",
    "/dist/img/Morty/Morty3.webp",
    "/dist/img/PowerHouse/PW3.webp",
    "/dist/img/technologies/angular.json",
    "/dist/img/technologies/bootstrap.json",
    "/dist/img/technologies/cordova.json",
    "/dist/img/technologies/csharp.json",
    "/dist/img/technologies/css.json",
    "/dist/img/technologies/ionic.json",
    "/dist/img/technologies/java.json",
    "/dist/img/technologies/javascript.json",
    "/dist/img/technologies/nodejs.json",
    "/dist/img/technologies/php.json",
    "/dist/img/technologies/react.json",
    "/dist/img/technologies/tailwind.json",
    "/dist/img/Urban/urban1.webp",
    "/dist/img/Urban/urban2.webp",
    "/dist/img/Urban/urban3.webp",
    "/dist/img/Urban/urban4.webp",
    "/dist/img/Urban/urban5.webp",
    "/dist/img/cvimagerb.png",
    "/dist/cv/CV_FernandoDelacruzZapata.pdf",
    "/dist/scripts/app.js",
    "/dist/scripts/darkmode.js",
    "/dist/scripts/navbar.js",
    "/dist/styles/output.css",
    "/dist/output.css",
    
    ]

self.addEventListener("install", e =>{
    
    console.log("El service worker se instalo")
    e.waitUntil(
        caches.open(nombreCache).then((cache) =>{
            console.log("Cache guardada correctamente")
            cache.addAll(archivosCache)
        })
    )
})

self.addEventListener("activate", e =>{
    console.log("Service Worker activo", e);
})

self.addEventListener("fetch", e =>{
    console.log("Fetch: ", e);
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache =>{
            return respuestaCache || fetch(e.request)
        })
    )
})