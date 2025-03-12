//***************************//
// XDock PRO
// Dernière mise à jour le 12/03/2025
//***************************//
$("footer>.text-muted.text-right").prepend("<small>XDock PRO Ver 5.04_12/03/2024- </small>");

if (window.location.pathname == "/") {
  $("h1").html("XDock PRO");
}

//--------------------------
// CSS Styles
//--------------------------

$("<style>").appendTo("head").html(`
/* From JS */
/* Augmenter la taille du texte Remorque /véhicules */
input#kennzeichenZugmaschine,
input#kennzeichenAuflieger,input#tel {
    font-size: 21px !important;
    
}
button.btn[data-id="spediteurId"] {
  width: 354px;
}

/* Augmenter la taille du texte de la porte */
label[for="tor-name"] a {
    font-size: 21px !important;
}

/* Augmenter la taille du les Collaborateurs */
select.form-control.form-control-sm.updateMitarbeiterSelectbox{
    width: 120px;
 }
 select.form-control.form-control-sm.updateMitarbeiterSelectbox > option{
     font-size: 19px;
 
 }
 /* Augmenter la taille du tooltip */
 .tooltip-mehr {
    font-size: 20px;
}


/* delete palettes btn */
div#delete_palettes_zone {
  display: contents;
}

button#delete_palettes {
  position: absolute;
  left: 274px;
  margin-top: 8px;
}

button#copy_palettes {
  position: absolute;
  left: 554px;
  margin-top: 8px;
}

button#paste_palettes {
  margin-top: 15px;
  margin-left: 10px;
}


.addLp-ausgewaehlt {
  background-color: #ccc !important;
}

.palettenStatusSmall {
  font-size: 14px;  
}


/* Tor planer */

.torplaner-main > nav {
  display: none;
}

.schnellauswahl {
  width: 1400px;
  margin: 0 auto !important;
  padding-bottom: 30px;
}

.torplaner-main {
  width: 1400px !important;
  margin: 0 auto;
}

.schnellauswahl button {
  width: 114px;
  height: 42px;
  padding: 0 20px 0 20px;
}

.schnellauswahl button:hover{
  opacity: 0.6
}
.schnellauswahl button.abwaehlen {
  width: 220px;
}

.schnellauswahl button.dummy {
  width: 133px;
}

.mr-10{
  margin-right:10px;
}

.xdock-tourlp-paletten-table img{
  height: 75px;
}


.badge-liv{
  background-color: #d5d5d5;
}

#plettes_selected_count {
  position: absolute;
  left: 808px;
  margin-top: 12px;
  font-weight: bold;
}

.comment{
    margin-bottom: 10px;
    border-radius: 8px;
    background: #fff8b8;
    border-color: #fff8b8;
    color: rgb(32, 33, 36);
}

.comment:hover {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    background: #fff8b8;
    border-color: #fff8b8;
}

  #note-container {
  width: 680px;
  height: 700px;
  margin: 10px;
  position: relative;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #fafafa;
  color: rgb(32, 33, 36);
  position: absolute;
  left: 1034px;
  top: 229px;

  }
  #note {
  width: 100%;
  height: 100%;
  padding: 20px;
  font-size: 16px;
  outline: 0;
  overflow-y: scroll;
  }
  #note::-webkit-scrollbar {
    width: 8px; 
}

  #note::-webkit-scrollbar-track {
    background: #fff8b8;
}

  #note::-webkit-scrollbar-thumb {
    background: #d2cc96;
    border-radius: 8px; 
    cursor: default;
}

  #note::-webkit-scrollbar-thumb:hover {
    background: #918d69; 
}
  .note-toolbar {
  border-radius: 5px;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  }

  .pointer{
  cursor: pointer;
  }

  /* Style for the note container */
#note-container {
  padding: 20px;

 
}

/* Style for the textarea elements */
.note-textarea {
    width: 100%;
    height: 300px;
    padding: 10px;
    border: none;
    font-family: Arial, sans-serif;
    font-size: 14px;
    resize: vertical;
    box-sizing: border-box;
    max-width: 100% !important;
}

/* Style for the divider */
.divider {
  display: block;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
}

/* Style for the toolbar */
.note-toolbar {
  margin-top: 20px;
  text-align: right;
}

#note-notfaction {
    font-size: 16px;
    color: rgb(32, 33, 36);
    background: #fff8b8;
    padding: 15px 20px;
    border-radius: 8px;
    position: absolute;
    bottom: 35px;
    
}
a#note-notfaction:hover {
    text-decoration: none;
    background: #fbf191;
}
 `);

//--------------------------
// Statics
//--------------------------

const isSMTour = window.location.href.includes("Warenausgang/Tour") ? true : false;
const isEMTour = window.location.href.includes("Wareneingang/Tour") ? true : false;

//--------------------------------
// Task Manger
//--------------------------------
//URLs
// - /Taskmanagement/TaskSperrenErzwingen  (force block)
// - /Taskmanagement/TaskFreigeben   (deblock)
// - /Taskmanagement/TaskPausierenRequest (Pusse)
// - /Taskmanagement/TaskFortsetzen (task counten)

