//***************************//
// Xdock personnalisé V 1.3.3 pour XDock Ver.20230323_3
// Dernière mise à jour le 04 mai 2023
//***************************//
console.log(
  "Xdock personnalisé V 1.3.3 pour XDock Ver.20230323_3  a été chargé.",
  "\nDernière mise à jour le 04 mai 2023"
);
//--------------------------
// CSS Styles
//--------------------------

$("<style>").appendTo("head").html(`
/* From JS */
/* Augmenter la taille du texte Remorque /véhicules */
input#kennzeichenZugmaschine,
input#kennzeichenAuflieger {
    font-size: 20px !important;
}

/* Augmenter la taille du texte de la porte */
label[for="tor-name"] a {
    font-size: 20px !important;
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
    "1432", //stb_more
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
// auto logout
//--------------------------------

AUTO_LOGOUT_PAGE_LOAD_DELAY = 60 * 120 * 1000;
AUTO_LOGOUT_WARNING_TIMEOUT = 60 * 120 * 1000; // 2 hours

jQuery.loadScript = function (url, callback) {
  jQuery.ajax({
    url: url,
    dataType: "script",
    success: callback,
    async: true,
  });
};

//when don loaded after 40 sec load the injector
let inject_Interval = setInterval(function () {
  $.loadScript("/js/auto-logout.js", function () {
    //Stuff to do after someScript has loaded
    console.log("Auto logout injector has been loaded.");
  });

  window.localStorage.setItem(
    "lastUserInteraction",
    Date.now() + 60 * 120 * 1000
  );

  clearInterval(inject_Interval);
}, 40000);
