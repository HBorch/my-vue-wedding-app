<template> 
    <div class="row">
      <div class="leftcolumn">
        <img alt="Image of Bodil & Henrik" class="circlephoto" src="../assets/images/bodiloghenrik4.png" width="300" height="300"/>
      </div>
      <div class="rightcolumn">
        <h1>Overnatting</h1>
        <p>Alle gjester er velkomne til å bo akkurat hvor de vil. For de som planlegger å overnatte på Voksenåsen hotell er det avtalt en rabbattert pris når man under booking sier at en skal delta i bryllup med oss den helgen.</p>
        <p>For alle andre tilreisende håper vi at de fleste forhåpentligvis har noen kjente i Oslo-området som en kan innlosjeres hos.</p>
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