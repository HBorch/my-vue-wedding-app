<template>
  <div class="row1">
    
    <div class="leftcolumn1">
    <div class="card">  
      <img alt="Image of Bodil & Henrik" class="headerphoto" src="../assets/images/bodiloghenrik4.png" width="250" height="250"/>
    </div>
    </div>
    <div class="rightcolumn1">
    <div class="card">
      <h3>Informasjon</h3>
      <p></p>
      <p>Her kommer det viktig informasjon om selve dagen:</p>
      <img alt="iconHandshake" class="icon" src="../assets/icons/handshake.svg">
      <h4>Vielse 1400</h4>
      <img alt="iconAgreement" class="icon" src="../assets/icons/location.svg">
     <h4>Voksenåsen Hotell</h4>
      <img alt="iconCelebration" class="icon" src="../assets/icons/celebration.svg">
      <h4>Middag 1630</h4>
    </div>
  </div>
  </div>
<p>-break-</p>

  <div class="row2">
    <div class="rightcolumn2">
      <img alt="Image of Bodil & Henrik" class="headerphoto" src="../assets/images/bodiloghenrik4.png" width="250" height="250"/>
    </div>
    <div class="leftcolumn2">
      <h3>Lokasjon</h3>
      <p>Både vielsen og festen vil foregå på Voksenåsen Hotell</p>
      <p>Adresse:</p>
      <p>Veibeskrivelse: </p>
    </div>
  </div>
  
  <button class="accordion">Section 1</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<p>Test</p>
</template>






<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
</script>

<style scoped>
.card {
  background-color: grey;
  padding: 20px;
  margin-top: 20px;
}

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
    padding: 5px;
  }
  .leftcolumn2, .rightcolumn2 {
    width:100%;
    padding: 5px;
  }
}


.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc; 
}

.panel {
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
}
</style>