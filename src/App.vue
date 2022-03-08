<template>
  <div id="app">



    <header>
    <nav>
      <ul>
        <router-link to="/a_propos"><li>A propos</li></router-link>
        <router-link to="/projet"><li>Travaux</li></router-link>
        <router-link to="/contact"><li>Contact</li></router-link>
      </ul>

    </nav>

    </header>


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

nav ul {
  background-color: #f2e857;
  font-family: 'Akira Expanded', sans-serif;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;

}

nav ul li{
  flex-direction: row;
  margin-left: 40px;
}


a{
  color: #f2e857;
  text-decoration: none;
  -webkit-text-stroke: 1px #000000;
}
html{
  background-color: #2f2f2f;
  padding: 0;
  margin: 0;
}
body{
  width: 100%;
  padding: 0;
  margin: 0;
}


</style>
