//***************************//
// XDock PRO
// Dernière mise à jour le  26/12/2023
//***************************//
$("footer>.text-muted.text-right").prepend("<small>XDock PRO Ver 3.09_20231226- </small>");

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

 `);

//--------------------------
// Statics
//--------------------------

const isSMTour = window.location.href.includes("Warenausgang") ? true : false;
const isEMTour = window.location.href.includes("Wareneingang") ? true : false;

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
  let tourID = window.location.href.split("TourId=")[1].substr(0, 6);
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
          <button class="dropdown-item" disabled >Passe la tâche "En cours"</button>
          <button class="dropdown-item" disabled >Terminer automatique</button>
          <hr>
          <div style="font-size: 12px; font-weight: bold; margin-left: 15px;" class="">Entrée de marchandises:</div>
              <button class="dropdown-item" onclick="copy_em_id()"><span class="fal fa-copy  mr-10"></span> Copier EM ID</button>
              <button class="dropdown-item" onclick="fill_empty_LS()"><span class="fal fa-file-alt docImage  mr-10"></span>  Remplir tous les "Nº LS" vides avec "X"</button>
              <hr>
              <button class="dropdown-item" onclick="check_all_sscc()"><span class="fal fa-barcode  mr-10"></span> Vérifier toutes les SSCC</button>
              <button class="dropdown-item" onclick="check_avance()"><span class="fal fa-calendar-alt  mr-10"></span> Vérifier l'avance</button>
              <hr>
              <button class="dropdown-item" onclick="palettes_summary()"><span class="fal fa-chart-bar  mr-10"></span> Résumé des palettes</button>
              <hr>
              <button class="dropdown-item" onclick="select_all_positions()"><span class="fal fa-check  mr-10"></span> Sélectionner tout les positions</button>
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
function copy_em_id() {
  let EM_ID = [];
  let tourID = window.location.href.split("TourId=")[1].substr(0, 6);
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

  $(".palettenAufklappen").trigger("click");
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

function auto_comments() {
  let kommentarIntern = $("#kommentarIntern");
  let old_value = $("#kommentarIntern").val();

  let comments = [
    "",
    "1) Recharge {CHANGEABLE}.\nFaire prochaine tâche pour le chargement.",
    "2) Recharge {CHANGEABLE}.\nChargement plus tard, envoyer au parking.",
    "3) Recharge {CHANGEABLE}.\nReste à quai, chargement plus tard, laisser porte ouverte.",
    "4) Garder {CHANGEABLE}, à compléter.",
    "5) Coupure à quai, à compléter.",
    "6) Echange Palettes",
    "7) Pas d'échange Palettes",
    "8) ATTENTION CMR A {CHANGEABLE} PALETTES",
    "9) EN COUPURE A {CHANGEABLE}",
    "10)FIN DE COUPURE {CHANGEABLE}",
  ];

  let chois = prompt(comments.slice(1).join("\n\n"));

  let data = chois.split(" ");

  switch (parseInt(data[0])) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 8:
    case 9:
    case 10:
      kommentarIntern.val(comments[data[0]].substring(3).replace("{CHANGEABLE}", data[1]) + "\n" + old_value);
      break;
    case 5:
    case 6:
    case 7:
      kommentarIntern.val(comments[data[0]].substring(3) + "\n" + old_value);
      break;
  }
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
  $('a[href="/XDockLieferscheinEditor/lieferscheinbundle/"').before(`<a href="#" id="get_ls" style="padding-right: 15px;">
<i class="fal fa-file-alt docImage" style="font-size: 22px; color: #003278; padding: 0px 3px 0px 3px;"></i> 	
LS numérique
</a>`);
  let ls_working = false;
  $("#get_ls").on("click", function (e) {
    if (ls_working) return false;
    ls_working = true;
    $(".loading").show();

    let trours = $("#we-table tbody tr");

    trours.each(function (index, tr) {
      let tr_children = $(tr).children();

      let tourURL = $(tr_children[0]).find("a").attr("href");
      let LS_list = [];
      $.get(tourURL, function (data, textStatus, jqXHR) {
        let dom = $(data);

        let ls = $(dom.find("#kopfdaten").children()[5]).children()[5];

        let bon = $(dom.find(".xdock-head-title .docImage").parent()).attr("href");

        // free up mem
        dom = null;

        let bon_url = `<a href="${bon}" target="_blank" style="cursor: pointer;">
            <i class="fal fa-file-alt docImage" style="font-size: 20px; color: #003278; padding-top: 2px;"></i>                      
            </a>`;

        $(tr_children[10]).html(ls).prepend(bon_url);
        LS_list.push(ls.innerText);
      });
    });

    setTimeout(function () {
      $(".loading").hide();
      ls_working = false;
    }, 40000);
  });
}

//--------------------------------
// Add Apps to menu
//--------------------------------

$('.navbar [href="/Artikel/Artikel"]').after(`
<hr>
<div style="font-size: 12px; font-weight: bold; margin-left: 15px;" class="">XDock PRO:</div>
<a class="dropdown-item" href="/#portes" target="_blank">Gestion des portes</a>
<a class="dropdown-item" href="/#map" target="_blank">Carte de l'entrepôt</a>
<a class="dropdown-item" href="https://tf-stb.github.io/badge/" target="_blank">Créateur de badge </a>
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
        let klstb = value.cells[6].innerText.trim().replace(" ...", "");

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
// check palettes zone de pré-livraison
//--------------------------------

