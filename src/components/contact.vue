<template>
  <main>


  </main>
</template>

<script>
export default {
  name: "contact"
}
</script>

<style scoped>
input[type=text], textarea, input[type=email] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  margin-right: 0px;
  margin-left: 0px;
  resize: vertical;
}
label{margin-right: 0px;
  margin-left: 0px;
  width: 100%;}

input[type=submit] {
  background-color: #1255a2;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #1872D9;
}

.form {
  /* Ajouter box-sizing */
  box-sizing : border-box;
  border-radius:5px;
  background-color:#f2f2f2;
  padding:20px;
  width: 100%;
  /* redéfinition 400 + 2*20 */
  max-width: 440px;
  margin:0 auto;
}
h1  {
  color: #ffc800;
  width: 100%;
}

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

.form{
  background-color: #211F1F;
  border-radius: 20px;
  margin-bottom: 100px;
}

@media only screen and (max-width: 780px) {



  h2{
    font-size: 35px;
  }
}
</style>
