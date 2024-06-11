//***************************//
// SMART Cockpit
// V 1.01
//***************************//

$("<style>").appendTo("head").html(`
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

i[name="linkedTour"] {
    position: absolute;
    top: 7px;
}
`);

let page_body = `

<div class="container">
  <!-- Welcome -->
  <p class="fs-5 font-weight-bold mb-0">SMART Cockpit</p>
  <p class="mb-1" style="font-size: 31px">Bonjour, <span id="username">...</span></p>
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

    </div>


    

    <div class="col-4">
      <div class="section_header">Administrateurs & Collaborateur</div>
      <div id="users"></div>
    </div>

  </div>
</div>



`;

$("head>title").html("SMART Cockpit :: XDock PRO");
// inject page body to dom
$("#img-zonenuebersicht").parent().replaceWith(page_body);

$("h1").parent().replaceWith(`<div class="row d-flex align-items-center h-100 xdock-head-row">
<div class="col-6 h-100 xdock-head-title">
    <h1>
       XDock PRO <span class="fa fa-caret-right navArrow"></span> SMART Cockpit
    </h1>
</div>
</div>`);

function formatDate(date) {
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
document.getElementById("date_tody").textContent = formatDate(date);

let selected_date = $("#selectedDate").val();
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
            termine += 1;
            break;
        }

        total += 1;

        // count coll  camions
        let last_count = parseInt($(`#camions_coll_${coll_ID}`).html());
        $(`#camions_coll_${coll_ID}`).html(last_count + 1);

        if (last_count > 0) {
          $(`#coll_${coll_ID}`).html(`<span class="badge bg-secondary  text-light">${$(`#camions_coll_${coll_ID}`).html()} camions</span>`);
        }
      });

    $("#em_total").html(total);
    $("#em_ouverte").html(ouverte);
    $("#em_pret").html(pret);
    $("#em_entrepot").html(entrepot);
    $("#em_encours").html(encours);
    $("#em_termine").html(termine);

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
    $(data)
      .find("#wa-table tbody>tr")
      .each(function (indexInArray, valueOfElement) {
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

        if (last_count > 0) {
          $(`#coll_${coll_ID}`).html(`<span class="badge bg-secondary  text-light">${$(`#camions_coll_${coll_ID}`).html()} camions</span>`);
        }
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
    colorClass = "text-success"; // green
  } else if (diffInMinutes <= 120) {
    colorClass = "text-warning"; // orange
  } else {
    colorClass = "text-danger"; // red
  }

  // Format the output string
  const output = `<strong class="mb-1 ${colorClass}"><i class="far fa-clock" aria-hidden="true"></i> ${diffInHours}h ${remainingMinutes} min d'attente</strong>`;

  return output;
}

function getTaskCompletionPercentage(totalTasks, finishedTasks) {
  return ((finishedTasks / totalTasks) * 100).toFixed(2);
}
