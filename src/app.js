
var app = new Vue({
    el: "#root",
    data: {
        dischi: [],
    },
  mounted() {
    const self = this;
    axios.get('http://localhost/php-ajax-dischi/app/server.php')
      .then((risposta) => {
        self.dischi = risposta.data;
        console.log(self.dischi);


      });
  }

});

Vue.config.devtools = true


// nb quando andro a vedere la mia chiamata ajax in local host per vedere il sito  devo fare questo pattern http://localhost/php-ajax-dischi/index.html cioe dove si trova la pagina
 // e non http://localhost/php-ajax-dischi/app/server.php
