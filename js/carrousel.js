(function () {
    console.log("carrousel");
    /* ----------------------------------------- Initialisation des compteurs */
    let index = 0;
    let dernierIndex = -1;
  
    /* ---------------------------------------- Les éléments du carrousel */

    let elmCarrousel = document.querySelector(".carrousel");
    let elmBtnModale = document.querySelector(".btn_modale");
    let elmBtnModaleFermer = document.querySelector(".btn_fermer");
    let elmBtnModaleDroite = document.querySelector(".btn_droite");
    let elmBtnModalGauche = document.querySelector(".btn_gauche");
    let elmCarrousel__figure = document.querySelector(".carrousel__figure");

    /* le formulaire qui contiendra l'ensemble des boutons radio */
    let elmCarrousel__form = document.querySelector(".carrousel__form");
  
    /* ---------------------------------------- Les éléments de la galerie */
    /* Le conteneur principal de la galerie */
    let elmGalerie = document.querySelector(".galerie");
    let elmGalerieImg = document.querySelectorAll(".galerie figure img");
  
    /* ----------------------------- Étape 1 parcourir les images de la galerie */
  
    for (const elmImg of elmGalerieImg) {

      ajouter_img_carrousel(elmImg);
      ajouter_radio_carrousel();
      /* écouteur sur les images de la galerie */
      elmImg.addEventListener("mousedown", function () {


        elmCarrousel.classList.add("carrousel--ouvrir");
        elmCarrousel__figure.children[this.dataset.index].classList.add(
          "carrousel__figure__img--activer"
        );

        elmCarrousel__form.children[this.dataset.index].checked = true;
        dernierIndex = this.dataset.index;

      });
    }
    /**
     * Ajoute une image dans le carrousel
     * @param {*} elmImg  une image de la galerie
     */
    function ajouter_img_carrousel(elmImg) {
      // elmImg représente une image de la galerie */
      elmImg.dataset.index = index;
      let elmCarrousel__figure__img = document.createElement("img");
      elmCarrousel__figure__img.setAttribute("src", elmImg.getAttribute("src"));
      elmCarrousel__figure__img.classList.add("carrousel__figure__img");
      elmCarrousel__figure__img.dataset.index = index;
      elmCarrousel__figure.appendChild(elmCarrousel__figure__img);
    }
    /**
     * Ajoute un radio bouton dans le carrousel
     */
    function ajouter_radio_carrousel() {
      let elmCarrousel__form__radio = document.createElement("input");
      elmCarrousel__form__radio.setAttribute("name", "carrousel__form__radio");
      elmCarrousel__form__radio.setAttribute("class", "carrousel__form__radio");
      elmCarrousel__form__radio.setAttribute("type", "radio");
      elmCarrousel__form__radio.dataset.index = index;
      index++;
      elmCarrousel__form.appendChild(elmCarrousel__form__radio);
      /* ------------------------ écouteur sur radio pour afficher une nouvelle image */
      elmCarrousel__form__radio.addEventListener("mousedown", function () {
        console.log(this.dataset.index);
  
        if (dernierIndex != -1) {
          elmCarrousel__figure.children[dernierIndex].classList.remove(
            "carrousel__figure__img--activer"
          );
        }
  
        elmCarrousel__figure.children[this.dataset.index].classList.add(
          "carrousel__figure__img--activer"
        );
        console.log(index);
        dernierIndex = this.dataset.index;
      });
    }
  
    elmBtnModale.addEventListener("mousedown", function () {
      console.log("bouton boîte modale");
      elmCarrousel.classList.add("carrousel--ouvrir");
    });
    //////////////////////////////////////////////////
    elmBtnModaleFermer.addEventListener("mousedown", function () {
      elmCarrousel.classList.remove("carrousel--ouvrir");
    });

    elmBtnModaleDroite.addEventListener('mousedown',function(){
      for (let i = 0; i < elmCarrousel__figure.children.length; i++) {
        if(elmCarrousel__figure.children[i].classList.contains('carrousel__figure__img--activer')){
          elmCarrousel__figure.children[0].classList.remove('carrousel__figure__img--activer');
          if(i== 3){
            elmCarrousel__figure.children[0].classList.add('carrousel__figure__img--activer');
          }
        }else{
          elmCarrousel__figure.children[i+1].classList.add('carrousel__figure__img--activer');
          break;
        }
        
      }
    })

    elmBtnModalGauche.addEventListener('mousedown',function(){
      for (let i = 0; i < elmCarrousel__figure.children.length; i++) {
        if(elmCarrousel__figure.children[i].classList.contains('carrousel__figure__img--activer')){
          elmCarrousel__figure.children[0].classList.remove('carrousel__figure__img--activer');
          if(i==3){
            elmCarrousel__figure.children[3].classList.add('carrousel__figure__img--activer');
          }
        }else{
          elmCarrousel__figure.children[i+1].classList.add('carrousel__figure__img--activer');
          break;
        }
        
      }
    })


  })();