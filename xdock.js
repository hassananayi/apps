//***************************//
// XDock PRO
//***************************//
$("footer>.text-muted.text-right").prepend(
  "<small>XDock PRO V 2.02 Dernière mise à jour le 10 juillet 2023 - </small>"
);

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
input#kennzeichenAuflieger {
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


 `);

//--------------------------
// Statics
//--------------------------

const isSMTour = window.location.href.includes("Warenausgang") ? true : false;
const isEMTour = window.location.href.includes("Wareneingang") ? true : false;

//--------------------------
// collaborateurs
//--------------------------

function collaborateurs() {
  let team_1 = [
    "", // -
    "900", // Abdel
    "945", //Chris
    "928", //Gregory
    "941", //Hassan
    "951", //Kevin
    "953", //Leandro
    "957", //Marc
    "942", //Patrice
    "936", //Saleh
    "929", //Hamadi
    "976", //Sebastien
    "979", //Stephan M.
    "934", //Suzie,
    "974", // Ryan
  ];
  let team_2 = [
    "", // -
    "917", // Christophe
    "923", //Eric
    "926", //Georges
    "929", //Hamadi
    "932", //Houcine
    "952", //Kenan
    "944", //Lucas
    "983", //Vincent
    "913", //Yamin,
    "937", //julien
    "919", //Daniel
    "1463", //BJSCH
    "912", //bodi
    "902", //MohamedBe
    "974", // Ryan
  ];

  let team_3 = [
    "", // -
    "902", // Alban
    "919", //Daniel
    "921", //David T.
    "932", //Houcine
    "1213", //Mike
    "971", //Romain
    "913", //Yamin
    "986", //Younes
  ];

  // check current_team
  switch (parseInt(localStorage.getItem("current_team"))) {
    case 0:
      add_select_team(0);
      break;
    case 1:
      add_select_team(1);
      inject_code(team_1);
      break;

    case 2:
      add_select_team(2);
      inject_code(team_2);
      break;

    case 3:
      add_select_team(3);
      inject_code(team_3);
      break;
    default:
      add_select_team(0);
      localStorage.setItem("current_team", 0);
      break;
  }

  function inject_code(team_list) {
    $("select.updateMitarbeiterSelectbox > option").each(function () {
      if ($(this).is(":selected")) return true;

      if ($.inArray($(this).val(), team_list) === -1) {
        $(this).remove();
      }
    });
  }

  // add to dom select names
  function add_select_team(current_team) {
    $("body").append(`<div class="d-flex">
  <span class='ml-3'>Modifier la liste des collaborateurs</span>
  <select id="edit_names_list"  class="form-control form-control-sm ml-3" data-style="xdock-selectbox xdock-selectboxWidth120">
      <option ${
        current_team === 0 ? "selected" : ""
      }  value="0">Tous les prénoms</option>
      <option ${
        current_team === 1 ? "selected" : ""
      }  value="1">Équipe du matin</option>
      <option ${
        current_team === 2 ? "selected" : ""
      }  value="2">L'équipe de l'après-midi</option>
      <option ${
        current_team === 3 ? "selected" : ""
      }  value="3">L'équipe de nuit</option>
  </select></div>`);

    // lisent to change
    $(document).on("change", "#edit_names_list", function (el) {
      // set to storge
      localStorage.setItem("current_team", $(this).val());
      // reload the page
      window.location.reload();
    });
  }
} // end function coll

// check if the page is "dans lnte" run the function
if (window.location.href.includes("/Taskmanagement/TaskmanagementAmLager")) {
  collaborateurs();
}

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
  let iswetour = window.location.href.includes("Wareneingang")
    ? "True"
    : "False";
  let collaborateur = $("#mitarbeiterId").val();
  let working = false;

  let Block_btn_html =
    '<div class="p-2 m-auto "><button id="ha_block_task" class="btn btn-outline-danger">Bloquer la tâche</button></div>';
  let deblock_btn_html =
    '<div class="p-2 m-auto "><button id="ha_deblock_task" class="btn btn-outline-primary">Valider la tâche</button></div>';

  // inject btns
  switch (parseInt(tourStatus)) {
    case 80: // en cours
      $(".xdock-head-row > .col-4 > .d-flex.flex-row").append(Block_btn_html);
      break;
    case 75: // Entrée de marchandises à la porte
      $(".xdock-head-row > .col-4 > .d-flex.flex-row").append(Block_btn_html);
      break;
    case 44: // bloque
      $(".xdock-head-row > .col-4 > .d-flex.flex-row").append(deblock_btn_html);
      break;

    default:
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
          update_collaborateur_name(
            tourID,
            iswetour,
            collaborateur,
            function () {
              window.location.reload();
            }
          );
        } else {
          toastr.error(
            `Erreur "${data}", <br> Une erreur est survenue lors du blocage.<br>veuillez réessayer`
          );
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
          toastr.error(
            `Erreur "${data}", <br> Une erreur est survenue lors du déblocage.<br>veuillez réessayer`
          );
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
if (
  window.location.href.includes("/Warenausgang/Tour") ||
  window.location.href.includes("/Wareneingang/Tour")
) {
  task_manger();
}

// register Handler for update_collaborateur_name
function update_collaborateur_name(
  tourId,
  isWeTour,
  mitarbeiterLagerId,
  callback
) {
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
$(document).on(
  "click",
  "span.d-inline-block.text-truncate.w-100.mightoverflow",
  function (ev) {
    if (!ev.ctrlKey) return false;

    $($($(this).parent().parent().find(".lieferpositionToDelete")[0])).trigger(
      "click"
    );
  }
);

// add BTNs delete and copy palettes

$(".addlp-button[value='AddLieferposition']").after(
  `<div id="delete_palettes_zone"></div>`
);

let num_palettes_selected = 0;

// on selections palettes for delete
$(document).on("change", ".lieferpositionToDelete", function (e) {
  if (!$(".to-be-deleted").length > 0) {
    $("#delete_palettes_zone").html("");
    $("tfoot>tr>td[colspan='11']").html("");
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

    num_palette_selected_current = parseInt(
      $(e.target).parent().parent()[0].cells[13].innerText
    );
  } else {
    $("#delete_palettes_zone").html(`
      <button id="delete_palettes" class="btn btn-sm btn-outline-danger">
      <span class="fal fa-trash"></span>
      Supprimez les positions sélectionnées
      </button>
  `);

    num_palette_selected_current = parseInt(
      $(e.target).parent().parent()[0].cells[12].innerText
    );
  }

  // Palettes Counters.
  // check if checked to count num palettes
  if ($(e.target).is(":checked")) {
    num_palettes_selected += num_palette_selected_current;
  } else {
    num_palettes_selected -= num_palette_selected_current;
  }

  // show num palettes selected
  $("tfoot>tr>td[colspan='11']")
    .css("text-align", "center")
    .html("Nombre des palettes sélectionnées:  " + num_palettes_selected);
});

$(document).on("click", "#delete_palettes", function (e) {
  $("#deleteSelectedLieferpositions").trigger("click");
});

$(document).on("click", "#copy_palettes", function (e) {
  copy_palettes_GTINs();
});

//--------------------------------
// copy & paste palettes GTINs
//--------------------------------
function copy_palettes_GTINs() {
  const palettes_lpsToDelete = document.querySelectorAll(
    ".lieferpositionToDelete:checked"
  );
  const GTINs = [];
  for (const lp of palettes_lpsToDelete) {
    GTINs.push($(lp).parent().parent()[0].cells[3].innerText);
  }
  navigator.clipboard.writeText(JSON.stringify(GTINs));
  toastr.success(`les positions ont été copiés.`);
}

if (
  window.location.href.includes("Warenausgang/AddLieferpositionen?waTourId")
) {
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
      const GTINs = JSON.parse(clipText);

      const palettesAvilebal = document.querySelectorAll(
        'input[name="lieferposCheckboxes"]'
      );

      for (const palette of palettesAvilebal) {
        // check if is id in clipboard

        const paletteGTIN = $(palette).parent().parent().parent().parent()[0]
          .cells[5].innerText;
        if (GTINs.includes(paletteGTIN)) {
          $(palette).trigger("click");
        }
      }

      toastr.success(`les positions ont été collées.`);
    });
  });
}

//--------------------------------
// auto comments
//--------------------------------

function info_DoubleStock(num) {
  let DoubleStock = num;
  let standard = 33 - num / 2;
  let total = 33 + num / 2;

  return `-----------------------
  [ Attention ] 
 -----------------------
