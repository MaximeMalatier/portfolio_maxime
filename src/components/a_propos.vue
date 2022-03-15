<template>
 <main>
   <div class="who">
     <img src="../assets/MOI.png" alt="">
     <div class="text_who">
     <h2>Qui suis - je ?</h2>
     <p>{{about[0].acf.who}}</p>

       <h2>Parcours scolaire</h2>
       <ul>
         <li>{{about[0].acf.parcours1}}</li>
         <li>{{about[0].acf.parcours2}}</li>
         <li>{{about[0].acf.parcours3}}</li>
         <li>{{about[0].acf.parcours4}}</li>
       </ul>


       <a v-bind:href="imgPreUrl + about[0].acf.cv.filename" :download="about[0].acf.cv.filename">VOIR MON CV</a>
     </div>
   </div>
 </main>
</template>

<script>
import param from "../param/param";

export default {
  name: "apropos",
  data(){
    return{
      about:[],

    }
  },

  created() {
    axios.get(param.host+"about")
      .then(response=>{
        this.about = response.data;
        console.log("Liste", this.about);
      }).catch(error=>console.log(error))

    this.imgPreUrl = "https://backendportfolio.maximemalatier.fr/wp-content/uploads/2022/03/"
  }
}
</script>

<style scoped>

h1{
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
}

h2{
font-size: 32px;
}
main{
  color: #f2e857;

}


p{
  font-size: 24px;
}
img{
  display: block;
  width: 33%;
  margin-left: auto;
  margin-right: auto;
}

.who{
  background-color: black;
}

.who ul{
  margin: 0;
  margin-bottom: 25px;
}
.text_who{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
ul li{
  font-size: 25px;
  margin-bottom: 15px;
}

a{
  color: black;
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: 32px;
  background-color: #f2e857;
  margin-top: 15px;
  text-decoration: none;
  padding: 5px;
  border-radius: 2px;
  margin-left: auto;
}
</style>