function check_palettes_on_prelivraison() {
  // check first if ther is zone
  if (parseInt(document.getElementById("zoneId").value) == 0) return false;
  if (!document.body.innerHTML.includes("Vorlieferzone")) return false;
  $("#kommentarIntern").parent()
    .prepend(`<div class="alert alert-danger" role="alert"><span class="fa fa-exclamation-triangle" style="font-size: 16px; color: red"></span> Attention il reste encore quelques palettes dans la zone de pré-livraison. <a href="#" id="check_palettes_zone_preliv">voir les SSCC</a>
</div>`);

  // check btn
  $("#check_palettes_zone_preliv").click(function () {
    $("tbody tr").each(function (index, val) {
      if ($(val)[0].innerHTML.includes("Vorlieferzone")) {
        $(val).removeClass("d-none");
      }
    });
  });
}

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
  check_palettes_on_prelivraison();
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
// AI ask
//--------------------------------

$(document).ready(function () {
  $('form[action="/Warenausgang/Tag"]').submit(function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the input value
    var inputValue = $("#searchDT").val();
    let today = $("#selectedDate").val();

    // Check if the input value starts with '#'
    if (inputValue.startsWith("#")) {
      switch (inputValue.toLowerCase()) {
        case "#":
          alert(`[ #ls ] -> Affichées les camions des Livraison Samedi\n [ #zonage ] -> Afficher uniquement les premiers camions`);
          break;
        case "#ls":
          // $("#searchDT").val(getNextSaturday($("#selectedDate").val()));
          window.location.href = `/Warenausgang/Tag?sort=ZielortLokationNameASC&selecteddate=${today}&search=${getNextSaturday(today)}`;
          break;
        case "#zonage":
          removeDuplicateCells();
          setTimeout(function () {
            $(".loading").hide();
          }, 400);
          break;
      }
      // If you want to submit the form programmatically, uncomment the line below
      // $(this).unbind("submit").submit();
    } else {
      //alert("Input does not start with '#'. Please enter a valid value.");
      $(this).unbind("submit").submit();
    }

    setTimeout(function () {
      $(".loading").hide();
    }, 400);
  });
});

function getNextSaturday(dateString) {
  // Convert the input string to a Date object
  var givenDate = new Date(dateString);

  // Calculate the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  var dayOfWeek = givenDate.getDay();

  // Calculate the difference between the current day and Saturday
  var daysUntilSaturday = 6 - dayOfWeek;

  // Adjust the difference if the given date is already a Saturday
  daysUntilSaturday = daysUntilSaturday < 0 ? 7 + daysUntilSaturday : daysUntilSaturday;

  // Calculate the next Saturday date
  var nextSaturday = new Date(givenDate);
  nextSaturday.setDate(givenDate.getDate() + daysUntilSaturday);

  // Format the result as 'DDMMYY'
  var formattedNextSaturday =
    ("0" + nextSaturday.getDate()).slice(-2) + ("0" + (nextSaturday.getMonth() + 1)).slice(-2) + nextSaturday.getFullYear().toString().substr(-2);

  return formattedNextSaturday;
}

function removeDuplicateCells() {
  // Get the tbody element
  var tbody = document.querySelector("#wa-table>tbody"); // Replace with your actual tbody id

  // Create an object to store unique values
  var uniqueValues = {};

  // Iterate through each row in the tbody
  for (var i = 0; i < tbody.rows.length; i++) {
    var row = tbody.rows[i];

    // Get the content of the fifth cell (index 4)
    var cellValue = row.cells[6].textContent.trim();

    // Check if the cell value is already in the uniqueValues object
    if (uniqueValues[cellValue] || cellValue == "") {
      // Remove the duplicate row
      tbody.deleteRow(i);
      i--; // Adjust the index after removing a row
    } else {
      // Add the cell value to the uniqueValues object
      uniqueValues[cellValue] = true;
    }
  }
}