function task_manger() {
  let tourStatus = $(".tourStatus").html();
  let tourID = window.location.href.split("TourId=")[1].substr(0, 8);
  let iswetour = window.location.href.includes("Wareneingang") ? "True" : "False";
  let collaborateur = $("#mitarbeiterId").val();
  let working = false;

  let Block_btn_html = '<div class="p-2 m-auto "><button id="ha_block_task" class="btn btn-outline-danger">Bloquer la tâche</button></div>';
  let deblock_btn_html = '<div class="p-2 m-auto "><button id="ha_deblock_task" class="btn btn-outline-primary">Valider la tâche</button></div>';

  // inject btns
  switch (parseInt(tourStatus)) {
    case 80:
      $(".xdock-head-row > .col-4 > .d-flex.flex-row").append(Block_btn_html);
      break;
    case 75: // Entrée de marchandises à la porte
      $(".xdock-head-row > .col-4 > .d-flex.flex-row").append(Block_btn_html);
      break;
    case 44: // bloque
      $(".xdock-head-row > .col-4 > .d-flex.flex-row").append(deblock_btn_html);
      break;

    default:
      // fix bloked en cours in defrent status
      if ($("#tel").prop("readonly")) {
        // The input is readonly
        $(".xdock-head-row > .col-4 > .d-flex.flex-row").append(Block_btn_html);
      }
      break;
  }

  // block task
  $(document).on("click", "#ha_block_task", function (e) {
    if (working) return true;
    working = true;

    let ctrlKey = e.ctrlKey;

    $.post(
      "/Taskmanagement/TaskSperrenErzwingen",
      {
        tourId: parseInt(tourID),
        isWeTour: iswetour,
      },
      function (data) {
        if (data === true) {
          if (ctrlKey) return window.location.reload();
          update_collaborateur_name(tourID, iswetour, collaborateur, function () {
            window.location.reload();
          });
        } else {
          toastr.error(`Erreur "${data}", <br> Une erreur est survenue lors du blocage.<br>veuillez réessayer`);
          working = false;
        }
      }
    ).fail(function (res) {
      toastr.error(
        `Erreur ${res.status}, "${res.statusText}". <br> Une erreur est survenue lors du blocage.<br>
         Message du serveur "${res.responseText}"`
      );
      working = false;
    });
  });

  // deblock task
  $(document).on("click", "#ha_deblock_task", function () {
    if (working) return true;
    working = true;

    $.post(
      "/Taskmanagement/TaskFreigeben",
      {
        tourId: tourID,
        isWeTour: iswetour,
      },
      function (data) {
        if (data === true) {
          window.location.reload();
        } else {
          toastr.error(`Erreur "${data}", <br> Une erreur est survenue lors du déblocage.<br>veuillez réessayer`);
          working = false;
        }
      }
    ).fail(function (res) {
      toastr.error(
        `Erreur ${res.status}, "${res.statusText}". <br> Une erreur est survenue lors du déblocage.<br>
         Message du serveur "${res.responseText}".`
      );
      working = false;
    });
  });
}

// check if the page is "tour EM or SM" run the function
if (window.location.href.includes("/Warenausgang/Tour") || window.location.href.includes("/Wareneingang/Tour")) {
  task_manger();
}

// register Handler for update_collaborateur_name
function update_collaborateur_name(tourId, isWeTour, mitarbeiterLagerId, callback) {
  $.post(
    "/Taskmanagement/UpdateMitarbeiterLager",
    {
      tourId: tourId,
      isWeTour: isWeTour,
      mitarbeiterLagerId: mitarbeiterLagerId,
    },
    function (data) {
      return callback();
    }
  ).fail(function (res) {
    toastr.error(
      `Erreur ${res.status}, "${res.statusText}". <br> Une erreur est survenue lors du changement de nom.
       Message du serveur "${res.responseText}".`
    );
  });
}

//--------------------------------
// Select/Count/Delete palettes
//--------------------------------

// click on four to select
$(document).on("click", "span.d-inline-block.text-truncate.w-100.mightoverflow", function (ev) {
  if (!ev.ctrlKey) return false;

  $($($(this).parent().parent().find(".lieferpositionToDelete")[0])).trigger("click");
});

// add BTNs delete and copy palettes

$(".addlp-button[value='AddLieferposition']").after(`<div id="delete_palettes_zone"></div>`);

let num_palettes_selected = 0;

// on selections palettes for delete
$(document).on("change", ".lieferpositionToDelete", function (e) {
  if (!$(".to-be-deleted").length > 0) {
    $("#delete_palettes_zone").html("");
    $("#plettes_selected_count").html("");
    num_palettes_selected = 0;

    return false;
  }

  let num_palette_selected_current;

  if (isSMTour) {
    $("#delete_palettes_zone").html(`
  
    <button id="delete_palettes" class="btn btn-sm btn-outline-danger">
  <span class="fal fa-trash"></span>
  Supprimez les positions sélectionnées
  </button>
  
  <button id="copy_palettes" class="btn btn-sm btn-outline-primary ">
  <span class="fal fa-copy"></span>
  Copier les positions
  </button>
  
  
  `);

    num_palette_selected_current = parseInt($(e.target).parent().parent()[0].cells[14].innerText);
  } else {
    $("#delete_palettes_zone").html(`
      <button id="delete_palettes" class="btn btn-sm btn-outline-danger">
      <span class="fal fa-trash"></span>
      Supprimez les positions sélectionnées
      </button>
  `);

    num_palette_selected_current = parseInt($(e.target).parent().parent()[0].cells[13].innerText);
  }

  // Palettes Counters.
  // check if checked to count num palettes
  if ($(e.target).is(":checked")) {
    num_palettes_selected += num_palette_selected_current;
  } else {
    num_palettes_selected -= num_palette_selected_current;
  }

  // show num palettes selected
  $("#delete_palettes_zone").append("<span id='plettes_selected_count'> Nombre des palettes sélectionnées:  " + num_palettes_selected + "<span>");
});

