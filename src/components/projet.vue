<template>
  <main>
    <div class="presentation">


      <div class="projet" v-bind="projet in projet" :key="projet.id">
        <div class="img_projet">
          <img v-bind:src="imgPreUrl + projet.acf.cover_projet.filename" :alt="projet.acf.nom_projet">
        </div>

        <div class="text_projet">
          <div class="projet_content">
            <h3>{{ projet.acf.nom_projet }}</h3>
            <p>{{projet.acf.synopsis_projet}}</p>
            <a :href="projet.acf.link_projet">Lien vers le projet</a>
          </div>
        </div>

      </div>

    </div>
    <h2>Images du projets</h2>
    <div class="details">

      <div class="des">
        <img v-bind:src="imgPreUrl + projet.acf.img1_projet.filename" alt="">
        <div class="text">
        <p>{{projet.acf.text1_projet}}</p>
        </div>
      </div>

      <div class="des">
        <img v-bind:src="imgPreUrl + projet.acf.img2_projet.filename" alt="">
        <div class="text">
          <p>{{projet.acf.text2_projet}}</p>
        </div>
      </div>

      <div class="des">
        <img v-bind:src="imgPreUrl + projet.acf.img3_projet.filename" alt="">
        <div class="text">
          <p>{{projet.acf.text3_projet}}</p>
        </div>
      </div>

      <div class="des">
        <img v-bind:src="imgPreUrl + projet.acf.img4_projet.filename" alt="">
        <div class="text">
          <p>{{projet.acf.text4_projet}}</p>
        </div>
      </div>

    </div>




  </main>
</template>

<script>
import param from "../param/param";


export default {
  projet: 'projet',
  name: 'projet',
  data(){
    return{
      projet : [],
      idProjet: [],
      listeProjet: [],
    }
  },

  created() {


    axios.get(param.host + "projet")
      .then(response => {
        this.listeProjet = response.data;
        console.log("Liste", this.listeProjet);
      })
      .catch(error => console.log(error))

    axios.get(param.host + "projet/" + this.$route.params.id)
    .then(response =>{
      console.log("Id", response.data);

      this.projet = response.data;
      this.idProjet = this.projet.id
    }).catch(error=> console.log(error))

    this.imgPreUrl = "https://backendportfolio.maximemalatier.fr/wp-content/uploads/2022/03/"
  }

}

</script>

<style scoped>


h2{
  background-color: #f2e857;
  padding: 20px;
  margin-top: 50px;
  font-size: 30px;
  width: fit-content;
  margin-bottom: 100px;
}


.presentation{
  background-image: url("../assets/backhome.png");
  background-repeat: no-repeat;
  width: 1920px;
  height: 1080px;
}

.mmalatier{
  position: absolute;
  margin-top: -41px;
  margin-left: 24px;
}

.projet .img_projet{
  height: auto;
  background-color: black;
  margin-top: 235px;
}
.projet{
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  position: relative;
  z-index: 2;
  color: #f2e857;
}

.projet .text_projet .projet_content{
  margin-top: 160px;
}
.projet img{
  width: 100%;
}
.projet h3{
  font-size: 25px;
  margin-left: 4%;
  margin-bottom: 60px;
}

.projet p{
  font-size: 20px;
  margin-left: 4%;
}

.projet a{
  color: black;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  margin-right: 45px;
  float: right;
}
.projet .text_projet{
  background-color: black;
  width: 150%;
  margin-top: 235px;
}

.details{
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}

.details p{

  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5px;
  padding-top: 5px;
}


#app > main > div.presentation > div.projet > div.text_projet > div > a{
  color: #f2e857;
}
.details img{
  width: 100%;
}

.des{
  width: 49%;
  padding: 5px;
  color: #f2e857;
}
</style>
