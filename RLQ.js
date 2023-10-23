//***************************//
//  Cas particuliers (Démo) - XDock PRO
//***************************//

$("<style>").appendTo("head").html(`


`);

let page = `
<div class="container-fluid body-content flex-grow-1 px-4">
<div class="row d-flex align-items-center h-100 xdock-head-row">
<div class="col-6 h-100 xdock-head-title">
    <h1>
       XDock PRO <span class="fa fa-caret-right navArrow"></span> Cas particuliers <small>(Démo)</small>
    </h1>
</div>
</div>

<div class="container-fluid">
  <div class="row">


  <table id="table-WeTourLieferpositionen" class="table pt-0 pb-0 xdock-table-lp" style="width: 100%; table-layout: fixed; margin-bottom: 0" aria-label="WeTourLieferpositionenListeTable">
  <colgroup>
      <col style="width: 1.7344%"><col style="width: 3.7081%"><col style="width: 5.4426%"><col style="width: 5.4426%"><col style="width: 9.2703%"><col style="width: 9.5694%"><col style="width: 5.9809%"><col style="width: 4.1866%"><col style="width: 4.6053%"><col style="width: 3.1699%"><col style="width: 3.1699%"><col style="width: 4.3062%"><col style="width: 3.2895%"><col style="width: 3.5885%"><col style="width: 3.5885%"><col style="width: 4.1866%"><col style="width: 5.9809%"><col style="width: 5.3828%"><col style="width: 3.7081%"><col style="width: 5.622%"><col style="width: 2.0335%"><col style="width: 2.0335%">
  </colgroup>
  <thead>
  <tr>
  <th scope="col" class="col-paletten">
  </th>
  <th scope="col" class="col-status">
      <div class="d-flex justify-content-start">
          <a class="tablesortlink">
              Statut
          </a>
          <span style="width: 16px;"></span>
      </div>
  </th>
  <th scope="col" class="col-lieferant">
      <div class="d-flex justify-content-start">
          <a class="tablesortlink">
              Fournisseur
          </a>
          <span style="width: 16px;"></span>
      </div>
  </th>
  <th scope="col" class="col-ziel">
      <div class="d-flex justify-content-start">
          <a class="tablesortlink">
              Objectif
          </a>
          <span style="width: 16px;"></span>
      </div>
  </th>
  <th scope="col" class="col-artikelbezeichnung">
      <div class="d-flex justify-content-start">
          <a class="tablesortlink">
              Desc. Art.
          </a>
          <span style="width: 16px;"></span>
      </div>
  </th>
  <th scope="col" class="col-referenz">
      <div class="d-flex justify-content-start">
          <a class="tablesortlink">
              Référence
          </a>
        
      </div>
  </th>
  <th scope="col" class="col-lieferscheinnummer">
      <div class="d-flex justify-content-start">
          <a class="tablesortlink">
              Nº LS
          </a>
              <span data-toggle="tooltip" data-placement="left" class="ml-1 d-flex align-items-center" title="" data-original-title="">
                  <input type="checkbox" name="WeTour.LieferscheinnummernEingabemodus" value="true" class="lieferscheinnummernEingabemodusCheckbox" id="lieferscheinnummerLieferantenModusCheckbox" form="postform" checked="">
              </span>
          <span style="width: 16px;"></span>
      </div>
  </th>
  <th scope="col" class="col-gewicht">
      <div class="d-flex justify-content-start">
          <a class="tablesortlink">
              Poids
          </a>
          <span style="width: 16px;"></span>
      </div>
  </th>
  <th scope="col" class="col-istgewicht">
      <span style="font-size: 14px;" data-toggle="tooltip" data-placement="left" data-html="true" title="" data-original-title="">
          <div class="d-flex justify-content-start">
              <a class="tablesortlink">
                  Poids réel
              </a>
              <span style="width: 16px;"></span>
          </div>
      </span>
  </th>
  <th scope="col" class="col-doppelstock">
      <span style="font-size: 14px;" data-toggle="tooltip" data-placement="top" data-html="true" title="" data-original-title="Double stock">
          <div class="d-flex justify-content-start">
              <a class="tablesortlink">
                  DS
              </a>
              <span style="width: 16px;"></span>
          </div>
      </span>
  </th>
  <th scope="col" class="col-duesseldorfer">
      <span style="font-size: 14px;" data-toggle="tooltip" data-placement="top" data-html="true" title="" data-original-title="Düsseldorf">
          <div class="d-flex justify-content-start">
              <a class="tablesortlink">
                  DD
              </a>
              <span style="width: 16px;"></span>
          </div>
      </span>
  </th>
  <th scope="col" class="col-mengebm">
      <span style="font-size: 14px;" data-toggle="tooltip" data-placement="left" data-html="true" title="" data-original-title="">
          <div class="d-flex justify-content-start">
              <a class="tablesortlink">
                  TRACT.
              </a>
              <span style="width: 16px;"></span>
          </div>
      </span>
  </th>
  <th scope="col" class="col-geliefertemenge">
      <span style="font-size: 14px;" data-toggle="tooltip" data-placement="left" data-html="true" title="" data-original-title="">
          <div class="d-flex justify-content-start">
              <a class="tablesortlink">
                  PAL
              </a>
              <span style="width: 16px;"></span>
          </div>
      </span>
  </th>
  <th scope="col" class="col-gelieferteKolli">
      <span style="font-size: 14px;" data-toggle="tooltip" data-placement="left" data-html="true" title="" data-original-title="">
          <div class="d-flex justify-content-start">
              <a class="tablesortlink">
                  Colis
              </a>
              <span style="width: 16px;"></span>
          </div>
      </span>
  </th>
  <th scope="col" class="col-palettenfaktor">
      <span style="font-size: 14px;" data-toggle="tooltip" data-placement="top" data-html="true" title="" data-original-title="Facteur de palette">
          <div class="d-flex justify-content-start">
              <a class="tablesortlink">
                  PF
              </a>
              <span style="width: 16px;"></span>
          </div>
      </span>
  </th>
  <th scope="col" class="col-tauschpaletten">
      <span style="font-size: 14px;" data-toggle="tooltip" data-placement="left" data-html="true" title="" data-original-title="">
          <div class="d-flex justify-content-start">
              <a class="tablesortlink">
                  EURO
              </a>
              <span style="width: 16px;"></span>
          </div>
      </span>
  </th>
  <th scope="col" class="col-fehlgrund">
      <div class="d-flex justify-content-start">
          <a class="tablesortlink">
              Raison de l'échec
          </a>
          <span style="width: 16px;"></span>
      </div>
  </th>
  <th scope="col" class="col-zone">
      <div class="d-flex justify-content-start">
          <a class="tablesortlink">
              Zone (porte)
          </a>
          <span style="width: 16px;"></span>
      </div>
  </th>
  <th scope="col" class="col-watag">
      <span data-toggle="tooltip" data-placement="left" data-html="true" title="" data-original-title="Date de livraison de la tournée de sortie de marchandises">
          <div class="d-flex justify-content-start">
              <a class="tablesortlink">
                  Jour
              </a>
              <span style="width: 16px;"></span>
          </div>
      </span>
  </th>
  <th scope="col" class="col-watour">
      <div class="d-flex justify-content-start">
          <a class="tablesortlink">
              Tournée SM
          </a>
          <span style="width: 16px;"></span>
      </div>
  </th>
  <th scope="col" class="col-labeldata">
  </th>
      <th scope="col" class="col-deletelp">
          <span data-toggle="tooltip" data-placement="left" data-html="true" title="" data-original-title="">
             
          </span>
      </th>
  </tr>
  </thead>
  <tbody id="table_body_contnet">
  

          </tbody>
          </table>
          </div>
          </span>
      </td>
      </tr>
  </tbody>
  <tfoot class="bg-light border-1 rounded font-weight-bold fixed-bottom position-sticky" style="z-index: 1">

  </tfoot>
  </table>


<div id="loding_modal" class="modal" tabindex="-1" role="dialog" style="background: rgb(0 0 0 / 45%);">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h4 class="modal-title">Recherche des palettes Statut 42,43</h4>
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
            <div  style="font-weight: bold;text-align: center;margin: 15px;" id="palettes_counter"></div>
          </span>
        </span>
      </div>
    </div>
  </div>
</div>
</div>

`;

