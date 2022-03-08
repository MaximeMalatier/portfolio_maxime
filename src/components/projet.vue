<template>
  <main>

  </main>
</template>

<script>
export default {
  name: "mentions"
}
</script>

<style scoped>
main{
  color: #F1EDDD;
  text-align: left;
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

h5{
  font-size: 17px;
  margin-bottom: 15px;
  padding: 10px;
}
.mentions{
  background-color: #211F1F;
  border-radius: 20px;
  margin-bottom: 100px;
}

.text_mentions{
  padding: 50px;
}

@media only screen and (max-width: 780px) {

  p{
    font-size: 12px;
  }

  h2{
    font-size: 35px;
  }
}
</style>