$(document).on("click", "#delete_palettes", function (e) {
  $("#deleteSelectedLieferpositions").trigger("click");
});

$(document).on("click", "#copy_palettes", function (e) {
  copy_palettes_GTINs();
});

//--------------------------------
// copy & paste palettes GTINs/EM ID
//--------------------------------
function copy_palettes_GTINs() {
  const palettes_lpsToDelete = document.querySelectorAll(".lieferpositionToDelete:checked");
  const GTINs = [];
  for (const lp of palettes_lpsToDelete) {
    GTINs.push($(lp).parent().parent()[0].cells[3].innerText);
  }
  navigator.clipboard.writeText(JSON.stringify(GTINs));
  toastr.success(`les positions ont été copiés.`);
}

if (window.location.href.includes("Warenausgang/AddLieferpositionen?waTourId")) {
  $("#submitButton").after(
    `<div id="delete_palettes_zone">
    <button id="paste_palettes" class="btn btn-sm btn-outline-primary ">
    <span class="fal fa-paste"></span>
    Coller les positions
    </button>
    </div>`
  );

  $(document).on("click", "#paste_palettes", function (e) {
    e.preventDefault();

    navigator.clipboard.readText().then(function (clipText) {
      // gtins or EM ID
      const clipData = JSON.parse(clipText);

      const palettesAvilebal = document.querySelectorAll(".datatableRow");

      for (const palette of palettesAvilebal) {
        // check if is id in clipboard

        const paletteGTIN = $(palette)[0].cells[5].innerText;
        const paletteEM = $(palette)[0].cells[16].innerText.trim();
        console.log(paletteEM);

        if (clipData.includes(paletteGTIN) || clipData.includes(paletteEM)) {
          $(palette).find('input[name="lieferposCheckboxes"]').trigger("click");
        }
      }

      toastr.success(`les positions ont été collées.`);
    });
  });
}

//--------------------------------
// Outils supplémentaires
//--------------------------------

if (isEMTour) {
  let status = $(".tourStatus").html();
  // create Btn

  //let task_disabled = parseInt(status) == 75 ? "" : "disabled";

  $($("#kopfdaten").children()[3]).append(
    `
    <div class="pt-3 dropdown">
      <a  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <i class="fal fa-chevron-right" aria-hidden="true"></i>
          Outils supplémentaires
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <div style="font-size: 12px; font-weight: bold; margin-left: 15px;" class="">Tâches:</div>
          <button class="dropdown-item" onclick="passe_encours()" >Passe la tâche "En cours"</button>
          <hr>
          <div style="font-size: 12px; font-weight: bold; margin-left: 15px;" class="">Entrée de marchandises:</div>
              <button class="dropdown-item" onclick="copy_em_id()"><span class="fal fa-copy  mr-10"></span> Copier EM ID</button>
              <button class="dropdown-item" onclick="fill_empty_LS()"><span class="fal fa-file-alt docImage  mr-10"></span>  Remplir tous les "Nº LS" vides avec "X"</button>
              <hr>
              <button class="dropdown-item" onclick="check_all_sscc()"><span class="fal fa-barcode  mr-10"></span> Vérifier toutes les SSCC</button>
              <button class="dropdown-item" onclick="check_avance()"><span class="fal fa-calendar-alt  mr-10"></span> Vérifier l'avance</button>
              <hr>
              <button class="dropdown-item" onclick="palettes_summary()"><span class="fal fa-chart-bar  mr-10"></span> Résumé des palettes</button>
              <button class="dropdown-item" onclick="select_all_positions()"><span class="fal fa-check  mr-10"></span> Sélectionner tout les positions</button>
              <hr>
               <div style="font-size: 12px; font-weight: bold; margin-left: 15px;" class="">Sortie de marchandises:</div>
              <button class="dropdown-item" onclick="Afficher_SM_attribue()"><span class="fal fa-link mr-10"></span>  Afficher SM attribué à ce camion</button> 
              <button class="dropdown-item" id="removeSM"><span class="fal fa-trash  mr-10"></span>  Supprimer SM des positions sélectionnées</button> 
              <hr>
              <div style="font-size: 12px; font-weight: bold; margin-left: 15px;" class="">Autres:</div>
              <button class="dropdown-item" onclick="auto_comments()"><span class="fal fa-comments mr-10"></span> Commentaires</button>
      </div>
  </div
`
  );
}

// fucations Entrée de marchandises

function passe_encours(){
  $("#startausgabeEntladeanweisung").trigger("click")
  $("#saveBtn").trigger("click")
}
function copy_em_id() {
  let EM_ID = [];
  let tourID = window.location.href.split("TourId=")[1].substr(0, 8);
  EM_ID.push(tourID);
  navigator.clipboard.writeText(JSON.stringify(EM_ID));
  toastr.success(`EM ID ont été copiés.`);
}

//--------------------------------
// Vérifier tous les SSCC
//--------------------------------

