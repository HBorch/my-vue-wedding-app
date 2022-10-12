<template>
  <div class="row1">
    <div class="leftcolumn1">
      <img alt="Image of Bodil & Henrik" class="headerphoto" src="../assets/bodiloghenrik4.png" width="250" height="250"/>
    </div>
    <div class="rightcolumn1">
      <h3>Informasjon</h3>
      <p>Vi er så klare for bryllup, woho</p>
      <p>Her kommer det viktig informasjon om selve dagen:</p>
      <img alt="iconHandshake" class="icon" src="../components/icons/handshake.svg">
      <h4>Vielse 1400</h4>
      <img alt="iconAgreement" class="icon" src="../components/icons/location.svg">
     <h4>Voksenåsen Hotell</h4>
      <img alt="iconCelebration" class="icon" src="../components/icons/celebration.svg">
      <h4>Middag 1630</h4>
    </div>
  </div>
<p>-break-</p>

  <div class="row2">
    <div class="rightcolumn2">
      <img alt="Image of Bodil & Henrik" class="headerphoto" src="../assets/bodiloghenrik4.png" width="250" height="250"/>
    </div>
    <div class="leftcolumn2">
      <h3>Lokasjon</h3>
      <p>Både vielsen og festen vil foregå på Voksenåsen Hotell</p>
      <p>Adresse:</p>
      <p>Veibeskrivelse: </p>
    </div>
  </div>


<p>Test</p>
</template>

<script>
</script>

<style scoped>
.leftcolumn1 {   
  float: left;
  width: 40%;
  padding: 5px;
}

.rightcolumn1 {
  float: left;
  width: 60%;
  padding: 20px;
}
.rightcolumn1 h3 {
  text-align: center;
}

.rightcolumn1 h4 {
  color: blue;
  font-size: 20px ;
}
.icon {
  float: left;
}


.leftcolumn2 {   
  float: right;
  width: 60%;
  padding: 5px;
}

.rightcolumn2 {
  float: right;
  width: 40%;
  padding: 20px;
}
.leftcolumn2 h3 {
  text-align: center;
}

/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}


/* Clear floats after the columns */
.row1:after {
  content: "";
  display: table;
  clear: both;
}

.row2:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn1, .rightcolumn1 {   
    width: 100%;
    padding: 0;
  }
  .leftcolumn2, .rightcolumn2 {
    width:100%;
    padding: 0;
  }
}
</style>