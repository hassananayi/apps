//***************************//
// SMART Cockpit
// V 1.06
//***************************//

$("<style>").appendTo("head").html(`

  body {
    background-color: #fff !important;
}

.card-footer{
background: #0000FF;
    color: #fff;
}

.fuellgradAnzeigeTag {
    
    background-color: #20DE61;
}

.card{
    border: none;
    border-radius: 8px;
    overflow: hidden;
}
.card-fbr{
    border-right: 2px solid #ffffff33;
}

.section_header {
    font-size: 21px;
    padding-bottom: 10px;
    border-bottom: 1px solid #cecece;
}

.section_header small{
 font-size: 14px;
}

.list-group-item {
    background-color: transparent;
    border-right: none;
    border-left: none;
    padding-left: 0;
    padding-right: 0;
}

.is_avance {
    height: 22px;
    width: 22px;
    background: #20DE61;
    border-radius: 50%;
}

.progress {
    display: block;
}
    
.progress__txt {
    color: #003278;
    width: 100%;
    text-align: center;
    position: relative;
    top: -1.4em;
}

.progress-bar {
    height: 1.4em;
}

.user_img{
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-right: 10px;
}

.user_name{
font-size:15px;
}

.load{
font-size: 16px;
    cursor: pointer;
}

.trafficLightVorrausware{
    border: none;
}

i.fal.fa-link {
    position: absolute;
    top: 7px;
}
   .canvas-container {
            position: relative;
        }
#tooltip{
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  pointer-events: none;
  display: none;
}

.palette_status_color {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin-right: 10px;
    background: #000;
}

.palettes_decharg_bar {
    background: #3498db;
    color: #505050;
}
`);

