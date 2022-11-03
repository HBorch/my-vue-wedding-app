<template> 
  <div class="row">
    <div class="leftcolumn">
      <img alt="Image of Bodil & Henrik" class="circlephoto" src="../assets/images/bodiloghenrik4.png" width="300" height="300"/>
    </div>
    <div class="rightcolumn">
        <h1>Informasjon</h1>
        <h4>Tentativ plan over dagen:</h4>
        <h4>14:00 - Vielse </h4>
        <h4>17:00 - Mottakelse</h4>  
        <h4>17:30 - Middag</h4>
        <h4>22:00 - Fest</h4>
    </div>
  </div>
  
  <div class="row2">
      <div class="rightcolumn2">
        <img alt="Image of Bodil & Henrik" class="circlephoto" src="../assets/images/dato.png" width="300" height="auto"/>
      </div>
      <div class="leftcolumn2">
        <h1>Voksenåsen Hotell</h1>
        <p>Både vielse og fest vil foregå på Voksenåsen Hotell.</p>
        <p>Vi håper på finvær så vi kan nyte en strålende utsikt over deler av Oslo og Oslofjorden.</p>
        <p>Adresse: Ullveien 4, 0791 Oslo</p>
        <p>Nettside: <a href="https://www.voksenaasen.no">Voksenåsen Hotell</a></p>
        <p></p>
        <h4>Veibeskrivelse:</h4>
        <p>Med bil: Følg skilt mot Majorstuen / Smestad. I Smestadkrysset, kjør mot Holmenkollen. Følg Holmenkollveien forbi hoppanlegget, og følg deretter skilt mot Voksenåsen / Voksenkollen. Med Voksenkollen T-banestasjon på høyre side, ta til venstre i veikrysset med et stort, hvitt skilt mot ”Voksenåsen kultur- og konferansehotell».</p>
        <p></p>
        <p>Med Bane: Ta T-bane nummer 1 mot Frognerseteren. Reisen tar cirka 35 min. Gå av ved stoppested Voksenkollen. Det er nest siste stopp på linjen. Fra Voksenkollen T-banestasjon er det 700 meter til hotellet. Følg det hvite skiltet merket “Voksenåsen kultur- og konferansehotell”.</p>
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
  .rightcolumn h4 {
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