Cet tournée contient toutes les palettes  "Double stock". Veuillez ne pas enlever ou déplacer ces palettes.
 
Nombre de palettes total:  ${total} palettes.
 
Emplacements :  33
Double stock: ${num}
Palettes standard: ${standard}
 
Supprimez ce commentaire lorsqu'il la tournée est terminé.`;
}

$("#kommentarIntern").on("keyup", function (e) {
  let orgnal_value = $(this).val();

  if (!$(this).val().includes("&")) return true;

  let comments = [
    "",
    "1) Recharge {destination}.\nFaire prochaine tâche pour le chargement.",
    "2) Recharge {destination}.\nChargement plus tard, envoyer au parking.",
    "3) Recharge {destination}.\nReste à quai, chargement plus tard, laisser porte ouverte.",
    "4) Garder {destination}, à compléter.",
    "5) Coupure à quai, à compléter.",
    "6) Attention Double stock!",
  ];

  let chois = prompt(comments.slice(1).join("\n\n"));

  let data = chois.split(" ");

  switch (parseInt(data[0])) {
    case 1:
    case 2:
    case 3:
    case 4:
      $(this).val(
        comments[data[0]].substring(3).replace("{destination}", data[1])
      );
      break;
    case 5:
      $(this).val(comments[data[0]].substring(3));
      break;
    case 6:
      $(this).val(info_DoubleStock(parseInt(data[1])));
      break;
  }
});

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
  $('a[href="/XDockLieferscheinEditor/lieferscheinbundle/"')
    .before(`<a href="#" id="get_ls" style="padding-right: 15px;">
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

        let bon = $(dom.find(".xdock-head-title .docImage").parent()).attr(
          "href"
        );

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
