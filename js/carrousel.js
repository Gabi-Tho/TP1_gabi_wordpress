(function(){
    console.log("carrousel encroyable!!!!")
    let elmBtnModale = document.querySelector(".btn_modale");
    let elmCarrousel = document.querySelector(".carrousel");
    let elmBtnModaleFermer = document.querySelector(".btn_modaleFermer");
    elmBtnModale.addEventListener("mousedown",function(){

        elmCarrousel.classList.add("carrousel--ouvrir");

        
    })

    elmBtnModaleFermer.addEventListener("mousedown",function(){

        elmCarrousel.classList.remove("carrousel--ouvrir");

    });

})();