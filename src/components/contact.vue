<template>
  <main>
    <div class="contact">
      <img src="../assets/MOI.png" alt="maxime malatier">
      <div class="text_contact">
        <div>
        <h2>Maxime Malatier</h2>
        <p><a href="mailto:maxime.malatier@gmail.com">envoyez moi un mail</a></p>
        <h2>Mes Reseaux sociaux</h2>
        <ul>
          <li><a v-bind:href="contact[0].acf.twitter"><img src="../assets/twitter_yellow.png" alt=""></a></li>
          <li><a v-bind:href="contact[0].acf.instagram"><img src="../assets/insta_yellow.png" alt=""></a></li>
          <li><a v-bind:href="contact[0].acf.linkedin"><img src="../assets/linkedin_yellow.png" alt=""></a></li>
        </ul>
        </div>
      </div>
    </div>


  </main>
</template>

<script>

import param from "../param/param";
export default {
  name: "contact",

  data(){
    return{
      contact:[],
    }
  },

  created() {
    axios.get(param.host+"contact")
      .then(response=>{
        this.contact = response.data
        console.log("contact", this.contact);
      }).catch(error=>console.log(error))
  }

}
</script>

<style scoped>
#app > main > div > img{
  width: 50%;
}

.contact{
  background-color: black;
  display: flex;
  flex-direction: row;
  color: #f2e857;
}
.contact a{
  color: #f2e857;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
}

.contact h2{
  font-size: 34px;
  margin-bottom: 60px;
  margin-top: 60px;
}

.text_contact{
  width: 50%;
  font-size: 24px;
}

.text_contact h2{
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
.contact ul{
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.contact ul li{
  width: 120px;
  height: 120px;
  margin-right: 50px;
}

.contact ul li img{
  width: 100%;
}

#app > main > div > div > div > ul > li:nth-child(3){
  margin-right: 0;
}
#app > main > div > div > div > ul > li:nth-child(1){
  width: 100px;
}

.text_contact a{
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.text_contact p{
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.text_contact div{
  margin-top: 240px;
}
</style>
