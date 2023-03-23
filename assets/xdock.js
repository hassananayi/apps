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
 `);

//--------------------------
// Shortcuts
//--------------------------

// E - open "En cours" Page

// lisnt to ctrl+< to to open all edit palette pages
var onkeydown = function (ev) { 
    
    const ingnor = ["input","textarea","select","text","checkbox","search","number"];

  // if the foucs on inputs skip
  if (ingnor.includes(ev.target.type)) return true; 
      
     switch (ev.which) {
       case 69: // E key 
      window.open("/Taskmanagement/TaskmanagementInArbeit?sort=IsTaskSperrenRequested","_blank");
         break;
       default:
         //alert(key);
         // do stuff here?
         break;
     }
  
 };


//--------------------------
// collaborateurs
//--------------------------


function collaborateurs(){


let team_1 = [
  "",     // -
  "900", // Abdel
  "945", //Chris
  "928", //Gregory
  "941", //Hassan
  "951", //Kevin
  "953", //Leandro
  "957", //Marc
  "942", //Patrice
  "936", //Saleh
  "4257", //Salim
  "976", //Sebastien
  "979", //Stephan M.
  "934", //Suzie
  ]
  let team_2 = [
  "",     // -
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
  ]
  
  let team_3 = [
  "",     // -
  "902", // Alban
  "919", //Daniel
  "921", //David T.
  "932", //Houcine
  "1213", //Mike
  "971", //Romain
  "977", //SeKu
  "913", //Yamin
  "986", //Younes
  ]
      
  
  // check current_team
  switch(parseInt(localStorage.getItem('current_team'))){
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
      localStorage.setItem('current_team', 0);
      break;
  }
  
  function inject_code(team_list){
  $("select.updateMitarbeiterSelectbox > option").each(function() {
  
      if($(this).is(':selected')) return true
  
      if($.inArray($(this).val(), team_list )===-1){
          $(this).remove();
      }
      });
  }
  
  
  
  // add to dom select names
  function add_select_team(current_team){
  
  $("body").append(`<div class="d-flex">
  <span class='ml-3'>Modifier la liste des collaborateurs</span>
  <select id="edit_names_list"  class="form-control form-control-sm ml-3" data-style="xdock-selectbox xdock-selectboxWidth120">
      <option ${(current_team === 0) ? 'selected' :''}  value="0">Tous les prénoms</option>
      <option ${(current_team === 1) ? 'selected' :''}  value="1">Équipe du matin</option>
      <option ${(current_team === 2) ? 'selected' :''}  value="2">L'équipe de l'après-midi</option>
      <option ${(current_team === 3) ? 'selected' :''}  value="3">L'équipe de nuit</option>
  </select></div>`);
  
  // lisent to change
  $(document).on("change","#edit_names_list",function(el){
      // set to storge
      localStorage.setItem('current_team', $(this).val());
      // reload the page
      window.location.reload()
  })
      
  }

} // end function coll

// check if the page is "dans lnte" run the function
if(window.location.href == "https://tf-stb.xdock.de/Taskmanagement/TaskmanagementAmLager"){
  collaborateurs();
}

