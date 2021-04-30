function init() {
  console.log("Hello World");
  new Vue({
    el: '#app',
    data: {
      // Controllo sulle slide: se attiva imposta il display: block, se disattiva display:none
      isActive: false,
      timer: null,
      slider: [
        {
          img: "img/slider1.png",
          text: "Projects made with",
          endtext: "love"
        },
        {
          img: "img/slider2.png",
          text: "Our new folio full of",
          endtext: "joy"
        },
        {
          img: "img/slider3.png",
          text: "Devotion that never",
          endtext: "ends"
        }
      ],
      // slider: [
      //   "img/slider1.png",
      //   "img/slider2.png",
      //   "img/slider3.png"
      // ],
      // Indicizzazione per far capire a che slide siamo
      index: 0
    },
    methods: {
      // Slide precedente
      prev: function(index) {
        this.index--;
        if(this.index < 0){
          this.index = this.slider.length - 1;
        }
      },
      // Slide successivo
      next: function(index) {
        this.index++;
        if(this.index >= this.slider.length){
          this.index = 0;
        }
      },
      stop: function() {
        clearInterval(this.timer);
      },
      restart: function() {
        this.timer = setInterval(this.next, 3000);
      },
    },
    // Slider automatico
    mounted: function() {
      this.restart();
    }
  });
}
document.addEventListener("DOMContentLoaded", init);