let page_body = `

<div class="container">
  <!-- Welcome -->
  <p class="fs-5 font-weight-bold mb-0">SMART Cockpit</p>
  <p class="mb-1" style="font-size: 31px">Bonjour <span id="username">...</span>,</p>
  <p id="date_tody" class="text-muted" style="font-size: 18px">Performance du lundi 10 juin 2024 à 13h45</p>
</div>

<!-- cards -->
<div class="container my-4">
  <div class="row">
    <div class="col-sm">
      <div class="card shadow">
        <div class="card-body pb-1 pl-4">
          <div class="d-flex">
            <div class="w-75">
              <i class="fal fa-truck-container fa-flip-horizontal text-primary mb-2" aria-hidden="true" style="text-align: end; font-size: 50px"></i>
              <h2 class="text-primary mb-1 my-3">Tournées Entrée de marchandises</h2>
            </div>

            <div class="w-25 text-center">
              <h2 class="text-primary mb-3" style="font-size: 53px" id="em_total">00</h2>
              <div class="progress"><div class="progress-bar fuellgradAnzeigeTag" role="progressbar" id="em_progressbar" style="width: 0%"></div>
              <div class="progress__txt" id="em_text_progressbar"> </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="container">
            <div class="row">
            
               <div class="col-sm text-center card-fbr">
                <p class="font-weight-bold mb-1" style="font-size: 21px" id="em_ouverte">0</p>
                <p>Ouverte</p>
              </div> 
              <div class="col-sm text-center card-fbr">
                <p class="font-weight-bold mb-1" style="font-size: 21px" id="em_pret">0</p>
                <p>Prêt</p>
              </div>
              <div class="col-sm text-center card-fbr">
                <p class="font-weight-bold mb-1" style="font-size: 21px" id="em_entrepot">0</p>
                <p>l’entrepôt</p>
              </div>
              <div class="col-sm text-center  card-fbr">
                <p class="font-weight-bold mb-1" style="font-size: 21px"  id="em_encours">0</p>
                <p>En cours</p>
              </div>
                <div class="col-sm text-center">
                <p class="font-weight-bold mb-1" style="font-size: 21px" id="em_termine">0</p>
                <p>Terminé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <div class="card shadow">
        <div class="card-body pb-1 pl-4">
          <div class="d-flex">
            <div class="w-75">
              <i class="fal fa-truck-container text-primary mb-2" aria-hidden="true" style="text-align: end; font-size: 50px"></i>
              <h2 class="text-primary mb-1 my-3">Tournées Sortie de marchandises</h2>
            </div>

            <div class="w-25 text-center">
              <h2 class="text-primary mb-3" style="font-size: 53px" id="sm_total">00</h2>
              <div class="progress"><div id="sm_progressbar"class="progress-bar fuellgradAnzeigeTag" role="progressbar" style="width: 0%"></div>
               <div class="progress__txt" id="sm_text_progressbar"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer" style="background: #003278;>

        <div class="container">
          <div class="row">
            <div class="col-sm text-center card-fbr">
              <p class="font-weight-bold mb-1" style="font-size: 21px" id="sm_ouverte">0</p>
              <p>Ouverte</p>
            </div>
            <div class="col-sm text-center card-fbr">
              <p class="font-weight-bold mb-1" style="font-size: 21px" id="sm_pret">0</p>
              <p>Prêt</p>
            </div>

            <div class="col-sm text-center card-fbr">
              <p class="font-weight-bold mb-1" style="font-size: 21px" id="sm_entrepot">0</p>
              <p>l’entrepôt</p>
            </div>
            <div class="col-sm text-center card-fbr">
              <p class="font-weight-bold mb-1" style="font-size: 21px"  id="sm_encours">0</p>
              <p>En cours</p>
            </div>
            <div class="col-sm text-center ">
              <p class="font-weight-bold mb-1" style="font-size: 21px" id="sm_termine">0</p>
              <p>Terminé</p>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container py-4">
  <div class="row">
    <div class="col-8">

        <!-- Parc -->
      <div class="section_header">Parc <small class="text-muted"><span id="camions_parc">0</span> camions</small></div>
        <ul class="list-group list-group-flush" id="parc_list"></ul>

        <!-- Dans l’entrepôt -->
      <div class="section_header pt-5">Dans l’entrepôt <small class="text-muted"> <span id="camions_entrepot">0</span> camions</small></div>
        <ul class="list-group list-group-flush" id="entrepot_list"></ul>


         <!-- En cours-->
      <div class="section_header pt-5">En cours <small class="text-muted"> <span id="camions_encours">0</span> camions</small> </div>
        <ul class="list-group list-group-flush" id="encours_list"></ul>
        
       <!-- Prêt pour départ-->
      <div class="section_header pt-5">Prêt pour départ <small class="text-muted"> <span id="camions_pret_depart">0</span> camions</small> </div>
        <ul class="list-group list-group-flush" id="pret_depart_list"></ul>
        
        <!-- Tournées EM Terminé-->
      <div class="section_header pt-5">Tournées EM Terminé <small class="text-muted"> <span id="camions_termine">0</span> camions</small> </div>
      <ul class="list-group list-group-flush" id="termine_list"></ul>      
    </div>

    <div class="col-4">
      <div class="section_header">Administrateurs & Collaborateurs</div>
      <div id="users"></div>

     <!-- Statistiques des palettes-->
      <div class="section_header mt-3">Statistiques des palettes <small class="text-muted"> <span id="all_palettes">0</span> palettes</small></div>
      <div class="canvas-container mt-4 mb-4">
        <canvas id="myPieChart" width="325" height="325"></canvas>
        <ul class="list-group mt-3">
          <li class="list-group-item d-flex align-items-center"  data-toggle="tooltip" data-placement="left" data-html="true" title="Nombre de palettes commandées pour ce jour (jour de livraison), mais pas encore affectées à une tournée de sortie de marchandises."><div class="palette_status_color" style="background:#e9ecef"></div> Non affecté <span class="ml-auto" id="palettes_non_affecte">0</span></li>
          <li class="list-group-item d-flex align-items-center"  data-toggle="tooltip" data-placement="left"  title="Statut 10"><div class="palette_status_color" style="background:#b2c8df"></div> Ouverte <span class="ml-auto" id="palettes_ouverte">0</span></li>
          <li class="list-group-item d-flex align-items-center"  data-toggle="tooltip" data-placement="left" title="Statut 20"><div class="palette_status_color" style="background: rgb(75, 192, 192);"></div> En attente du déchargement  <span class="ml-auto" id="palettes_parc">0</span></li>
          <li class="list-group-item d-flex align-items-center"  data-toggle="tooltip" data-placement="left"  title="Statut 50"><div class="palette_status_color" style="background:rgb(255, 205, 86);"></div> EM en cours  <span class="ml-auto" id="palettes_em_encours">0</span></li>
          <li class="list-group-item d-flex align-items-center"  data-toggle="tooltip" data-placement="left"  title="Statut 41, 42 ou 43"><div class="palette_status_color" style="background: rgb(192 57 43);"></div> Cas particuliers  <span class="ml-auto" id="palettes_cas_particuliers">0</span></li>
          <li class="list-group-item d-flex align-items-center"  data-toggle="tooltip" data-placement="left"  title="Statut 70"><div class="palette_status_color" style="background: rgb(52 152 219);"></div> En stock  <span class="ml-auto" id="palettes_en_stock">0</span></li>
          <li class="list-group-item d-flex align-items-center"  data-toggle="tooltip" data-placement="left" title="Statut 80 ou 81"><div class="palette_status_color" style="background: rgb(230 126 34);"></div> SM en cours  <span class="ml-auto" id="palettes_sm_encours">0</small></li>
          <li class="list-group-item d-flex align-items-center"  data-toggle="tooltip" data-placement="left"  title="Statut 90"><div class="palette_status_color" style="background: rgb(155, 206, 90);"></div> Terminé  <span class="ml-auto" id="palettes_termine">0</span></li>
          </ul>
          <div class="progress mt-4"><div class="progress-bar palettes_decharg_bar" role="progressbar" id="palettes_progressbar" style="width: 0%"></div>
              <div class="progress__txt" id="palettes_text_progressbar">0 / 0</div>
              </div>

          <p class="mt-4 mb-4" id="rest_decharg"></p>
          <small class="mt-4 mb-4 text-muted" id="unloading_time"></small>
    </div>


      
    </div>

  </div>
</div>

`;