function check_all_sscc() {
  let AllPals = $(".xdock-tourlp-paletten-table tbody>tr");
  let SSCC_not_found = 0;
  let SSCC_found = 0;
  // check All SSCC
  AllPals.each(function (key, value) {
    // Non SSCC trouve

    let pal = $(value.cells[11]);
    if (pal.find("a").length == 0) {
      pal.html("<span style='font-size: 21px;color: red;font-weight: 600;'>SSCC NON TROUVÉ</span>");
      SSCC_not_found += 1;
    } else {
      SSCC_found += 1;
    }
  });

  // Show notfication

  if (SSCC_not_found > 0) {
    toastr.error(`${SSCC_not_found} SSCC Non trouvés.`);
  } else {
    toastr.success(`${SSCC_found}/${AllPals.length} SSCC trouvés.`);
  }

  $(".palettenTableSelectorClass").removeClass("d-none");
}

//--------------------------------
// Select all positions
//--------------------------------
function select_all_positions() {
  $(".lieferpositionToDelete").trigger("click");
  é;
}

function fill_empty_LS() {
  $(".lieferschein-nummer")
    .not("[readonly]")
    .each(function (indexInArray, valueOfElement) {
      let el = $(valueOfElement);
      if (el.val().length > 0) return true;
      el.val("X");
    });
}

//--------------------------------
// auto comments
//--------------------------------

async function auto_comments() {

  let CHANGEABLE = "Lidl";

  await navigator.clipboard.readText().then((clipText) => {
    if (clipText.length === 3) {
        CHANGEABLE = clipText;
    }
});
  let html = `<div class="list-group w-100">
  <a href="#" onclick="insert_comment(this)" class="list-group-item list-group-item-action comment" data-dismiss="modal">Recharge ${CHANGEABLE}.\nFaire prochaine tâche pour le chargement. </a>
  <a href="#" onclick="insert_comment(this)" class="list-group-item list-group-item-action comment" data-dismiss="modal">Recharge ${CHANGEABLE}.\nChargement plus tard, envoyer au parking.</a>
  <a href="#" onclick="insert_comment(this)" class="list-group-item list-group-item-action comment" data-dismiss="modal"> Recharge ${CHANGEABLE}.\nReste à quai, chargement plus tard, laisser porte ouverte."</a>
  <a href="#" onclick="insert_comment(this)" class="list-group-item list-group-item-action comment" data-dismiss="modal">Garder ${CHANGEABLE}, à compléter.</a>
  <a href="#" onclick="insert_comment(this)" class="list-group-item list-group-item-action comment" data-dismiss="modal">On ne sait pas où il charge, envoyez-le au parking.</a>
  <a href="#" onclick="insert_comment(this)" class="list-group-item list-group-item-action comment" data-dismiss="modal">Echange Palettes</a>
  <a href="#" onclick="insert_comment(this)" class="list-group-item list-group-item-action comment" data-dismiss="modal" >Pas d'échange Palettes</a>
  <a href="#" onclick="insert_comment(this)" class="list-group-item list-group-item-action comment" data-dismiss="modal">Ne pas indiquer les palettes cassées.</a>
</div>`;

  // setup the model
  let barcode_modal = $("#barcode_modal");
  barcode_modal.find(".modal-dialog").addClass("modal-dialog-scrollable");
  barcode_modal.find(".modal-title").html("Commentaires");
  barcode_modal.find(".modal-body").html(html);

  let barcodeModal = new bootstrap.Modal(document.getElementById("barcode_modal"), {});
  barcodeModal.show(); // you can try comment this code, because bootstrap maybe open modal

}

function insert_comment(comment){
  let kommentarIntern = $("#kommentarIntern");
  let old_value = $("#kommentarIntern").val();
  kommentarIntern.val(comment.innerText + "\n \n" + old_value);
}

//--------------------------------
// Afficher SM attribué à ce camion
//--------------------------------

function Afficher_SM_attribue(){

 let Remorque=$("#kennzeichenZugmaschine").val().replace(/[\s-]/g, '').toUpperCase();
 let Tracteur=$("#kennzeichenAuflieger").val().replace(/[\s-]/g, '').toUpperCase();
      
let SM_found =0;
      
  $.get("/Warenausgang/Tag?sort=ZielortLokationNameASC&selectedDate=" + $("#selectedDate").val(), function (data, textStatus, jqXHR) {
    $(data)
      .find("#table-container tbody>tr")
      .each(function (key, value) {
        let info = value.cells[19].innerHTML;

        if(info.includes(Remorque) || info.includes(Tracteur)){
          window.open("/Warenausgang/Tour?waTourId=" + value.cells[0].innerText.trim(), "_blank");
          SM_found+=1;

        }
      });

      if(SM_found == 0){
        // notfication 
        toastr.error(
          `Aucun SM trouvé attribué à ce camion`
        )
      }

  });

}


//--------------------------------
// Map Add-on
//--------------------------------

// open map
$(".xdockLogo").on("click", function (e) {
  e.preventDefault();
  window.open("/#map");
});

//--------------------------------
// Scan SSCC to update
//--------------------------------

