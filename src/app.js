


var app = new Vue({
    el: "#root",
    data: {
        dischi: [],


    },
  mounted() {
    const self = this;
    axios.get('http://localhost/php-ajax-dischi/app/server.php')
      .then((risposta) => {
        this.dischi = response.data;
        console.log('dischi');


      });
  }

});

Vue.config.devtools = true
