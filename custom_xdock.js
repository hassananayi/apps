//***************************//
// Xdock personnalisé
//***************************//
console.log(
  "Xdock personnalisé V 1.4.3 pour XDock Ver.20230511_3  a été chargé.",
  "\nDernière mise à jour le 14 mai 2023"
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
    "950", //Pierre New
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
if (
  window.location.href.includes(
    "https://tf-stb.xdock.de/Taskmanagement/TaskmanagementAmLager"
  )
) {
  collaborateurs();
}

//--------------------------------
// afficher le nom d'utilisateur
//--------------------------------
//data-original-title="Logout STB_XxXx@xdock.de"
let users = {
  stb_mawi: "WILLER Marc",
  stb_gesc: "SCHOETTEL Georges",
  stb_lede: "DE SOUSA Leandro",
};
let curent_user = $("i.fal.fa-sign-out")
  .attr("data-original-title")
  .toLowerCase();
let user_id = curent_user.substring(
  curent_user.indexOf("stb_"),
  curent_user.indexOf("@")
);
// check if in arry
if (users[user_id]) {
  $("i.fal.fa-sign-out").attr("data-original-title", users[user_id]);
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

  let Block_btn_html =
    '<div class="p-2 m-auto "><button id="ha_block_task" class="btn btn-outline-danger">Bloquer la tâche</button></div>';
  let deblock_btn_html =
    '<div class="p-2 m-auto "><button id="ha_deblock_task" class="btn btn-outline-primary">Valider la tâche</button></div>';

  // inject btns
  switch (parseInt(tourStatus)) {
    case 80:
      $(".xdock-head-row > .col-4 > .d-flex.flex-row").append(Block_btn_html);
      break;
    case 75:
      $(".xdock-head-row > .col-4 > .d-flex.flex-row").append(Block_btn_html);
      break;
    case 44:
      $(".xdock-head-row > .col-4 > .d-flex.flex-row").append(deblock_btn_html);
      break;

    default:
      break;
  }

  // block task
  $(document).on("click", "#ha_block_task", function () {
    $.post(
      "https://tf-stb.xdock.de/Taskmanagement/TaskSperrenErzwingen",
      {
        tourId: parseInt(tourID),
        isWeTour: iswetour,
      },
      function (data) {
        if (data === true) {
          window.location.reload();
        }
      }
    );
  });

  // deblock task
  $(document).on("click", "#ha_deblock_task", function () {
    $.post(
      "https://tf-stb.xdock.de/Taskmanagement/TaskFreigeben",
      {
        tourId: tourID,
        isWeTour: iswetour,
      },
      function (data) {
        if (data === true) {
          window.location.reload();
        }
      }
    );
  });
}

// check if the page is "tour EM or SM" run the function
if (
  window.location.href.includes("https://tf-stb.xdock.de/Warenausgang/Tour") ||
  window.location.href.includes("https://tf-stb.xdock.de/Wareneingang/Tour")
) {
  task_manger();
}

//--------------------------------
// desactive auto logout
//--------------------------------
function setLastInteraction(lastInteraction) {
  let d = new Date();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    "LastInteraction=" +
    lastInteraction +
    "; " +
    expires +
    "; path=/;  SameSite=None; Secure; domain=xdock.de";
}

setInterval(function () {
  setLastInteraction(Date.now() + 28800000);
}, 1000);
