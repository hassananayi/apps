$("<style>").appendTo("head").html(`

#a4 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  height: 21cm;
  width: 29.7cm;
  background-color: #fff;
  position: relative;
}

#a4 > * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#map-border {
  height: 90%;
  width: 90%;
  border: 2px solid #929292;
  margin: auto;
  margin-top: 35px;
}

.first_color {
  background-color: #b3b3b3;
}
.sec_color {
  background-color: #d4d4d4;
}

.free {
  background: #2ecc71 !important;
}
.taken {
  background: #3498db !important;
}

.de_hier {
  background: #34495e !important;
}

.de_avance {
  background: #f1c40f !important;
}
.blocked {
  background: #c0392b !important;
}
.m-0 {
  margin: 0 !important;
}

a {
  text-decoration: none;
  color: inherit;
}
a.url_edit {
  height: 100%;
  width: 100%;
}
.M {
  position: absolute;
  top: 60px;
  left: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zoneM {
  height: 70px;
  width: 50px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.zone_M_name {
  position: absolute;
  top: -20px;
}

.C {
  position: absolute;
  bottom: 98px;
  right: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
}
.zoneC {
  height: 30px;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 4px;
}

[zone="C6"] {
  margin-top: 10px;
}

.zone_C_name {
  position: absolute;
  left: -25px;
}

.C_B_L {
  position: absolute;
  right: 257px;
  top: 200px;
}
.C_B_L > .top {
  display: flex;
}
.zone_top_right {
  width: 100px;
  height: 37px;
  margin-right: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.zone_top_right_name {
  position: absolute;
  top: -20px;
}

.center_B_C {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
}

.left_B {
  margin-right: 4px;
  width: 50%;
}
.rghit_C {
  width: 50%;
}

.zone_long {
  height: 30px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.long_right {
  flex-direction: row-reverse;
}

.zone_long_right_name {
  position: absolute;
  right: -25px;
}
.zone_long_left_name {
  position: absolute;
  left: -26px;
}

.right_L {
  position: relative;
  display: flex;
  height: 187px;
}
.zoneL {
  margin-right: 4px;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
}

.zone_L_name {
  position: absolute;
  bottom: -18px;
}

.L_value {
  rotate: -90deg;
}

.A_B_L {
  position: absolute;
  left: 144px;
  top: 212px;
}
.A_B_L > .top {
  display: flex;
  align-items: center;
}

.zone_top_left {
  width: 53px;
  height: 53px;
  margin-right: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.zone_top_left_name {
  position: absolute;
  top: -20px;
}

.A_B_L > .center {
  display: flex;
  margin-top: 4px;
}
.A_B_L > .down {
  display: flex;
  height: 195px;
}

.A_B_L > .down > .right {
  display: flex;
}

.left_a5 {
  margin-right: 4px;
  width: 60%;
}
.l1_name {
  position: absolute;
  bottom: -18px;
  left: 119px;
}

.l1 {
  width: 40px;
  text-align: left;
  float: right;
  height: 25px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

`);
let a4 = `
    <div id="a4">
        <div id="map-border"></div>
        <!-- Zone M -->
        <div class="M">
            <a class="zoneM first_color" zone="M1" target="_blank">
                <div class="zone_M_name">M1</div>
                <div id="M1"></div>
            </a>
            <a class="zoneM sec_color" zone="M2"  target="_blank">
                <div class="zone_M_name">M2</div>
                <div id="M2"></div>
            </a>
            <a class="zoneM first_color" zone="M3"target="_blank">
                <div class="zone_M_name">M3</div>
                <div id="M3"></div>
            </a>
            <a class="zoneM sec_color" zone="M4" target="_blank">
                <div class="zone_M_name">M4</div>
                <div id="M4"></div>
            </a>
            <a class="zoneM first_color" zone="M5" target="_blank">
                <div class="zone_M_name">M5</div>
                <div id="M5"></div>
            </a>
            <a class="zoneM sec_color" zone="M6" target="_blank">
                <div class="zone_M_name">M6</div>
                <div id="M6"></div>
            </a>
            <a class="zoneM first_color" zone="M7" target="_blank">
                <div class="zone_M_name">M7</div>
                <div id="M7"></div>
            </a>
            <a class="zoneM sec_color" zone="M8" target="_blank">
                <div class="zone_M_name">M8</div>
                <div id="M8"></div>
            </a>
            <a class="zoneM first_color" zone="M9" target="_blank">
                <div class="zone_M_name">M9</div>
                <div id="M9"></div>
            </a>
            <a class="zoneM sec_color" zone="M10" target="_blank">
                <div class="zone_M_name">M10</div>
                <div id="M10"></div>
            </a>
            <a class="zoneM first_color" zone="M11" target="_blank">
                <div class="zone_M_name">M11</div>
                <div id="M11"></div>
            </a>
            <a class="zoneM sec_color" zone="M12" target="_blank">
                <div class="zone_M_name">M12</div>
                <div id="M12"></div>
            </a>
            <a class="zoneM first_color" zone="M13" target="_blank">
                <div class="zone_M_name">M13</div>
                <div id="M13"></div>
            </a>
            <a class="zoneM sec_color" zone="M14" target="_blank">
                <div class="zone_M_name">M14</div>
                <div id="M14"></div>
            </a>
            <a class="zoneM first_color" zone="M15" target="_blank">
                <div class="zone_M_name">M15</div>
                <div id="M15"></div>
            </a>
            <a class="zoneM sec_color" zone="M16" target="_blank">
                <div class="zone_M_name">M16</div>
                <div id="M16"></div>
            </a>

        </div>
        
        <!-- Zone C 1-24 -->
        <div class="C">
            <a class="zoneC first_color" zone="C1" target="_blank">
                <div class="zone_C_name">C1</div>
                <div id="C1"></div>
            </a>
            <a class="zoneC sec_color" zone="C2" target="_blank">
                <div class="zone_C_name">C2</div>
                <div id="C2"></div>
            </a>
            <a class="zoneC first_color" zone="C3" target="_blank">
                <div class="zone_C_name">C3</div>
                <div id="C3"></div>
            </a>
            <a class="zoneC sec_color" zone="C4" target="_blank">
                <div class="zone_C_name">C4</div>
                <div id="C4"></div>
            </a>
            <a class="zoneC first_color" zone="C5" target="_blank">
                <div class="zone_C_name">C5</div>
                <div id="C5"></div>
            </a>
            <a class="zoneC sec_color" zone="C6"target="_blank">
                <div class="zone_C_name">C6</div>
                <div id="C6"></div>
            </a>
            <a class="zoneC first_color" zone="C8" target="_blank">
                <div class="zone_C_name">C8</div>
                <div id="C8"></div>
            </a>
            <a class="zoneC sec_color" zone="C10" target="_blank">
                <div class="zone_C_name">C10</div>
                <div id="C10"></div>
            </a>
            <a class="zoneC first_color" zone="C12" target="_blank">
                <div class="zone_C_name">C12</div>
                <div id="C12"></div>
            </a>
            <a class="zoneC sec_color" zone="C14" target="_blank">
                <div class="zone_C_name">C14</div>
                <div id="C14"></div>
            </a>
            <a class="zoneC first_color" zone="C16" target="_blank">
                <div class="zone_C_name">C16</div>
                <div id="C16"></div>
            </a>
            <a class="zoneC sec_color" zone="C18" target="_blank">
                <div class="zone_C_name">C18</div>
                <div id="C18"></div>
            </a>
            <a class="zoneC first_color" zone="C20" target="_blank">
                <div class="zone_C_name">C20</div>
                <div id="C20"></div>
            </a>
            <a class="zoneC sec_color" zone="C22" target="_blank">
                <div class="zone_C_name">C22</div>
                <div id="C22"></div>
            </a>
            <a class="zoneC first_color" zone="C24" target="_blank">
                <div class="zone_C_name">C24</div>
                <div id="C24"></div>
            </a>
   
        </div>
       <!-- Zone C B L -->
        <div class="C_B_L">
            <div class="top">
                <a class="zone_top_right first_color" zone="B16" target="_blank">
                    <div class="zone_top_right_name">B16</div>
                    <div id="B16"></div>
                </a>
                <a class="zone_top_right sec_color" zone="C23" target="_blank">
                    <div class="zone_top_right_name">C23</div>
                    <div id="C23"></div>
                </a>
                <a class="zone_top_right first_color m-0" zone="C21" target="_blank">
                    <div class="zone_top_right_name">C21</div>
                    <div id="C21"></div>
                </a>
            </div>
            <div class="center_B_C">
                <div class="left_B">
                    <a class="zone_long first_color" zone="B14" target="_blank">
                        <div class="zone_long_left_name">B14</div>
                        <div id="B14"></div>
                    </a>
                    <a class="zone_long sec_color" zone="B12" target="_blank">
                        <div class="zone_long_left_name">B12</div>
                        <div id="B12"></div>
                    </a>
                    <a class="zone_long first_color" zone="B10" target="_blank">
                        <div class="zone_long_left_name">B10</div>
                        <div id="B10"></div>
                    </a>
                    <a class="zone_long sec_color" zone="B8" target="_blank">
                        <div class="zone_long_left_name">B8</div>
                        <div id="B8"></div>
                    </a>
                    <a class="zone_long first_color" zone="B6" target="_blank">
                        <div class="zone_long_left_name">B6</div>
                        <div id="B6"></div>
                    </a>
                    <a class="zone_long sec_color" zone="B4" target="_blank">
                        <div class="zone_long_left_name">B4</div>
                        <div id="B4"></div>
                    </a>
                    <a class="zone_long first_color" zone="B2" target="_blank">
                        <div class="zone_long_left_name">B2</div>
                        <div id="B2"></div>
                    </a>
                </div>
                <div class="rghit_C">
                    <a class="zone_long long_right first_color" zone="C19" target="_blank">
                        <div class="zone_long_right_name">C19</div>
                        <div id="C19"></div>
                    </a>
                    <a class="zone_long long_right sec_color" zone="C17" target="_blank">
                        <div class="zone_long_right_name">C17</div>
                        <div id="C17"></div>
                    </a>
                    <a class="zone_long long_right first_color" zone="C15" target="_blank">
                        <div class="zone_long_right_name">C15</div>
                        <div id="C15"></div>
                    </a>
                    <a class="zone_long long_right sec_color" zone="C13" target="_blank">
                        <div class="zone_long_right_name">C13</div>
                        <div id="C13"></div>
                    </a>
                    <a class="zone_long long_right first_color" zone="C11" target="_blank">
                        <div class="zone_long_right_name">C11</div>
                        <div id="C11"></div>
                    </a>
                    <a class="zone_long long_right sec_color" zone="C9" target="_blank">
                        <div class="zone_long_right_name">C9</div>
                        <div id="C9"></div>
                    </a>
                    <a class="zone_long long_right first_color" zone="C7" target="_blank">
                        <div class="zone_long_right_name">C7</div>
                        <div id="C7"></div>
                    </a>
                </div>
            </div>

            <div class="right_L">
                <a class="zoneL first_color" zone="L8" target="_blank">
                    <div class="zone_L_name">L8</div>
                    <div class="L_value" id="L8"></div>
                </a>
                <a class="zoneL sec_color" zone="L9" target="_blank">
                    <div class="zone_L_name">L9</div>
                    <div class="L_value" id="L9"></div>
                </a>
                <a class="zoneL first_color" zone="L10" target="_blank">
                    <div class="zone_L_name">L10</div>
                    <div class="L_value" id="L10"></div>
                </a>
                <a class="zoneL sec_color" zone="L11" target="_blank">
                    <div class="zone_L_name">L11</div>
                    <div class="L_value" id="L11"></div>
                </a>
                <a class="zoneL first_color" zone="L12" target="_blank">
                    <div class="zone_L_name">L12</div>
                    <div class="L_value" id="L12"></div>
                </a>
                <a class="zoneL sec_color" zone="L13" target="_blank">
                    <div class="zone_L_name">L13</div>
                    <div class="L_value" id="L13"></div>
                </a>
                <a class="zoneL first_color" zone="L14" target="_blank">
                    <div class="zone_L_name">L14</div>
                    <div class="L_value" id="L14"></div>
                </a>
                <a class="zoneL sec_color" zone="L15" target="_blank">
                    <div class="zone_L_name">L15</div>
                    <div class="L_value" id="L15"></div>
                </a>
                <a class="zoneL first_color" zone="L16" target="_blank">
                    <div class="zone_L_name">L16</div>
                    <div class="L_value" id="L16"></div>
                </a>
                <a class="zoneL sec_color" zone="L17" target="_blank">
                    <div class="zone_L_name">L17</div>
                    <div class="L_value" id="L17"></div>
                </a>
                <a class="zoneL first_color" zone="L18" target="_blank">
                    <div class="zone_L_name">L18</div>
                    <div class="L_value" id="L18"></div>
                </a>
                <a class="zoneL sec_color" zone="L19" target="_blank">
                    <div class="zone_L_name">L19</div>
                    <div class="L_value" id="L19"></div>
                </a>
                <a class="zoneL first_color" zone="L20" target="_blank">
                    <div class="zone_L_name">L20</div>
                    <div class="L_value" id="L20"></div>
                </a>
                <a class="zoneL sec_color" zone="L21" target="_blank">
                    <div class="zone_L_name">L21</div>
                    <div class="L_value" id="L21"></div>
                </a>
            </div>
        </div>


         <!-- Zone A B L -->
        <div class="A_B_L">
            <div class="top">
                <a class="zone_top_left first_color" zone="A11" target="_blank">
                    <div class="zone_top_left_name">A11</div>
                    <div id="A11"></div>
                </a>
                <a class="zone_top_left sec_color" zone="A12" target="_blank">
                    <div class="zone_top_left_name">A12</div>
                    <div id="A12"></div>
                </a>
                <a class="zone_top_left first_color" zone="B17" target="_blank">
                    <div class="zone_top_left_name">B17</div>
                    <div id="B17"></div>
                </a>
                <a class="zone_top_left sec_color" zone="B15" target="_blank">
                    <div class="zone_top_left_name">B15</div>
                    <div id="B15"></div>
                </a>
                <a class="zone_top_left first_color m-0" zone="B13" target="_blank">
                    <div class="zone_top_left_name">B13</div>
                    <div id="B13"></div>
                </a>
            </div>
            <div class="center">
                <div class="left_B">
                    <a class="zone_long first_color" zone="A10" target="_blank">
                        <div class="zone_long_left_name">A10</div>
                        <div id="A10"></div>
                    </a>
                    <a class="zone_long sec_color" zone="A9" target="_blank">
                        <div class="zone_long_left_name">A9</div>
                        <div id="A9"></div>
                    </a>
                    <a class="zone_long first_color" zone="A8" target="_blank">
                        <div class="zone_long_left_name">A8</div>
                        <div id="A8"></div>
                    </a>
                    <a class="zone_long sec_color" zone="A7" target="_blank">
                        <div class="zone_long_left_name">A7</div>
                        <div id="A7"></div>
                    </a>
                    <a class="zone_long first_color" zone="A6" target="_blank">
                        <div class="zone_long_left_name">A6</div>
                        <div id="A6"></div>
                    </a>
                    <a class="zone_long sec_color" zone="A5" target="_blank">
                        <div class="zone_long_left_name">A5</div>
                        <div id="A5"></div>
                    </a>

                </div>
                <div class="rghit_C">
                    <a class="zone_long long_right first_color" zone="B11" target="_blank">
                        <div class="zone_long_right_name">B11</div>
                        <div id="B11"></div>
                    </a>
                    <a class="zone_long long_right sec_color" zone="B9" target="_blank">
                        <div class="zone_long_right_name">B9</div>
                        <div id="B9"></div>
                    </a>
                    <a class="zone_long long_right  first_color" zone="B7" target="_blank">
                        <div class="zone_long_right_name">B7</div>
                        <div id="B7"></div>
                    </a>
                    <a class="zone_long long_right sec_color" zone="B5" target="_blank">
                        <div class="zone_long_right_name">B5</div>
                        <div id="B5"></div>
                    </a>
                    <a class="zone_long long_right  first_color" zone="B3" target="_blank">
                        <div class="zone_long_right_name">B3</div>
                        <div id="B3"></div>
                    </a>
                    <a class="zone_long long_right  sec_color" zone="B1" target="_blank">
                        <div class="zone_long_right_name">B1</div>
                        <div id="B1"></div>
                    </a>
     
                </div>
            </div>

            <div class="down">
                <div class="left_a5">
                    <a class="zone_long first_color" zone="A4" target="_blank">
                        <div class="zone_long_left_name">A4</div>
                        <div id="A4"></div>
                    </a>
                    <a class="zone_long sec_color" zone="A3" target="_blank">
                        <div class="zone_long_left_name">A3</div>
                        <div id="A3"></div>
                    </a>
                    <a class="zone_long first_color" zone="A2" target="_blank">
                        <div class="zone_long_left_name">A2</div>
                        <div id="A2"></div>
                    </a>
                    <a class="zone_long sec_color" zone="A1" target="_blank">
                        <div class="zone_long_left_name">A1</div>
                        <div id="A1"></div>
                    </a>
                    <div class="zone_long first_color" zone="L1">
                        <div class="zone_long_left_name"></div>
                        <div id="LI_1"></div>
                    </div>
                    <a class="zone_long l1 sec_color" zone="L1" target="_blank">
                        <div class="zone_long_left_name l1_name">L1</div>
                        <div id="L1"></div>
                    </a>

                </div>
                <div class="right">
                    <a class="zoneL sec_color" zone="L2" target="_blank">
                        <div class="zone_L_name">L2</div>
                        <div class="L_value" id="L2"></div>
                    </a>
                    <a class="zoneL first_color" zone="L3" target="_blank">
                        <div class="zone_L_name">L3</div>
                        <div class="L_value" id="L3"></div>
                    </a>
                    <a class="zoneL sec_color" zone="L4" target="_blank">
                        <div class="zone_L_name">L4</div>
                        <div class="L_value" id="L4"></div>
                    </a>
                    <a class="zoneL first_color" zone="L5" target="_blank">
                        <div class="zone_L_name">L5</div>
                        <div class="L_value" id="L5"></div>
                    </a>
                    <a class="zoneL sec_color" zone="L6" target="_blank">
                        <div class="zone_L_name">L6</div>
                        <div class="L_value" id="L6"></div>
                    </a>
                    <a class="zoneL first_color" zone="L7" target="_blank">
                        <div class="zone_L_name">L7</div>
                        <div class="L_value" id="L7"></div>
                    </a>
                </div>
            </div>
        </div>
         
    </div>`;

