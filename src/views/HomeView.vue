<template> 
<div class="row">
  <div class="leftcolumn">
    <img alt="Image of Bodil & Henrik" class="circlephoto" src="../assets/images/bodiloghenrik4.png" width="300" height="300"/>
  </div>
  <div class="rightcolumn">
      <h1>Vi gifter oss!</h1>
      <p>Vi gleder oss stort til å samle familie og venner for å feire bryllupet vårt!</p>
      <p>På denne nettsiden finner dere mye relevant, samt en del ikke-relevant, informasjon om den store dagen. Sørg for å ta en titt når datoen nærmer seg for å sikre at dere har fått siste oppdaterte informasjon.</p>
      <h5>-Bodil og Henrik</h5>
  </div>
</div>

<div class="row2">
    <div class="rightcolumn2">
      <img alt="Image of Bodil & Henrik" class="circlephoto" src="../assets/images/dato.png" width="300" height="auto"/>
    </div>
    <div class="leftcolumn2">
      <h1>RSVP</h1>
      <p>Vi har bedt om respons innen 1. feb 23, men jo før - jo bedre!</p>
      <p>Send oss et svar på hvilket som helst medium, vi er fleksible.</p>

    </div>
  </div>

<div class="row">
  <div class="leftcolumn">
    <img alt="Image of Bodil & Henrik" class="circlephoto" src="../assets/images/bodiloghenrik3.png" width="300" height="300"/>
  </div>
  <div class="rightcolumn">
    <h1>Kontaktinformasjon</h1>
    <p>Her følger en liste over relevant kontaktinformasjon for sentrale aktører denne dagen:</p>
    <table>
      <tr>
    <th>Hvem</th>
    <th>Hva</th>
    <th>Mobil</th>
    <th>Mail</th>
  </tr>
  <tr>
    <td>Bodil</td>
    <td>Brud</td>
    <td>48137656</td>
    <td>bodilaamokkelbost@gmail.com</td>
  </tr>
  <tr>
    <td>Henrik</td>
    <td>Brudgom</td>
    <td>91754697</td>
    <td>henrikborc@gmail.com</td>
  </tr>
  <tr>
    <td>TBD</td>
    <td>Toastmaster</td>
    <td>...</td>
    <td>...</td>
  </tr>
  <tr>
    <td>Frida</td>
    <td>Forlover til bruden</td>
    <td>...</td>
    <td>...</td>
  </tr>
  <tr>
    <td>Karl-Sverre</td>
    <td>Forlover til brudgom</td>
    <td>...</td>
    <td>...</td>
  </tr>
</table>
  </div>
</div>

</template>

<script>
</script>

<style scoped>

.leftcolumn {   
  float: left;
  width: 50%;
  padding-top: 25px;
  height: 300px;
}
.circlephoto {
  display: block;
  border-radius: 50%;
  margin: 0 auto 2rem;
}
.rightcolumn {
  float: left;
  width: 50%;
  height: 300px;
  margin-top: 25px;
  padding: 30px;
}
.rightcolumn h1 {
  font-family: Brighte;
  font-size: 50px;
  text-align: center;
}

.leftcolumn2 {   
  float: right;
  width: 50%;
  text-align: center;
  padding-top: 100px;
  height: 300px;
}


.rightcolumn2 {
  float: right;
  width: 50%;
  padding-top: 25px;
  height: 350px;
}
.leftcolumn2 h1 {
  text-align: center;
  font-family: Brighte;
  font-size: 45px;
}

table {
  margin-top: 20px;
  font-family: sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f4fffa;
}

/* Clear floats after the columns */
.row:after {
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
  .leftcolumn, .rightcolumn {   
    width: 100%;
    padding: 25px;
  }
  .leftcolumn2, .rightcolumn2 {
    width:100%;
    padding: 25px;
  }
}
</style>
