


var app = new Vue({
    el: "#root",
    data: {
        dischi: [],


    },
  mounted() {
    const self = this;
    axios.get('http://localhost/php-ajax-dischi/app/server.php')
      .then((risposta) => {


      });
  }

});

Vue.config.devtools = true
