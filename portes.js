//***************************//
// Gestion des portes add-on for XDock PRO
// V 1.00
//***************************//

$("<style>").appendTo("head").html(`

#a4 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}




#a4 a {
  text-decoration: none;
  color: inherit;
}
#a4 a:hover {
  opacity: 0.7;
}

a.url_edit {
  height: 100%;
  width: 100%;
}

.portes_grid {
  display: flex;
}

.porte {
  height: 150px;
  width: 101px;
  text-align: center;
  background: #f1f1f1;
  margin-right: 10px;
  padding-top: 25px;
  font-size: 14px;
  font-weight: 600;
}


.porte a {
  background: white;
  color: black;
  padding: 3px 7px 3px 7px;
  border-radius: 4px;
}
.all_portes {
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.row1,.row2,.row3,.row4 {
  display: flex;
}

.row2,.row3,.row4 {
  margin-top: 10px;
}

span.window {
  display: block;
  position: absolute;
  height: 23px;
  width: 49px;
  background: #9e9e9e42;
  left: 26px;
  top: 57px;
  border: 1px solid;
 
}

.porte span.window{
  background: linear-gradient(90deg, rgb(255 255 255) 0%, rgba(254,254,254,1) 0%, rgb(224 222 222) 100%);
}
.porte.taken span.window{
  background: linear-gradient(90deg, rgba(179,177,203,1) 0%, rgba(254,254,254,1) 0%, rgb(133 203 244) 100%);
}
.porte.free span.window{
  background: linear-gradient(90deg, rgb(255 255 255) 0%, rgba(254,254,254,1) 0%, rgb(124 240 173) 100%);
}

.porte.tow_affectation span.window{
  background: linear-gradient(90deg, rgb(255 255 255) 0%, rgba(254,254,254,1) 0%, rgb(244 219 118) 100%);
}
.porte.blocked span.window{
  background: linear-gradient(90deg, rgb(255 255 255) 0%, rgba(254,254,254,1) 0%, rgb(255 93 76) 100%);
}


.guide {
  font-size: 10px;
  color: #292929;
  margin-top: 50px;
}

.gud_item {
  margin-right: 15px;
  display: flex;
}

.gud_item .title{
  margin-right: 4px;
}

.color {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  margin-right: 3px;
  
}

.first_color {
  background-color: #b3b3b3;
}
.sec_color {
  background-color: #d4d4d4;
}

.free {
  background: #2ecc71;
}

.taken {
  background: #3498db;

}
.blocked {
  background: #c0392b;
}
.tow_affectation {
  background: #f1c40f;
}

span.porte_num {
  background: #ffffff6e;
  padding: 3px 5px 3px 5px;
  border-radius: 4px;
}
`);

