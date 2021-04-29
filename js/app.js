function init() {
  new Vue({
    el: '#app',
    data: {
      isActive: false,
      index: 0
    },
    methods: {
      // Slide precedente
      prev: function() {
        console.log("hello");
      },
      // Slide successivo
      next: function() {
        this.isActive == false;
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
function init() {
  initVue();
}
document.addEventListener('DOMContentLoader', init);
