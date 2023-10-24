
    
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
    let inputName = document.getElementById('nombre');
    let inputEmail = document.getElementById('email');
    let inputMessage = document.getElementById('mensaje');

    document.getElementById('contact-form').addEventListener('submit', function(event){
      event.preventDefault();

      const serviceID = 'service_ut9vn3e';
      const templateID = 'template_q4bclib';

      emailjs.sendForm(serviceID, templateID, this).then(() =>{
        alert('Mensaje enviado correctamente!!')
        inputName.value = "";
        inputEmail.value = "";
        inputMessage.value = "";
      }, (err)=>{
        alert("Error al enviar el mensaje")
       // alert(JSON.stringify(err));
      })
    })