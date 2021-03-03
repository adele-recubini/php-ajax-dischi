
var app = new Vue({
    el: "#root",
    data: {
        dischi: [],
        generi:[],
        generiSelect:'',
    },
  mounted() {
    const self = this;
    axios.get('http://localhost/php-ajax-dischi/app/server.php')
      .then((risposta) => {
        self.dischi = risposta.data;
        console.log(self.dischi);

        self.dischi.forEach((element) => {
          if (!self.generi.includes(element.genre)) {
            self.generi.push(element.genre)
          }
        });

      });
  }

});

Vue.config.devtools = true


// nb quando andro a vedere la mia chiamata ajax in local host per vedere il sito  devo fare questo pattern http://localhost/php-ajax-dischi/index.html cioe dove si trova la pagina
 // e non http://localhost/php-ajax-dischi/app/server.php
