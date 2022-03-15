<template>
  <div id="app">



    <header>
    <nav>
      <router-link to="/"><img src="./assets/logo.png" alt="logo Maxime Malatier"></router-link>
      <ul>
        <router-link to="/a_propos"><li>A PROPOS</li></router-link>
        <router-link to="/contact"><li>CONTACT</li></router-link>
      </ul>

    </nav>

    </header>

    <router-view></router-view>


    <footer>
      <ul>
        <router-link to="a_propos"><li>A propos</li></router-link>
        <router-link to="contact"><li>Me contacter</li></router-link>
        <router-link to="mentions"><li>Mentions Légales</li></router-link>
        <li><a href="http://mmimontbeliard.com/">MMI Montbéliard</a></li>
      </ul>
    </footer>
  </div>
</template>


<script>


import param from "./param/param";
import appService from "./services/appService";


export default {
  name: 'App',
}


</script>

<style>
@import url('http://fonts.cdnfonts.com/css/akira-expanded');

body{
  font-family: 'Roboto', sans-serif;
}

h2, h3{
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
}
nav{
  background-color: #f2e857;
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;

}

nav ul{
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: end;
}
nav ul li{
  flex-direction: row;
  margin-right: 60px;
  margin-top: 20%;
}

nav img{
  height: 100px;
  width: 100px;
  /*margin-right: 60%;*/
}

nav a{
  color: #f2e857;
  text-decoration: none;
  -webkit-text-stroke: 1px #000000;
  height: fit-content ;
}
html{
  background-color: #2f2f2f;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
body{
  width: 100%;
  padding: 0;
  margin: 0;
}


/*Style de barre de scrolling*/


::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #000000;
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #f2e857;
  border-radius:3px;
}


::-webkit-scrollbar-thumb:hover{
  background: transparent;
  width:10px;
}

footer{
  color: #F1EDDD;
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-style: italic;
  text-align: right;
  background-color: black;
  padding: 10px;
}



footer ul li{
  display: inline-block;
  margin-right: 10px;
  border-right: solid #f2e857;
  padding-right: 20px;
  color: #F1EDDD;
}
#app > footer > ul > li > a{
  color: #F1EDDD;
  text-decoration: none;
}

</style>
