<template>
 <main>

 </main>
</template>

<script>
export default {
  name: "apropos"
}
</script>

<style scoped>

main{
  color: #F1EDDD;
}
h1{
  color: #CD99AF;
  font-family: Raleway,sans-serif;
  font-weight: 900;
  font-size: 85px;
  grid-column: 2/5;
  display: block;
  width: fit-content;
  margin-bottom: 0;
  margin-top: 5px;
}

.subtitle{
  color: #3373E5;
  font-weight: 600;
  font-style: italic;
  font-size: 31px;
  grid-column: 4/6;
  width: fit-content;
  margin-top: 0;
  margin-left: 23%;
}

h2{
  font-size: 65px;
  font-weight: 800;
  text-align: right;
  margin: 0;
  flex: 0 1 100%;
  margin-right: 2%;
  padding: 15px;
}

p{
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 30px;
  padding: 10px;
}

.a_propos{
  background-color: #211F1F;
  border-radius: 20px;
  margin-bottom: 225px;
  height: 500px;
}

@media only screen and (max-width: 780px) {

  p{
    font-size: 16px;
  }

  h2{
    font-size: 35px;
  }
}
</style>