/* Status
 - free
 - taken
 - blocked
 - de_hier
 - de_avance
*/
let info = [];
let page;
let updated_zones;

$.get(
  "/Warenausgang/Tag?sort=ZielortLokationNameASC&selectedDate=06%2F26%2F2023%2000%3A00%3A00",
  function (data, textStatus, jqXHR) {
    page = data;
    info.sumTouren = parseInt($(data).find("#sumTouren").html().trim());
    update_zone_status(data);
  }
);

// Update zones status
function update_zone_status(data) {
  let zone_info = [];
  // loop for zone alredy teken
  $($(data).find("#ZoneBase").find("select > option")).each(function (
    index,
    value
  ) {
    let zoneID = parseInt($(value).val());

    // check if is taken
    if ($(value).hasClass("zone-in-verwendung-auslieferungstermin")) {
      let ref = $(
        $(data)
          .find("[data-selected='" + zoneID + "']")
          .parent()[0].cells[9]
      )
        .find(".mightoverflow")
        .html()
        .trim()
        .substr(0, 3);

      zone_info.push({
        id: zoneID,
        name: $(value).html(),
        ref: ref,
        status: "taken",
      });

      // check if is tecken for de_hier
    } else if ($(value).hasClass("zone-in-verwendung-vergangenheit")) {
      zone_info.push({ id: zoneID, name: $(value).html(), status: "de_hier" });
      // check if is tecken for de_avance
    } else if ($(value).hasClass("zone-in-verwendung-zukunft")) {
      zone_info.push({
        id: zoneID,
        name: $(value).html(),
        ref: "",
        status: "de_avance",
      });
    } else if ($(value).is(":disabled")) {
      zone_info.push({
        id: zoneID,
        name: $(value).html(),
        ref: "",
        status: "blocked",
      });
    } else {
      zone_info.push({
        id: zoneID,
        name: $(value).html(),
        ref: "",
        status: "free",
      });
    }
  });

  updated_zones = zone_info;

  update_map();

  // console.log(updated_zones);
}

function update_map() {
  updated_zones.map((zone) => {
    let zone_el = $("#" + zone.name);
    // set status color
    switch (zone.status) {
      case "free":
        zone_el.parent().addClass("free");
        break;
      case "taken":
        zone_el.parent().addClass("taken");
        break;
      case "de_hier":
        zone_el.parent().addClass("de_hier");
        break;
      case "de_avance":
        zone_el.parent().addClass("de_avance");
        break;
      case "blocked":
        zone_el.parent().addClass("blocked");
        break;
    }
    zone_el.html(zone.ref);

    zone_el
      .parent()
      .attr("href", "https://tf-stb.xdock.de/Zonen/EditZone/" + zone.id + "");
  });
}
