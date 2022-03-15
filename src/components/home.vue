<template>
  <main>

<!--    <cursor-fx-->
<!--    color="pink">-->
<!--    </cursor-fx>-->
    <div class="presentation">

      <div class="me">
        <div class="text_me" v-bind="about in about" :key="about.id">
          <h3>MAXIME MALATIER</h3>
          <p>{{about[0].acf.who}}</p>
        </div>
      </div>
    </div>


    <vue-particles class='particles' color="#f2e857"></vue-particles>


    <div id="projets" class="projets">
      <h2>MES PROJETS</h2>

      <div class="projet" v-for="projet in listOrderById" :key="projet.id">

        <router-link :to="'projet/'+ projet.id">
        <div class="img_projet">
          <img v-bind:src="imgPreUrl + projet.acf.cover_projet.filename" :alt="projet.acf.nom_projet">
        </div>
        </router-link>


        <div class="text_projet">
          <div class="projet_content">
          <h3>{{ projet.acf.nom_projet }}</h3>
          <p>{{projet.acf.synopsis_projet}}</p>
            <router-link :to="'projet/'+ projet.id">VOIR LE PROJET</router-link>
          </div>
        </div>

      </div>

    </div>

  </main>

</template>

<script>
import param from "../param/param";
import { CursorFx } from '@luxdamore/vue-cursor-fx';

export default {
  name: 'home',
  data(){
    return{
      listeProjet:[],
      imgPreUrl:[],
      about:[],
    }
  },
  computed: {
    listOrderById () {
      function compare(a, b) {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
        return 0;
      }

      return this.listeProjet.sort(compare);
    }
  },

  created() {
    axios.get(param.host+"projet")
      .then(response=>{
        this.listeProjet = response.data;
        console.log("Liste", this.listeProjet);
      }).catch(error=>console.log(error))

    this.imgPreUrl = "https://backendportfolio.maximemalatier.fr/wp-content/uploads/2022/03/"

    axios.get(param.host+"about")
    .then(response=>{
      this.about = response.data;
      console.log("Liste", this.about);
    }).catch(error=>console.log(error))
  }





}


</script>

<style scoped>


.presentation{
  background-image: url("../assets/backhome.png");
  background-repeat: no-repeat;
  width: 1920px;
  height: 1080px;
}



.me{
  background-image: url("../assets/me.png");
  width: 1324px;
  height: 687px;
  margin-right: 50px;
  margin-top: 10%;
  float: right;
  z-index: 4;
  position: relative;
  color: #f2e857;
}

.me h3{
  font-size: 26px;

}
.me p{
  font-size: 22px;
  text-align: justify;
}

.me .text_me{
  margin-top: 200px;
  width: 50%;
  margin-left: 100px;
}

.particles{
  position: absolute;
  z-index: 1;
  width: 160%;
  margin-top: 450px;
}

.projets{
  position: relative;
  z-index: 2;

}

.projet .img_projet{
  height: auto;
  background-color: black;
  width: 464px;
}
.projet{
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}

.projet .text_projet .projet_content{
  margin-top: 100px;
}
.projet img{
  width: 100%;
}
.projet h3{
  font-size: 25px;
  margin-left: 4%;
}

.projet p{
  font-size: 20px;
  margin-left: 4%;
}

.projet a{
  color: black;
  text-decoration: none;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  margin-right: 45px;
  float: right;
}
.projet .text_projet{
  background-color: #f2e857;
}

h2{
  background-color: #f2e857;
  padding: 20px;
  margin-top: 50px;
  font-size: 30px;
  width: fit-content;
  margin-bottom: 100px;
}
</style>


