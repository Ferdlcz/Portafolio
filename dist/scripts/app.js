if('serviceWorker' in navigator){

  navigator.serviceWorker.register("/sw.js")
  .then(registrado =>
      console.log("Service Worker Registrado", registrado))
      .catch(error => console.log("Error al registrar el service worker", error))
 // console.log('Service worker compatible')

}else{

  console.log('Service Worker no compatible')

}
    
    // Descargar curriculum
    
    const downloadCv = document.querySelector("#cv");
    
    downloadCv.addEventListener("click", () => {
      const URL = "/dist/cv/CV_FernandoDelacruzZapata.pdf";
      
      const enlace = document.createElement("a");
      enlace.href = URL;
      enlace.download = "CV_FernandoDeLaCruzZapata.pdf";
      
      enlace.click();
    });
    
    //Carousel proyectos
    
    function carouselProjects(){
      
      const cardOptions = {
        cellAlign: "left",
        wrapAround: true,
        autoPlay: true,
        imagesLoaded: true,
      };
      
      const carousels = document.querySelectorAll('[class^="carousel-"');
      
      carousels.forEach((carosel, index) =>{
        const options ={
          ...cardOptions,
        }
        
        const flkty = new Flickity(carosel, options)
        
      })
      
    }
    
    carouselProjects();
    
    
    //Enviar correo

    emailjs.init('Zy8LzYvShttUi77Uh')

    const btnSend = document.getElementById('send');
    let inputName = document.getElementById('nombre');
    let inputEmail = document.getElementById('email');
    let inputMessage = document.getElementById('mensaje');

    document.getElementById('contact-form').addEventListener('submit', function(event){
      event.preventDefault();

      const serviceID = 'service_ut9vn3e';
      const templateID = 'template_q4bclib';

      emailjs.sendForm(serviceID, templateID, this).then(() =>{
        alert('Mensaje enviado correctamente!!')
        this.reset()
      }, (err)=>{
        alert('Error al enviar mensaje' + err)
       // alert(JSON.stringify(err));
      })
    })

    async function loadAnimationFromPath(containerId, jsonPath) {
      try {
        const response = await fetch(jsonPath);
        const animationData = await response.json();
    
        var container = document.getElementById(containerId);
        var animationOptions = {
          container: container,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: animationData,
        };
        lottie.loadAnimation(animationOptions);
      } catch (error) {
        console.error("Error cargando la animación:", error);
      }
    }
    
    // Rutas a los archivos JSON de las animaciones
    var angular = "/dist/img/technologies/angular.json";
    var cordova = "/dist/img/technologies/cordova.json";
    var bootstrap = "/dist/img/technologies/bootstrap.json";
    var csharp = "/dist/img/technologies/csharp.json";
    var css = "/dist/img/technologies/css.json";
    var ionic = "/dist/img/technologies/ionic.json";
    var node = "/dist/img/technologies/nodejs.json";
    var php = "/dist/img/technologies/php.json";
    var react = "/dist/img/technologies/react.json";
    var tailwind = "/dist/img/technologies/tailwind.json";
    var unity = "/dist/img/technologies/java.json";
    var js = "/dist/img/technologies/javascript.json";

    // Cargar las animaciones en los contenedores
    loadAnimationFromPath("animation-container-1", angular);
    loadAnimationFromPath("animation-container-2", cordova);
    loadAnimationFromPath("animation-container-3", bootstrap);
    loadAnimationFromPath("animation-container-4", csharp);
    loadAnimationFromPath("animation-container-5", css);
    loadAnimationFromPath("animation-container-6", ionic);
    loadAnimationFromPath("animation-container-7", node);
    loadAnimationFromPath("animation-container-8", php);
    loadAnimationFromPath("animation-container-9", react);
    loadAnimationFromPath("animation-container-10", tailwind);
    loadAnimationFromPath("animation-container-11", unity);
    loadAnimationFromPath("animation-container-12", js);


    let idiomaUsuario = localStorage.getItem('idioma') || 'es';

    function cambiarIdioma() {
      const elementos = document.querySelectorAll('[data-es], [data-en]');
    
      elementos.forEach(elemento => {
        if (idiomaUsuario === 'es' && elemento.dataset.es) {
          if (elemento.tagName === 'INPUT' || elemento.tagName === 'TEXTAREA') {
            elemento.placeholder = elemento.dataset.es;
          } else {
            elemento.textContent = elemento.dataset.es;
          }
        } else if (idiomaUsuario === 'en' && elemento.dataset.en) {
          if (elemento.tagName === 'INPUT' || elemento.tagName === 'TEXTAREA') {
            elemento.placeholder = elemento.dataset.en;
          } else {
            elemento.textContent = elemento.dataset.en;
          }
        }
      });
    
      console.log('Idioma cambiado a:', idiomaUsuario);
      localStorage.setItem('idioma', idiomaUsuario);
    }
    
    const language = document.getElementById("languageButton");
    
    language.addEventListener("click", function () {
      idiomaUsuario = idiomaUsuario === 'es' ? 'en' : 'es';
      cambiarIdioma();
    });
    
    cambiarIdioma();