$("head>title").html("SMART Cockpit :: XDock PRO");
// inject page body to dom
$("#img-zonenuebersicht").parent().replaceWith(page_body);


  // Set page header
  $("h1").parent().replaceWith(`<div id="xdock_pro_page_header" class="row d-flex align-items-center h-100 xdock-head-row">
    <div class="col-6 h-100 xdock-head-title">
        <h1>
           XDock PRO <span class="fa fa-caret-right navArrow"></span> SMART Cockpit   
        </h1>
    </div>
    <div class="col-6 text-right">
      <a href="https://tf-stb.github.io/rapport-collaborateurs/" target="_blank" class="btn btn-sm btn-outline-primary"  id="zones_preliv"><span class="fal fa-file-alt mr-10"></span>Rapport d'activité des collaborateurs</a>
    
     
    </div>
    </div>`);

 

function formatDateX(date) {
  const jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
  const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

  const jourSemaine = jours[date.getDay()];
  const jour = date.getDate();
  const moisNom = mois[date.getMonth()];
  const annee = date.getFullYear();
  const heures = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `Performance du ${jourSemaine} ${jour} ${moisNom} ${annee} à ${heures}h${minutes}`;
}

const date = new Date();
document.getElementById("date_tody").textContent = formatDateX(date);

let selected_date;
if (window.location.href.includes("?selectedDate")) {
  selected_date = window.location.href.split("?selectedDate=")[1];
  $("#selectedDate").val(selected_date)
   const date2 = new Date(selected_date);
   document.getElementById("date_tody").textContent = formatDateX(date2);
} else {
  selected_date = $("#selectedDate").val();
}

$("#selectedDate").on("change", function (e) {
  // update url
  window.location.href = "/#cockpit" + "?selectedDate=" + $("#selectedDate").val();

  window.location.reload()
});

//-----------------------------------//
// Administrateurs & Collaborateur
//----------------------------------//

// When dom ready call data
$(document).ready(function () {
  // CALL portes DATA
  $.get("/User?sort=LastActiveAt", function (data, textStatus, jqXHR) {
    $(data)
      .find("#artikel-table tbody tr")
      .each(function (indexInArray, valueOfElement) {
        let user_full_name = valueOfElement.cells[2].innerText.trim();
        let user_email = valueOfElement.cells[1].innerText.trim();
        let user_last_login = valueOfElement.cells[4].innerText.trim();
        let user_id = valueOfElement.cells[0].innerText.trim();

        if (document.body.innerHTML.includes(user_email)) {
          $("#username").html(user_full_name);
        }

        if (user_last_login == "heute") {
          $("#users").append(`
              <div class="media text-muted pt-3">
                <div class="rounded bg-primary text-light user_img">${user_full_name.charAt(0)}</div>
                  <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                  <div class="d-flex justify-content-between align-items-center w-100">
                  <strong class="text-gray-dark user_name">${user_full_name}</strong>
                  <span class="text-success" style="font-size: 14px;" id="coll_${user_id}">Présent</span>
                  <span class="d-none" id="camions_coll_${user_id}">0</span>
                  </div>
                  <span class="d-block">${user_email}</span>
                </div>
              </div>`);
        }
      });
  });
});