$(".body-content").replaceWith(page);
$("head>title").html("Cas particuliers :: XDock PRO");

// vars
let selected_date = $("#selectedDate").val();

$("#selectedDate").on("change", function (e) {
  // show loding modial
  $("#loding_modal").show();

  // reset map
  $("#table_body_contnet").html("");

  // load new date
  $.get("/Wareneingang/Tag?selectedDate=" + $(e.target).val(), function (data, textStatus, jqXHR) {
    loadEM_data(data);
  });
});

//call data
// $.get("/Wareneingang/Tag?selectedDate=2023-10-20", function (data, textStatus, jqXHR) {
//   loadEM_data(data);
// });

function loadEM_data(EM_data) {
  // show loding modial
  $("#loding_modal").show();

  let EM_page = $(EM_data);

  let touren_cheked = 0;

  let ALL_tourensEM = EM_page.find("#we-table tbody>tr");
  let sumTourens = ALL_tourensEM.length;

  ALL_tourensEM.each(function (index, value) {
    let tr = $(value)[0];
    let status = parseInt(tr.cells[1].innerText);

    switch (status) {
      case 89:
      case 90:
        let SM_URL = $(tr.cells[0]).find("a").attr("href");

        $.get(SM_URL, function (sm_content, textStatus, jqXHR) {
          touren_cheked += 1;

          if (touren_cheked == sumTourens) return $("#loding_modal").hide();
          if (!sm_content.includes("lpStatus43") && !sm_content.includes("lpStatus42")) return false;

          let ser_data = $(sm_content);
          ser_data.find(".lpStatus").each(function (key, value) {
            let status = parseInt($(value)[0].innerText);

            switch (status) {
              case 42:
              case 43:
                let tr_pal = $(value).parent().parent()[0];

                let parent_tr = tr_pal;
                let child_tr = ser_data.find("#paletten_" + $(tr_pal).attr("data-welpid"))[0];

                $("#table_body_contnet").append(parent_tr);
                $("#table_body_contnet").append(child_tr);

                break;
            }
          });

          touren_cheked += 1;

          if (touren_cheked == sumTourens) return $("#loding_modal").hide();
        });

        break;
      default:
        touren_cheked += 1;

        if (touren_cheked == sumTourens) return $("#loding_modal").hide();
        break;
    }
  });
}
function OpenPaletten(e) {
  var pltId = e.target.id.slice(0, -3);
  var palettenTable = document.getElementById("paletten_" + pltId);
  if (palettenTable.classList.contains("d-none")) {
    palettenTable.classList.remove("d-none");
    e.target.classList.replace("fa-plus-square", "fa-minus-square");
  } else {
    palettenTable.classList.add("d-none");
    e.target.classList.replace("fa-minus-square", "fa-plus-square");
  }
  $('[data-toggle="tooltip"]').tooltip();
}
