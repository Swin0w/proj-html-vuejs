function init() {
  console.log("Hello World");
  new Vue({
    el: '#app',
    data: {
      // Controllo sulle slide: se attiva imposta il display: block, se disattiva display:none
      isActive: false,
      // Indicizzazione per far capire a che slide siamo
      index: 0
    },
    methods: {
      // Slide precedente
      prev: function() {
        console.log("hello");
      },
      // Slide successivo
      next: function() {
        this.isActive = false;
      }
    },
    // Slider automatico
    mounted: function() {
      setInterval(() => {
        this.next();
      }, 3000);
    }
  });
}
document.addEventListener("DOMContentLoaded", init);
