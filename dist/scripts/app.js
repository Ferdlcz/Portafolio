  const navButton = document.querySelector("#menu-button");
  
  const menuItems = document.querySelector("#menu");
  
  const menuButtonSpan = document.querySelectorAll("#menu-button span");
  
  const enlaces = document.querySelectorAll("#menu a");
  
  //funcionalidad a boton de navbar movil
  navButton.addEventListener("click", () => {
    menuItems.classList.toggle("hidden");
    
    menuButtonSpan.forEach((span) => {
      span.classList.toggle("anim");
    });
  });
  
  //Cerrar menu al dar click en un enlace
  enlaces.forEach((link) => {
    link.addEventListener("click", () => {
      menuItems.classList.add("hidden");
      
      menuButtonSpan.forEach((span) => {
        span.classList.remove("anim");
      });
    });
  });
  
  //DARK MODE
  
  //Verificar si el tema almacenado en localstorage o si el tema del sistema es dark, si es dark agrega la clase dark
  //si el tema es claro, la elimina
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    const darkButton = document.querySelector("#darkButton");
    
    //evento de click para cambiar el tema del color
    darkButton.addEventListener("click", function () {
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    });
    
    // Descargar curriculum
    
    const downloadCv = document.querySelector("#cv");
    
    downloadCv.addEventListener("click", () => {
      const URL = "cv/CV_FernandoDeLaCruzZapata.pdf";
      
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

    document.getElementById('contact-form').addEventListener('submit', function(event){
      event.preventDefault();

      btnSend.value = 'Enviando mensaje ...'

      const serviceID = 'service_ut9vn3e';
      const templateID = 'template_q4bclib';

      emailjs.sendForm(serviceID, templateID, this).then(() =>{
        btnSend.value = 'Enviar';
        alert('Mensaje enviado correctamente!!')
      }, (err)=>{
        btnSend.value = 'Enviar';
        alert(JSON.stringify(err));
      })
    })