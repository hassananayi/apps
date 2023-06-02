//***************************//
// Xdock personnalisé
//***************************//
console.log(
  "Xdock personnalisé V 1.4.8 pour XDock Ver.20230511_3  a été chargé.",
  "\nDernière mise à jour le 02 juin 2023"
);
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

 `);

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
    "934", //Suzie
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
    "1428", //yanana
    "919", //Daniel
  ];

  let team_3 = [
    "", // -
    "902", // Alban
    "919", //Daniel
    "921", //David T.
    "932", //Houcine
    "1213", //Mike
    "971", //Romain
    "977", //SeKu
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
// Delete palettes
//--------------------------------

// click on four to select
$(document).on(
  "click",
  "span.d-inline-block.text-truncate.w-100.mightoverflow",
  function (ev) {
    if (!ev.ctrlKey) return false;

    //console.log($(this).parent().parent().find(".lieferpositionToDelete"));

    $($($(this).parent().parent().find(".lieferpositionToDelete")[0])).trigger(
      "click"
    );
  }
);

// add btn delete palettes

$(".addlp-button[value='AddLieferposition']").after(
  `<div id="delete_palettes_zone"></div>`
);

$(document).on("change", ".lieferpositionToDelete", function (e) {
  if (!$(".to-be-deleted").length > 0)
    return $("#delete_palettes_zone").html("");

  $(
    "#delete_palettes_zone"
  ).html(`<button id="delete_palettes" class="btn btn-sm btn-outline-danger">
<span class="fal fa-trash-alt"></span>
Supprimez les positions sélectionnées
</button>`);
});

$(document).on("click", "#delete_palettes", function (e) {
  $("#deleteSelectedLieferpositions").trigger("click");
});