let a4 = `
    <div id="a4">
       <div class="all_portes">
        <div class="row1 ">
        <a  href="" target="_blank"><div id="T2" class="col porte"><span class="porte_num">T2</span> <span class="window"></span></div></a>
        <a  href="" target="_blank"><div id="T3" class="col porte"><span class="porte_num">T3</span>  <span class="window"> </span></div></a> 
        <a  href="" target="_blank"><div id="T4" class="col porte"><span class="porte_num">T4</span> <span class="window"></span></div></a> 
        <a href="" target="_blank"><div id="T5" class="col porte"><span class="porte_num">T5</span>  <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T6" class="col porte"><span class="porte_num">T6</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T7" class="col porte"><span class="porte_num">T7</span><span class="window"></span></div></a> 
        <a href="" target="_blank"><div id="T8" class="col porte"><span class="porte_num">T8</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T9" class="col porte"><span class="porte_num">T9</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T10" class="col porte"><span class="porte_num">T10</span> <span class="window"></span></div></a>
 
        </div>
        <div class="row2">
        <a href="" target="_blank"><div id="T11" class="col porte" ><span class="porte_num">T11</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T12" class="col porte" ><span class="porte_num">T12</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T13" class="col porte" ><span class="porte_num">T13</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T14" class="col porte" ><span class="porte_num">T14</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T15" class="col porte" ><span class="porte_num">T15</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T16" class="col porte" ><span class="porte_num">T16</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T17" class="col porte" ><span class="porte_num">T17</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T18" class="col porte" ><span class="porte_num">T18</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T19" class="col porte"><span class="porte_num">T19</span> <span class="window"></span></div></a>

        </div>

        <div class="row3">
       
        <a href="" target="_blank"><div id="T20" class="col porte"><span class="porte_num">T20</span> <span class="window"></span></div></a> 
        <a href="" target="_blank"><div id="T21" class="col porte"><span class="porte_num">T21</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T22" class="col porte"><span class="porte_num">T22</span><span class="window"></span></div></a> 
        <a href="" target="_blank"><div id="T23" class="col porte"><span class="porte_num">T23</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T24" class="col porte"><span class="porte_num">T24</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T25" class="col porte"><span class="porte_num">T25</span> <span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T26" class="col porte"><span class="porte_num">T26</span> <span class="window"></span></div></a>
       
        <a href="" target="_blank"><div id="T27" class="col porte" ><span class="porte_num">T27</span><span class="window"></span></div></a>
        <a href="" target="_blank"><div id="T28" class="col porte" ><span class="porte_num">T28</span> <span class="window"></span></div></a>
        </div> 

     
      </div>
      <div class="guide d-flex">
      <div class="gud_item"><div class="color free"></div> <span class="title">Libre</span>  <span id="total_free"></span></div>
      <div class="gud_item"><div class="color taken"></div>  <span class="title">Occupé</span>  <span id="total_taken"></span></div>
      <div class="gud_item"><div class="color blocked"></div> <span class="title">bloqué</span>  <span id="total_blocked"></span></div>
      <div class="gud_item"><div class="color tow_affectation"></div> <span class="title"> Deux affectation ou plus</span><span id="total_tow_affectation"></span></div>
 
      </div>

    </div>`;

$("#img-zonenuebersicht").replaceWith(a4);
$("head>title").html("Gestion des portes :: XDock PRO");

$("h1").parent().replaceWith(`<div class="row d-flex align-items-center h-100 xdock-head-row">
<div class="col-6 h-100 xdock-head-title">
    <h1>
       XDock PRO <span class="fa fa-caret-right navArrow"></span> Gestion des portes
    </h1>
</div>
</div>`);

// When dom ready call data
$(document).ready(function () {
  // CALL portes DATA
  $.get("/ToreZonenCluster/ToreZonenIndex", function (data, textStatus, jqXHR) {
    let dom_data = $(data);
    $(dom_data.find("#tore-table tbody tr")).each(function (index, value) {
      let cells = $(value)[0].cells;

      let porte_num = cells[1].innerText.trim();
      let affectation = cells[4].innerText.trim();
      let porte_url = $(cells[1]).find("a").attr("href");
      let blocked = $(cells[3]).find("input")[0].checked;

      // set url
      $("#" + porte_num)
        .parent()
        .attr("href", porte_url);

      if (blocked) return $("#" + porte_num).addClass("blocked");
      if (!affectation) return $("#" + porte_num).addClass("free");

      if (parseInt(affectation) > 1) {
        $("#" + porte_num).addClass("tow_affectation");
      } else {
        $("#" + porte_num).addClass("taken");
      }
    });

    // numbers
    $("#total_free").html("(" + $(".free").not(".color").length + ")");
    $("#total_taken").html("(" + $(".taken").not(".color").length + ")");
    $("#total_tow_affectation").html("(" + $(".tow_affectation").not(".color").length + ")");
    $("#total_blocked").html("(" + $(".blocked").not(".color").length + ")");
  });
});

// refrech page every 60s
setTimeout(function () {
  window.location.reload(1);
}, 60000);