//-----------------------------------//
// Tournées Entrée de marchandises
//----------------------------------//

// When dom ready call data
$(document).ready(function () {
  let total = 0;
  let pret = 0;
  let ouverte = 0;
  let entrepot = 0;
  let encours = 0;
  let termine = 0;
  // CALL portes DATA
  $.get("/Wareneingang/Tag?sort=StatusASC&selectedDate=" + selected_date, function (data, textStatus, jqXHR) {
    $(data)
      .find("#we-table tbody>tr")
      .each(function (indexInArray, valueOfElement) {
        let status = valueOfElement.cells[1].innerText.trim();
        let coll_ID = parseInt($(valueOfElement.cells[9]).find("select").val());

        let tour_btn = valueOfElement.cells[0].innerHTML;
        let emplacements = valueOfElement.cells[5].innerText.trim();
        let fournisseur = valueOfElement.cells[2].innerText.trim();
        let transitaire = valueOfElement.cells[3].innerText.trim();
        let heure_darrivee = valueOfElement.cells[4].innerText.trim();
        let arreter = valueOfElement.cells[8].innerText.trim();

        switch (status) {
          case "10":
          case "11":
            ouverte += 1;
            break;
          case "20":
            pret += 1;
            break;
          case "75":
          case "44":
          case "40":
            entrepot += 1;
            break;
          case "80":
            encours += 1;
            break;
          case "81":
          case "89":
          case "90":
            let timeDifference = calculateTimeDifference(heure_darrivee, arreter);

            $("#termine_list").append(`        
            <li class="list-group-item">
          <div class="container">
          <div class="row align-items-center">
            <div class="col-2">${tour_btn}</div>
            <div class="col-4">
              <small class="text-muted mb-1 text-uppercase"> ${transitaire}</small>
              <p class="mb-1" style="font-size: 19px"> ${fournisseur}</p>
            </div>
            <div class="col-6"><strong class="mb-1 text-primary "><i class="far fa-clock" aria-hidden="true"></i> Durée du traitement : ${timeDifference.hours}h ${timeDifference.minutes} min </strong> <p class="mb-1">Emplacements: ${emplacements} </p></div>
            
             
            </div>
          
          </li>`);

            termine += 1;
            break;
        }

        total += 1;

        // count coll  camions
        let last_count = parseInt($(`#camions_coll_${coll_ID}`).html());
        $(`#camions_coll_${coll_ID}`).html(last_count + 1);

        $(`#coll_${coll_ID}`).html(`<span class="badge bg-secondary  text-light">${$(`#camions_coll_${coll_ID}`).html()} camions</span>`);
      });

    $("#em_total").html(total);
    $("#em_ouverte").html(ouverte);
    $("#em_pret").html(pret);
    $("#em_entrepot").html(entrepot);
    $("#em_encours").html(encours);
    $("#em_termine").html(termine);
    $("#camions_termine").html(termine);
    const percentageFinished = (termine / total) * 100;
    let progressbar_width = `width: ${percentageFinished.toFixed(2)}%`;
    $("#em_progressbar").attr("style", progressbar_width);
    $("#em_text_progressbar").html(`${termine} / ${total}`);
  });
});

//-----------------------------------//
// Tournées Sortie de marchandises
//----------------------------------//
// When dom ready call data
$(document).ready(function () {
  let total = 0;
  let pret = 0;
  let ouverte = 0;
  let entrepot = 0;
  let encours = 0;
  let termine = 0;

  // CALL portes DATA
  $.get("/Warenausgang/Tag?sort=Status&selectedDate=" + selected_date, function (data, textStatus, jqXHR) {
    obj_data = $(data);
    statistiques_des_palettes(obj_data);
    obj_data.find("#wa-table tbody>tr").each(function (indexInArray, valueOfElement) {
      let status = valueOfElement.cells[1].innerText.trim();
      let coll_ID = parseInt($($(valueOfElement.cells[18])[0]).attr("data-selected"));
      switch (status) {
        case "10":
        case "11":
        case "50":
          ouverte += 1;
          break;
        case "70":
        case "71":
        case "72":
          pret += 1;
          break;
        case "75":
        case "44":
        case "40":
          entrepot += 1;
          break;
        case "80":
          encours += 1;
          break;
        case "81":
        case "89":
        case "90":
          termine += 1;
          break;
      }

      total += 1;

      // count coll  camions
      let last_count = parseInt($(`#camions_coll_${coll_ID}`).html());
      $(`#camions_coll_${coll_ID}`).html(last_count + 1);

      // This should check the updated count
      $(`#coll_${coll_ID}`).html(`<span class="badge bg-secondary text-light">${$(`#camions_coll_${coll_ID}`).html()} camions</span>`);
    });

    $("#sm_total").html(total);
    $("#sm_pret").html(pret);
    $("#sm_ouverte").html(ouverte);
    $("#sm_entrepot").html(entrepot);
    $("#sm_encours").html(encours);
    $("#sm_termine").html(termine);

    const percentageFinished = (termine / total) * 100;
    let progressbar_width = `width: ${percentageFinished.toFixed(2)}%`;
    $("#sm_progressbar").attr("style", progressbar_width);
    $("#sm_text_progressbar").html(`${termine} / ${total}`);
  });
});

//-----------------------------------//
// Tâches Parc,Dans l’entrepôt ET EN COURS
//----------------------------------//

$(document).ready(function () {
  let parc = 0;
  let entrepot = 0;
  let encours = 0;
  let pret_depart = 0;

  // CALL portes DATA
  $.get("/Taskmanagement/Yardmanagement?sort=Ankunftszeit&AmLager=true&InArbeit=true", function (data, textStatus, jqXHR) {
    $(data)
      .find("#yard-table tbody>tr")
      .each(function (indexInArray, valueOfElement) {
        let tour_btn = valueOfElement.cells[1].innerHTML;
        let status = valueOfElement.cells[2].innerText.trim();
        let niveau_remplis = valueOfElement.cells[4].innerHTML;
        let fournisseur_destination = valueOfElement.cells[5].innerText.trim();
        let transitaire = valueOfElement.cells[6].innerText.trim();
        let heure_validation = valueOfElement.cells[10].innerText.trim();
        let marchandises_en_avance = valueOfElement.cells[11].innerHTML;

        if (niveau_remplis.length < 100) {
          niveau_remplis = "Niveau remplis." + niveau_remplis;
        }

        switch (status) {
          case "20":
            $("#parc_list").append(`        
                <li class="list-group-item">
              <div class="container">
              <div class="row align-items-center">
                <div class="col-2">${tour_btn}</div>
                <div class="col-3">
                  <small class="text-muted mb-1 text-uppercase"> ${transitaire}</small>
                  <p class="mb-1" style="font-size: 19px"> ${fournisseur_destination}</p>
                </div>
                <div class="col-4">${getTimeDifference(heure_validation)}<p class="mb-1">${niveau_remplis} </p></div>
                
                  <div class="col-3  text-right">
                     ${marchandises_en_avance}
                  </div>
                </div>
              
              </li>`);

            parc += 1;

            break;
          case "70":
          case "71":
          case "72":
            $("#parc_list").append(`        
            <li class="list-group-item">
          <div class="container">
          <div class="row align-items-center">
            <div class="col-2">${tour_btn}</div>
            <div class="col-3">
              <small class="text-muted mb-1 text-uppercase"> ${transitaire}</small>
              <p class="mb-1" style="font-size: 19px"> ${fournisseur_destination}</p>
            </div>
            <div class="col-4">${getTimeDifference(heure_validation)}</div>
            
              <div class="col-3  text-right">
                  ${niveau_remplis}
              </div>
            </div>
          
          </li>`);

            parc += 1;

            break;
          case "75":
          case "44":
          case "40":
            $("#entrepot_list").append(`        
            <li class="list-group-item">
          <div class="container">
          <div class="row align-items-center">
            <div class="col-2">${tour_btn}</div>
            <div class="col-3">
              <small class="text-muted mb-1 text-uppercase"> ${transitaire}</small>
              <p class="mb-1" style="font-size: 19px"> ${fournisseur_destination}</p>
            </div>
            <div class="col-4">${getTimeDifference(heure_validation)}</div>
            
              <div class="col-3  text-right">
                 ${niveau_remplis}
              </div>
            </div>
          
          </li>`);

            entrepot += 1;
            break;
          case "80":
            $("#encours_list").append(`        
            <li class="list-group-item">
          <div class="container">
          <div class="row align-items-center">
            <div class="col-2">${tour_btn}</div>
            <div class="col-3">
              <small class="text-muted mb-1 text-uppercase"> ${transitaire}</small>
              <p class="mb-1" style="font-size: 19px"> ${fournisseur_destination}</p>
            </div>
            <div class="col-4">${getTimeDifference(heure_validation)}</div>
            
              <div class="col-3  text-right">
                  ${niveau_remplis}
              </div>
            </div>
          
          </li>`);

            encours += 1;
            break;
          case "81":
            $("#pret_depart_list").append(`        
              <li class="list-group-item">
            <div class="container">
            <div class="row align-items-center">
              <div class="col-2">${tour_btn}</div>
              <div class="col-3">
                <small class="text-muted mb-1 text-uppercase"> ${transitaire}</small>
                <p class="mb-1" style="font-size: 19px"> ${fournisseur_destination}</p>
              </div>
              <div class="col-4">${getTimeDifference(heure_validation)}</div>
              
                <div class="col-3  text-right">
                    ${niveau_remplis}
                </div>
              </div>
            
            </li>`);

            pret_depart += 1;
            break;
        }

        //disply count
        $("#camions_parc").html(parc);
        $("#camions_entrepot").html(entrepot);
        $("#camions_encours").html(encours);
        $("#camions_pret_depart").html(pret_depart);
      });
  });
});

function getTimeDifference(specificDateString) {
  // Parse the specific date string to a Date object
  const specificDateParts = specificDateString.split(" ");
  const dateParts = specificDateParts[0].split(".");
  const timeParts = specificDateParts[1].split(":");

  const specificDate = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${timeParts[0]}:${timeParts[1]}:${timeParts[2]}`);

  // Get the current date and time
  const now = new Date();

  // Calculate the difference in milliseconds
  let diffInMillis = specificDate - now;
  let isPast = false;

  if (diffInMillis < 0) {
    // If the specific date is in the past, use its absolute value
    diffInMillis = Math.abs(diffInMillis);
    isPast = true;
  }

  // Calculate the difference in hours and minutes
  const diffInMinutes = Math.floor(diffInMillis / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const remainingMinutes = diffInMinutes % 60;

  // Determine the color based on the time difference
  let colorClass = "";
  if (diffInMinutes <= 60) {
    colorClass = "text-successx text-primary"; // green
  } else if (diffInMinutes <= 120) {
    colorClass = "text-warningx text-primary"; // orange
  } else {
    colorClass = "text-dangerx text-primary"; // red
  }

  // Format the output string
  const output = `<strong class="mb-1 ${colorClass}"><i class="far fa-clock" aria-hidden="true"></i> ${diffInHours}h ${remainingMinutes} min d'attente</strong>`;

  return output;
}

function getTaskCompletionPercentage(totalTasks, finishedTasks) {
  return ((finishedTasks / totalTasks) * 100).toFixed(2);
}

function calculateTimeDifference(startDateTimeStr, endTimeStr) {
  // Parse the start date and time string into a Date object
  let [startDate, startTime] = startDateTimeStr.split(" ");
  let [day, month, year] = startDate.split(".").map(Number);
  let [startHour, startMinute, startSecond] = startTime.split(":").map(Number);
  let startDateTime = new Date(year, month - 1, day, startHour, startMinute, startSecond);

  // Extract the end time hours and minutes
  let [endHour, endMinute] = endTimeStr.split(":").map(Number);

  // Create the end date and time based on the start date
  let endDateTime = new Date(year, month - 1, day, endHour, endMinute, 0);

  // If the end time is earlier in the day than the start time, it must be on the next day
  if (endDateTime <= startDateTime) {
    endDateTime.setDate(endDateTime.getDate() + 1);
  }

  // Calculate the difference in milliseconds
  let timeDifferenceMs = endDateTime - startDateTime;

  // Convert the difference to hours and minutes
  let diffHours = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
  let diffMinutes = Math.floor((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));

  // Return the time difference as an object
  return {
    hours: diffHours,
    minutes: diffMinutes,
  };
}

//-----------------------------------//
// Statut des palettes
//----------------------------------//
function statistiques_des_palettes(data_sm) {
  let palettes = [];
  data_sm
    .find('[aria-label="PalettenStatusListeTable1"] tbody>tr:not([style="display: none"]),[aria-label="PalettenStatusListeTable2"] tbody>tr:not([style="display: none"])')
    .each(function (indexInArray, valueOfElement) {
      let value = valueOfElement.cells[1];
      if (value) {
        palettes.push(parseInt(value.innerText.trim()));
      }
    });

  let rest_to_unloding = palettes[0] + palettes[1] + palettes[2];
  // add to dom

  $("#palettes_non_affecte").html(palettes[0]);
  $("#palettes_ouverte").html(palettes[1]);
  $("#palettes_parc").html(palettes[2]);
  $("#palettes_em_encours").html(palettes[3]);
  $("#palettes_cas_particuliers").html(palettes[4]);
  $("#palettes_en_stock").html(palettes[5]);
  $("#palettes_sm_encours").html(palettes[6]);
  $("#palettes_termine").html(palettes[7]);

  $("#rest_decharg").html(`Il reste à décharger <strong>${rest_to_unloding}</strong> palettes, soit environ <strong>${Math.ceil(rest_to_unloding / 33)}</strong> camions.`);

  const canvas = document.getElementById("myPieChart");
  const ctx = canvas.getContext("2d");

  // Data for the pie chart
  const data = [
    { value: palettes[0], color: "#e9ecef" }, //non efacty
    { value: palettes[1], color: "#b2c8df" }, //Ouverte
    { value: palettes[2], color: "rgb(75, 192, 192)" }, // parc
    { value: palettes[3], color: "rgb(255, 205, 86)" }, // EM en cours
    { value: palettes[4], color: "rgb(180, 30, 10)" }, // cas particles
    { value: palettes[5], color: "rgb(52 152 219)" }, // en stock
    { value: palettes[6], color: "rgb(230 126 34)" }, // SM en cours
    { value: palettes[7], color: "rgb(46 204 113)" }, // termine
  ];
  // Function to draw the pie chart with percentages
  function drawPieChart(ctx, data) {
    let total = data.reduce((sum, item) => sum + item.value, 0);

    $("#all_palettes").html(total);
    let pal_progressbar_width = `width: ${getTaskCompletionPercentage(total, palettes[4] + palettes[5] + palettes[6] + palettes[7])}%`;
    $("#palettes_progressbar").attr("style", pal_progressbar_width);
    $("#palettes_text_progressbar").html(
      `${palettes[4] + palettes[5] + palettes[6] + palettes[7]} / ${total} (${getTaskCompletionPercentage(total, palettes[4] + palettes[5] + palettes[6] + palettes[7])}%)`
    );

    // time per carist

    $("#unloading_time").html(
      `Le temps total nécessaire pour que <strong>8 caristes</strong> déchargent toutes les <strong>${rest_to_unloding}</strong> palettes est de <strong>${calculateTotalTime(
        rest_to_unloding,
        1.7,
        8
      )}</strong>, soit environ <strong>1,7</strong> minute par palette. `
    );

    let currentAngle = -0.5 * Math.PI;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY);

    data.forEach((item) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();

      // Calculate the percentage
      const percentage = (item.value / total) * 100;

      // Only draw the text if the percentage is greater than or equal to 3%
      if (percentage >= 4) {
        const textX = centerX + (radius / 2) * Math.cos(currentAngle + sliceAngle / 2);
        const textY = centerY + (radius / 2) * Math.sin(currentAngle + sliceAngle / 2);
        const percentageText = percentage.toFixed(2) + "%";

        // Draw the percentage text
        ctx.fillStyle = "black";
        ctx.font = "16px Arial";
        ctx.fillText(percentageText, textX - ctx.measureText(percentageText).width / 2, textY);
      }

      currentAngle += sliceAngle;
    });
  }

  // Draw the pie chart
  drawPieChart(ctx, data);

  function formatTime(hours, minutes) {
    return `${hours} heures et ${minutes} minutes`;
  }

  function calculateTotalTime(numPalettes, timePerPalette, numPersons) {
    const totalTimeMinutes = numPalettes * timePerPalette;
    const totalUnloadTime = totalTimeMinutes / numPersons;
    const hours = Math.floor(totalUnloadTime / 60);
    const remainingMinutes = Math.round(totalUnloadTime % 60);
    return formatTime(hours, remainingMinutes);
  }
}

$('[data-toggle="tooltip"]').tooltip();
