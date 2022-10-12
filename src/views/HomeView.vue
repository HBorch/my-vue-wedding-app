<template> 
<div class="row">
  <div class="leftcolumn">
    <img alt="Image of Bodil & Henrik" class="headerphoto" src="../assets/bodiloghenrik4.png" width="250" height="250"/>
  </div>
  <div class="rightcolumn">
      <h3>Vi gifter oss!</h3>
      <p>Vi er så klare for bryllup, woho</p>
      <div class="fakeimg"><p>Image</p></div>
      <p>Hei på deg</p>
  </div>
</div>
<p>Test</p>
</template>

<script>
</script>

<style scoped>
.leftcolumn {   
  float: left;
  width: 40%;
  padding: 5px;
}
.headerphoto {
  display: block;
  border-radius: 50%;
  margin: 0 auto 2rem;
}
.rightcolumn {
  float: left;
  width: 60%;
  background-color: #f1f1f1;
  padding: 20px;
}
.rightcolumn h3 {
  text-align: center;
}

/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}


/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn {   
    width: 100%;
    padding: 0;
  }
}
</style>