function update_sscc() {
  $(window).keydown(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
  // uncress filds size
  $("<style>").appendTo("head").html(`
  .form-control-xdock-small {
    height: 38px;
    font-size: 15px;
}
`);

  let palettes_num = $("tbody>tr").length;

  for (let i = 0; i < palettes_num; i++) {
    $("#Paletten_" + i + "__Sscc").on("keydown", function (e) {
      if (e.which == 13) {
        $(e.target).val($(e.target).val().substring(2));
      }
    });
  }
}

if (window.location.href.includes("TourLpPaletten")) {
  update_sscc();
}

//--------------------------------
// LS numérique
//--------------------------------

if (window.location.href.includes("Wareneingang/Tag")) {
  get_LS();
}
function get_LS() {
$(".col-4.h-100.xdock-head-title").eq(1).prepend(`<a href="#" id="get_ls" style="padding-right: 15px;">
<i class="fal fa-file-alt docImage" style="font-size: 22px; color: #003278; padding: 0px 3px 0px 3px;"></i> 	
LS numérique
</a>`)

  let ls_working = false;
  $("#get_ls").on("click", function (e) {
    if (ls_working) return false;
    ls_working = true;

    let trours = $("#we-table tbody tr");

    trours.each(function (index, tr) {
      let tr_children = $(tr).children();

      let tourURL = $(tr_children[0]).find("a")[0].innerText;
      let LS_list = [];
      $.get("/Wareneingang/Tour?sort=LieferantStrASC&weTourId=" + tourURL, function (data, textStatus, jqXHR) {
        var labelContent = data.substring(data.indexOf("rique:"));

        var labelText = labelContent.substring(6, labelContent.indexOf("</label>"));

        let bon_urlContent = data.substring(data.indexOf("/XDockLieferscheinEditor/?lieferscheinmappe="));
        let bon = bon_urlContent.substring(0, bon_urlContent.indexOf('"'));
        let ls = " LS numérique:" + labelText;

        let bon_url = `<a href="${bon}" target="_blank" style="cursor: pointer;">
        <i class="fal fa-file-alt docImage" style="font-size: 20px; color: #003278; padding-top: 2px;"></i>                      
        </a>`;

        $(tr_children[10]).html(ls).prepend(bon_url);
        LS_list.push(ls.innerText);
      });
    });
  });
}

//--------------------------------
// Add Apps to menu
//--------------------------------

$('.navbar [href="/Artikel/Artikel"]').after(`
<hr>
<div style="font-size: 12px; font-weight: bold; margin-left: 15px;" class="">XDock PRO:</div>
<a class="dropdown-item" href="/#cockpit" target="_blank">SMART Cockpit</a>
<a class="dropdown-item" href="/#portes" target="_blank">Gestion des portes</a>
<a class="dropdown-item" href="/#map" target="_blank">Carte de l'entrepôt</a>
<a class="dropdown-item" href="https://tf-stb.github.io/outils/" target="_blank">Liste des Outils </a>

`);

//--------------------------------
// Vérifier l'avance
//--------------------------------

function check_avance() {
  let camions_de_jours = [];
  let palettes_avance = 0;
  let palette_not_anavce = 0;

  $.get("/Warenausgang/Tag?sort=StatusASC&selectedDate=" + $("#selectedDate").val(), function (data, textStatus, jqXHR) {
    $(data)
      .find("#table-container tbody>tr")
      .each(function (key, value) {
        let klstb = value.cells[8].innerText.trim().replace(" ...", "");

        camions_de_jours.push(klstb);
      });

    // check now

    $("#table-WeTourLieferpositionen tbody>tr[data-welpid]").each(function (key, value) {
      let ref = value.cells[5].innerText;
      if (camions_de_jours.includes(ref)) {
        $(value.cells[19]).html("Aujourd'hui");
        palette_not_anavce += parseInt(value.cells[12].innerText.trim());
      } else {
        $(value.cells[19]).html(`<span style="font-weight: bold; color: red;">Avance</span>`);
        palettes_avance += parseInt(value.cells[12].innerText.trim());
      }
    });

    // show notifaction
    if (palettes_avance == 0) {
      toastr.success(`il n'y a pas marchandises en avance.`);
    } else if (palettes_avance > palette_not_anavce) {
      toastr.error(`${palettes_avance} sur ${palette_not_anavce + palettes_avance} palettes en avance.`);
    } else {
      toastr.warning(`${palettes_avance} sur ${palette_not_anavce + palettes_avance} palettes en avance.`);
    }
  });
}

//--------------------------------
// Remove Tournée SM From palettes
//--------------------------------

// remove SM from palete on EM

$(document).on("click", "#removeSM", function (e) {
  let selected_palettes = $(".to-be-deleted");
  let removed = 0;

  // show notfication errer if no pal selected
  if (!selected_palettes.length > 0) return toastr.error(`Aucune positions sélectionnée.`);
  if (!e.ctrlKey) return toastr.info(`Veuillez rester appuyé sur CTRL pour confirmer la suppression.`);

  // Show loding...
  $("body").append(`
  <div id="removeSM_modal" class="modal" tabindex="-1" role="dialog" style="background: rgb(0 0 0 / 45%);">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Suppression Tournée SM des positions sélectionnées</h4>
      </div>
      <div class="modal-body d-flex justify-content-center">
        <div class="d-flex justify-content-center">
          <span id="loaderTube" class="">
            <div
              class="loader"
              style="padding-left: 0px; width: 50px; height: 50px"
            ></div>
            <span>
              <em>Veuillez patienter...</em> <br />
              <div  style="font-weight: bold;text-align: center;margin: 15px;" id="removed_counter"></div>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
  `);

  $("#removeSM_modal").show();
  $("body").addClass("modal-open");
  selected_palettes.each(function (key, value) {
    let palette = value;
    // check if there is SM
    if (!palette.cells[20].innerText.length > 0) {
      toastr.warning(`Aucun SM trouvé pour certaines positions.`);
      removed += 1;

      // update counter
      $("#removed_counter").html(`${removed}/${selected_palettes.length} positions`);

      // reload if all done
      if (removed == selected_palettes.length) return location.reload(true);

      return true;
    }

    let palette_ID_URL = $(palette.cells[4]).find("a").attr("href");
    let SM_URL = $(palette.cells[20]).find("a").attr("href");
    let waTourId = SM_URL.split("?waTourId=")[1];

    // get Palete ID on SM to delete
    $.get(SM_URL, function (data) {
      let palette_ID_on_SM = $(data).find(`[href="${palette_ID_URL}"]`).parent().parent().find(".lieferpositionToDelete").val();

      const ids = [];
      ids.push(palette_ID_on_SM);

      // Send requst to delete the palette
      $.post("/Warenausgang/RemoveLieferpositionsFromWaTour?waTourId=" + waTourId, { lieferpositionToDelete: ids }, function (data) {
        if (data === true) {
          removed += 1;
          // update counter
          $("#removed_counter").html(`${removed}/${selected_palettes.length} positions`);

          // reload if all done
          if (removed == selected_palettes.length) return location.reload(true);
        } else {
          toastr.error(`Erreur lors de la suppression des palettes. essayer à nouveau.`);
        }
      });
    }).fail(function (res) {
      toastr.error(
        `Erreur ${res.status}, "${res.statusText}". <br> Erreur lors de la suppression des palettes. essayer à nouveau.
         Message du serveur "${res.responseText}".`
      );
    });
  });
});


//--------------------------------
// check if livraison Samedi or lundi
//--------------------------------

function check_livraison_day() {
  const dep = new Date($("#auslieferungstermin").val());
  const livraison = new Date($("#anlieferdatum").val());

  // Define a map for day labels.
  const dayLabels = {
    1: "Départ Lundi",
    2: "Départ Mardi",
    3: "Départ Mercredi",
    4: "Départ Jeudi",
  };

  // Helper function to add a badge to the DOM.
  function addBadge(label, icon) {
    $("#zeitfensternummer").after(`<div class="badge badge-pill mt-3 badge-liv"><i class="${icon}"></i> ${label}</div>`);
  }

  // Check the day of the week for "dep" date.
  if (dep.getDay() in dayLabels) {
    addBadge(dayLabels[dep.getDay()], "fas fa-truck");
  }

  // Check the day of the week for "livraison" date.
  if (dep.getDay() === 5) {
    if (livraison.getDay() === 6) {
      // Samedi
      addBadge("Livraison Samedi", "fas fa-shipping-fast");
    } else if (livraison.getDay() === 1) {
      // Lundi
      addBadge("Livraison Lundi", "fas fa-truck");
    }
  }
}

if (window.location.href.includes("waTourId=")) {
 
  check_livraison_day();
}
//--------------------------------
// check palettes summary
//--------------------------------

function palettes_summary() {
  let data = [];
  $("#table-WeTourLieferpositionen tbody>tr[data-welpid]").each(function (key, value) {
    let ref = value.cells[5].innerText;
    let palettes_unm = parseInt(value.cells[12].innerText);
    let zone = value.cells[18].innerText;
    let sm = value.cells[20].innerHTML;
    data.push({ ref: ref, palettes: palettes_unm, zone: zone, sm: sm });
  });

  // Create an object to store the summary
  const summary = {};

  // Iterate through the data and calculate the summary
  data.forEach((item) => {
    if (!summary[item.ref]) {
      summary[item.ref] = { palettes: 0, zone: item.zone, sm: item.sm };
    }
    summary[item.ref].palettes += item.palettes;
  });

  // Convert the summary object into an array of key-value pairs
  const summaryArray = Object.entries(summary);

  // Sort the array based on palettes (descending order)
  summaryArray.sort((a, b) => b[1].palettes - a[1].palettes);

  // Convert the sorted array back into an object if needed
  const sortedSummary = Object.fromEntries(summaryArray);

  let html = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Référence</th>
      <th scope="col">PAL</th>
      <th scope="col">Zone</th>
      <th scope="col">Tournée SM</th>
    </tr>
  </thead>
  <tbody>{tbody}</tbody>
</table>`;

  let tbody = "";
  let i = 1;
  $.map(sortedSummary, function (Value, index) {
    tbody += `<tr>
     <th scope="row">${i}</th>
     <td>${index}</td>
     <td>${Value.palettes}</td>
     <td>${Value.zone}</td>
     <td>${Value.sm}</td>
   </tr>`;

    i++;
  });

  let newHTML = html.replace("{tbody}", tbody);

  // setup the model
  let barcode_modal = $("#barcode_modal");
  barcode_modal.find(".modal-dialog").addClass("modal-dialog-scrollable");
  barcode_modal.find(".modal-title").html("Résumé des palettes");
  barcode_modal.find(".modal-body").html(newHTML);

  let barcodeModal = new bootstrap.Modal(document.getElementById("barcode_modal"), {});
  barcodeModal.show(); // you can try comment this code, because bootstrap maybe open modal
}

//--------------------------------
// Sélectionners positions "En cours"
//--------------------------------

function Selectionners_positions_encours() {
  $.get("/Taskmanagement/TaskmanagementInArbeit?sort=StartzeitASC", function (data) {
    $.each($("#table-WaTourLieferpositionen tr[data-walpid]"), function (indexInArray, valueOfElement) {
      if(data.includes(valueOfElement.cells[17].innerText.trim())){
        $(valueOfElement.cells[18]).find(".lieferpositionToDelete").trigger("click");
      }
    });
  });
}

//--------------------------------
// Outils supplémentaires SM
//--------------------------------

if (isSMTour) {
  $($("#kopfdaten").children()[3]).append(
    `
    <div class="pt-3 dropdown">
      <a  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <i class="fal fa-chevron-right" aria-hidden="true"></i>
          Outils supplémentaires
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <div style="font-size: 12px; font-weight: bold; margin-left: 15px;" class="">Entrée de marchandises:</div>
            <button class="dropdown-item" onclick="Selectionners_positions_encours()"><span class="fal fa-forklift  mr-10"></span> Sélectionner tout les positions "En cours"</button>
            <hr>
            <div style="font-size: 12px; font-weight: bold; margin-left: 15px;" class="">Sortie de marchandises:</div>    
            <button class="dropdown-item" onclick="changer_transporteur()"><span class="fal fa-exchange	  mr-10"></span> Changer les données du transporteur</button>
            <button class="dropdown-item" onclick="indiquer_palettes()"><span class="fal fa-edit	  mr-10"></span>  Indiquer les palettes</button>


      </div>
  </div
`
  );
}


//--------------------------------
//indiquer_palettes
//--------------------------------
function indiquer_palettes(){
  let kommentar_textarea = $("#kommentar_textarea");
  let old_value = $("#kommentar_textarea").val();
  kommentar_textarea.val(`Palettes chargée: ${$('#palettenGeladen1').val()} EURO + ${$('#palettenGeladen').val()} vides` + "\n \n" + old_value);

}

//--------------------------------
// Changer les données du transporteur
//--------------------------------
function changer_transporteur(){

  let la_destination_princpal = $("#zielort").val()
  let tout_les_camions = [];

  $.get("/Warenausgang/Tag?sort=ZielortLokationNameASC&selectedDate=" + $("#selectedDate").val()+"&search="+la_destination_princpal, function (data, textStatus, jqXHR) {
    $(data)
      .find("#table-container tbody>tr")
      .each(function (key, value) {
        let destination = value.cells[6];

        if(destination.innerText.trim() == la_destination_princpal){
        tout_les_camions.push({ sm: value.cells[0].innerHTML,status:value.cells[1].innerHTML, transitaire: value.cells[9].innerText.trim() });

        }
      });

    // check now
    let html = `<table class="table">
    <thead>
      <tr>
        <th scope="col">Séle...</th>
        <th scope="col">Statut</th>
        <th scope="col">Tournée SM</th>
        <th scope="col">Transitaire</th>        
      </tr>
    </thead>
    <tbody>{tbody}</tbody>
  </table>`;
  
    let tbody = "";

    $.map(tout_les_camions, function (Value, index) {
      tbody += `<tr>
       <th scope="row"><button onclick="save_changes_transporteur(${$(Value.sm)[2].innerText.trim()})" class="btn btn-outline-primary" data-dismiss="modal"><span class="fas fa-exchange"></span></button></th>
          <td> ${Value.status}</td>
       <td> ${Value.sm}</td>
       <td>${Value.transitaire}</td>
     </tr>`;
  
     
    });
  
    let newHTML = html.replace("{tbody}", tbody);
  
    // setup the model
    let barcode_modal = $("#barcode_modal");
    barcode_modal.find(".modal-dialog").addClass("modal-dialog-scrollable");
    barcode_modal.find(".modal-title").html("Choisissez une tournée avec lequel changer");
    barcode_modal.find(".modal-body").html(newHTML);
  
    let barcodeModal = new bootstrap.Modal(document.getElementById("barcode_modal"), {});
    barcodeModal.show(); // you can try comment this code, because bootstrap maybe open modal

  });
}


function save_changes_transporteur(smID) {
  // Send request to get new data
  $.get("/Warenausgang/Tour?sort=StatusASC&waTourId=" + smID, function (data_dom, textStatus, jqXHR) {
      let data = $(data_dom);

      // Extract new values
      let new_transporteur = data.find("select#spediteurId").val();
      let new_Sous_traitant = data.find("#subunternehmer").val();
      let new_tracteur = data.find("#kennzeichenZugmaschine").val();
      let new_remorque = data.find("#kennzeichenAuflieger").val();
      let new_tel = data.find("#tel").val();
      let new_numero_de_reappro = data.find("#disponummer").val();
      let new_numero_de_periode = data.find("#zeitfensternummer").val();


      // Prepare data to be sent
      let transportData = {
          transporteur: $("select#spediteurId").val(),
          sous_traitant: $("#subunternehmer").val(),
          tracteur: $("#kennzeichenZugmaschine").val(),
          remorque: $("#kennzeichenAuflieger").val(),
          tel: $("#tel").val(),
          numero_de_reappro: $("#disponummer").val(),
          numero_de_periode: $("#zeitfensternummer").val()
      };

      // Save data to localStorage
      localStorage.setItem('transportData', JSON.stringify(transportData));

      // Open new window
      window.open("/Warenausgang/Tour?sort=StatusASC&waTourId=" + smID + "&changer_transporteur", "newWindow", "width=800,height=600");

      // Update current camion
      $("select#spediteurId").val(new_transporteur);
      $("#subunternehmer").val(new_Sous_traitant);
      $("#kennzeichenZugmaschine").val(new_tracteur);
      $("#kennzeichenAuflieger").val(new_remorque);
      $("#tel").val(new_tel);
      $("#disponummer").val(new_numero_de_reappro);
      $("#zeitfensternummer").val(new_numero_de_periode)
     
  });
}

if (window.location.href.includes("changer_transporteur")) {

  if (localStorage.getItem('transportData') !== null) {
    let transportData = JSON.parse(localStorage.getItem("transportData"))
    $("select#spediteurId").val(transportData.transporteur);
    $("#subunternehmer").val(transportData.sous_traitant);
    $("#kennzeichenZugmaschine").val(transportData.tracteur);
    $("#kennzeichenAuflieger").val(transportData.remorque);
    $("#tel").val(transportData.tel);
    $("#disponummer").val(transportData.numero_de_reappro);
    $("#zeitfensternummer").val(transportData.numero_de_periode)

} else {
    toastr.error(`transportData does not exist in localStorage.`);
}

}



//--------------------------------
// SmrteNote
//--------------------------------
let savedToken = "";

if (window.location.href.includes("Herkunftsorte")) {
  $.get("/Spediteure/EditSpediteur/46770", function (data_dom, textStatus, jqXHR) {
    let data_textarea = $(data_dom).find("#SpediteurKommentar").val();
    let note = JSON.parse(data_textarea);
    savedToken = $(data_dom).find('input[name="__RequestVerificationToken"]').val();

    $(".container-fluid.px-4").append(`
      <div id="note-container">
        <h1 class="p-3">Transporteur:</h1>
        <textarea id="note-transport" class="note-textarea" style="background-color: #fff8b8;">${note.transport || ''}</textarea>
        <span class="divider"></span>
        <h1 class="p-3">Logistique:</h1>
        <textarea id="note-logistique" class="note-textarea" style="background-color: #e2f6d3;">${note.logistique || ''}</textarea>
        <div class="note-toolbar">
          <small>Dernière modification : ${note.last_edit} par ${note.editby}</small>
          <div>
            <span class="fas fa-trash mr-10 pointer" onclick="delete_note()"></span>
            <button class="btn btn-primary  btn-sm" onclick="save_Note()">Enregistrer les notes</button>
          </div>
        </div>
      </div>`);

    $('.note-toolbar div span').on('mousedown', function (e) {
      e.preventDefault();
    });
  });
}

function save_Note() {
  const transportNote = document.getElementById('note-transport').value;
  const logistiqueNote = document.getElementById('note-logistique').value;
  const editby = $(".fa-sign-out").attr("data-original-title").replace("Logout", "").replace("@xdock.de", "");

  let JSON_data = JSON.stringify({
    transport: transportNote,
    logistique: logistiqueNote,
    last_edit: last_edit,
    editby: editby
  });

  const data = {
    SpediteurId: 46770,
    SpediteurName: 'note',
    SpediteurStrasseUndHausnummer: "",
    SpediteurPlz: "",
    SpediteurOrt: "",
    SpediteurTelefon: "",
    SpediteurUstId: "",
    SpediteurLizenznummer: "",
    LandId: "",
    IsInactive: true,
    SpediteurKommentar: JSON_data,
    __RequestVerificationToken: savedToken
  };

  $.ajax({
    url: '/Spediteure/EditSpediteur/46770',
    type: 'POST',
    data: data,
    success: function (response) {
      toastr.success(`Données envoyées avec succès!`);
    },
    error: function (xhr, status, error) {
      console.error('Error:', xhr.responseText);
      toastr.error(`Une erreur s'est produite lors de l'envoi des données.`);
    }
  });
}

function delete_note() {
  document.getElementById('note-transport').value = "";
  document.getElementById('note-logistique').value = "";
}

// Function to format the date
function formatDate_pro(date) {
  const jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
  const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

  const jourSemaine = jours[date.getDay()];
  const jour = date.getDate();
  const moisNom = mois[date.getMonth()];
  const annee = date.getFullYear();
  const heures = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${jourSemaine} ${jour} ${moisNom} ${annee} à ${heures}h${minutes}`;
}

const date_note = new Date();
const last_edit = formatDate_pro(date_note);

// show note notfaction
if(window.location.href === "https://tf-stb.xdock.de/"){
  $.get("/Spediteure/EditSpediteur/46770", function (data_dom, textStatus, jqXHR) {
    let data_textarea = $(data_dom).find("#SpediteurKommentar").val();
    let note = JSON.parse(data_textarea);
  
   if (note.transport.trim().length > 0 || note.logistique.trim().length > 0) {
    $(".container-fluid.px-4").append(
      `<a id="note-notfaction" href="/Wareneingang/Herkunftsorte">
        <i class="far fa-comments" aria-hidden="true"></i> Nouvelles informations disponibles 
      
      </a>`
    );
  }
   
  });
}
