var app = new Vue({
    el: "#root",
    data: {
        dischi: [],


    },
  mounted() {
    const self = this;
    axios.get('http://localhost/php-ajax-dischi/database.php')
      .then((risposta) => {
        self.dischi = risposta.data.response;
        console.log(self.dischi);
      });
  }

});

Vue.config.devtools = true
