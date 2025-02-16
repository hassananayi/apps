//***************************//
// Map add-on for XDock PRO
// V 2.07
// Dernière mise à jour le  16/02/2025
//***************************//

$("<style>").appendTo("head").html(`

  @media print {
  
    @page { size: landscape; }
    body{
      background: #fff !important;
      height: 21cm;
      width: 29.7cm;
      overflow: hidden;
    }
    #a4{
      zoom:100% !important;
    }
  
    .container-fluid.mt-3,#xdock_pro_page_header {
      display: none !important;
  }
  
  .guide {
    bottom: 70px !important;
    left: 73px !important;
    zoom:90%;
   
  }
  
  .date{
    display: block !important;
  }
  
  }
  
  
  #a4 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    height: 21cm;
    width: 29.7cm;
    background-color: #fff;
    position: relative;
    zoom:120%;
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
    margin-top: 30px;
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
    background: #3498db;
  
  }
  
  .en_cours{
    background: #e67e22;
  }
  
  .de_hier {
    background: #34495e !important;
   
  }
  a.de_hier > div[id],a.blocked > div[id]{
    color: #fff !important;
  }
  a.blocked > div[id]{
    color: #fff !important;
    text-align: center;
    font-size: 11px;
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
  .M {
    position: absolute;
    top: 58px;
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
    top: 197px;
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
    top: 208px;
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
  
  
  .guide {
    position: absolute;
    bottom: 17px;
    left: 66px;
    font-size: 10px;
    color: #292929;
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
  
  #show_avance,#show_SM_hier{
    cursor: pointer;
    text-decoration: underline;
  }
  
  
  .zoneL{
    text-wrap: nowrap;
  }
  
  .rlq{
    border: 1px solid #c0392b;
  }
  
  .badge {
    font-size: 100%;
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
                      <div class="zone_long first_color" zone="A0">
                          <div class="zone_long_left_name"></div>
                          <div id="A0"></div>
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
           
  
  
          <div  class="guide d-flex">
          <div class="gud_item"><div class="color free"></div> <span class="title">Zones libres</span>  <span id="total_free"></span></div>
          <div class="gud_item"><div class="color taken"></div>  <span class="title">Zones occupées</span>  <span id="total_taken"></span></div>
          <div class="gud_item"><div class="color blocked"></div> <span class="title">Zones bloquées</span>  <span id="total_blocked"></span></div>
          <div class="gud_item"><div class="color en_cours"></div> <span class="title">SM en cours</span>  <span id="total_en_cours"></span></div>
          <div class="gud_item" id="show_avance"><div class="color de_avance"></div> <span class="title">Marchandises en avance</span>  <span id="total_de_avance"></span></div>
          <div class="gud_item" id="show_SM_hier"><div class="color de_hier"></div> <span class="title">Reliquats</span>  <span id="total_de_hier"></span></div>
          <div class="gud_item"><div class="color first_color"></div> <span class="title">Données inconnues</span></div>
          <div class="gud_item"> <span class="date d-none"> Date d'impression: <span id="date_of_print"></span></span></div>
          </div>
  
  
      </div>`;
  
  $("#img-zonenuebersicht").replaceWith(a4);
  $("head>title").html("Carte de l'entrepôt TF-STB :: XDock PRO");
  
  // Set page header
  $("h1").parent().replaceWith(`<div id="xdock_pro_page_header" class="row d-flex align-items-center h-100 xdock-head-row">
  <div class="col-6 h-100 xdock-head-title">
      <h1>
         XDock PRO <span class="fa fa-caret-right navArrow"></span> Carte de l'entrepôt   
      </h1>
  </div>
  <div class="col-6 text-right">
  <button class="btn btn-sm btn-outline-primary mr-10" style="height: 50%;" id="double_stock"  ><span class="fas fa-sticky-note	 mr-10"></span>Double stock (cartons)</button>
  <button class="btn btn-sm btn-outline-primary" style="height: 50%;" id="zones_preliv"  ><span class="fa fa-boxes mr-10"></span>Zones de pré-livraison</button>
  
   
  </div>
  </div>`);
  
  /* Status
   - free
   - taken
   - blocked
   - de_hier
   - de_avance
  */
  let selected_date;
  if (window.location.href.includes("?selectedDate")) {
    selected_date = window.location.href.split("?selectedDate=")[1];
  } else {
    selected_date = $("#selectedDate").val();
  }
  
  let updated_zones;
  let LastModified;
  
  $("#selectedDate").on("change", function (e) {
    // reset map
    $("#a4").replaceWith(a4);
  
    // load new date
    $.get("/Warenausgang/Tag?sort=ZielortLokationNameASC&selectedDate=" + $(e.target).val(), function (data, textStatus, jqXHR) {
      update_zone_status(data);
    });
  
    // update url
    window.location.href = window.location.href + "?selectedDate=" + $("#selectedDate").val();
  });
  
  // When dom ready call data
  $(document).ready(function () {
    //sort: ZielortLokationNameASC
    $.get("/Warenausgang/Tag?sort=StatusASC&selectedDate=" + selected_date, function (data, textStatus, jqXHR) {
      update_zone_status(data);
    });
  });
  
  // Update zones status
  function update_zone_status(dataServ) {
    let zone_info = [];
    let data = $(dataServ);
    // loop for zone alredy teken
    $(data.find("#ZoneBase>select>option")).each(function (index, value) {
      let option = $(value);
      let zoneID = parseInt(option.val());
      // check if is taken
      if (option.hasClass("zone-in-verwendung-auslieferungstermin")) {
        let tr_children = data
          .find("[data-selected='" + zoneID + "']")
          .parent()
          .children();
        let ref = get_ref_code(tr_children[6].innerText.trim());
        let SM_ID = tr_children[0].innerText.trim()
       
  
        if (ref == "GCA?_TEN?") {
          ref = tr_children[8].innerText.trim().substring(11, 15);
        }
        // check tour status
        let lpStatus = tr_children[1].innerText;
  
        switch (parseInt(lpStatus)) {
          case 81:
          case 80:
            zone_info.push({
              id: zoneID,
              name: option.html(),
              ref: ref,
              status: "en_cours",
              SM_ID:SM_ID,
            });
            break;
          case 44:
            zone_info.push({
              id: zoneID,
              name: option.html(),
              ref: ref,
              status: "blocked",
              SM_ID:SM_ID,
            });
  
            break;
          default:
            zone_info.push({
              id: zoneID,
              name: option.html(),
              ref: ref,
              status: "taken",
              SM_ID:SM_ID,
            });
            break;
        }
  
        // check if is tecken for de_hier
      } else if (option.hasClass("zone-in-verwendung-vergangenheit")) {
        zone_info.push({ id: zoneID, name: option.html(), status: "de_hier" });
        // check if is tecken for de_avance
      } else if (option.hasClass("zone-in-verwendung-zukunft")) {
        zone_info.push({
          id: zoneID,
          name: option.html(),
          ref: "",
          status: "de_avance",
          SM_ID:""
        });
      } else if (option.is(":disabled")) {
        zone_info.push({
          id: zoneID,
          name: option.html(),
          ref: "",
          status: "blocked",
          SM_ID:""
        });
      } else {
        zone_info.push({
          id: zoneID,
          name: option.html(),
          ref: "",
          status: "free",
          SM_ID:""
        });
      }
    });
  
    updated_zones = zone_info;
  
    // update map
    update_map();
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
        case "en_cours":
          zone_el.parent().addClass("en_cours");
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
  
      zone_el.parent().attr("href", "/Zonen/EditZone/" + zone.id + "");
      zone_el.parent().attr("SM_href", "/Warenausgang/Tour?sort=LieferantStrASC&waTourId=" + zone.SM_ID );
    });
  
    // numbers
    $("#total_en_cours").html("(" + $(".en_cours").not(".color").length + ")");
    $("#total_free").html("(" + $(".free").not(".color").length + ")");
    $("#total_taken").html("(" + $(".taken").not(".color").length + ")");
    $("#total_de_hier").html("(" + $(".de_hier").not(".color").length + ")");
    $("#total_de_avance").html("(" + $(".de_avance").not(".color").length + ")");
    $("#total_blocked").html("(" + $(".blocked").not(".color").length + ")");

    // hendel on shift click open SM URL
    $(document).on("click","a[zone]",function(e){
      if(e.ctrlKey){
        e.preventDefault();
        window.open($(this).attr("SM_href"),"_blank")
      }
    })
  }
  
  // remove h1 befor print
  window.addEventListener("beforeprint", (event) => {
    $("h1").parent().remove();
  
    //set date of print
    var currentdate = new Date();
    var options = { hour12: false };
    var current = currentdate.toLocaleString("fr-FR", options);
    current = current.replace(/\//g, "-");
  
    $("#date_of_print").html(current);
  });
  
  function get_ref_code(ref) {
    let code_vo;
    switch (ref) {
      case "Ablis":
        code_vo = "ABL";
        break;
      case "Alcalá":
        code_vo = "ALC";
        break;
      case "Arcs-sur-Argens":
        code_vo = "ASA";
        break;
      case "Barbery":
        code_vo = "BAR";
        break;
      case "Barcelona":
        code_vo = "BCN";
        break;
      case "Baziège":
        code_vo = "BAZ";
        break;
      case "Beaucaire":
        code_vo = "LUN";
        break;
      case "Béziers":
        code_vo = "BEZ";
        break;
      case "Carquefou":
        code_vo = "CAQ";
        break;
      case "Cestas":
        code_vo = "CET";
        break;
      case "Chanteloup-Les-Vignes":
        code_vo = "CLV";
        break;
      case "Entzheim":
        code_vo = "ENT";
        break;
      case "Gondreville":
        code_vo = "GON";
        break;
      case "Gran Canaria":
        code_vo = "GCA?_TEN?";
        break;
      case "Granada":
        code_vo = "GRN";
        break;
      case "Guingamp":
      case "CHÂTELAUDREN-PLOUAGAT":
        code_vo = "GUI";
        break;
      case "Honguemare-Guenouville":
        code_vo = "HON";
        break;
      case "La Chapelle D'Armentières":
        code_vo = "LCA";
        break;
      case "Le Coudray-Montceaux":
        code_vo = "LCM";
        break;
      case "Liffré":
        code_vo = "LIF";
        break;
      case "Loures":
        code_vo = "LOU";
        break;
      case "Lillers":
        code_vo = "LIL";
        break;
      case "Saint Augustin":
        code_vo = "SAI";
        break;
      case "Lunel":
        code_vo = "LUN";
        break;
      case "Málaga":
      case "Malaga":
        code_vo = "MLG";
        break;
      case "Meaux":
        code_vo = "MEA";
        break;
      case "Montchanin":
        code_vo = "MON";
        break;
      case "Montoy Flanville":
        code_vo = "MFV";
        break;
      case "Murcia":
        code_vo = "MUR";
        break;
      case "Narón":
        code_vo = "NAR";
        break;
      case "Palmela":
        code_vo = "PAL";
        break;
      case "Pontcharra":
        code_vo = "PCH";
        break;
      case "Plouagat":
        code_vo = "PLO";
        break;
      case "Provence":
      case "ROUSSET":
      case "Rousset":
        code_vo = "PRO";
        break;
      case "Sailly-lez-Cambrai":
        code_vo = "SLC";
        break;
      case "Saint Quentin Fallavier":
        code_vo = "SQF";
        break;
      case "Santo Tirso":
        code_vo = "SAN";
        break;
      case "Sevilla":
        code_vo = "SEV";
        break;
      case "Sintra":
        code_vo = "SIN";
        break;
      case "Sorigny":
        code_vo = "SOR";
        break;
      case "Tenerife":
        code_vo = "GCA?_TEN?";
        break;
      case "Torres Novas":
        code_vo = "TON";
        break;
      case "Tarragona":
        code_vo = "TRG";
        break;
      case "Valencia":
        code_vo = "VLC";
        break;
      case "Vars":
        code_vo = "VAR";
        break;
      case "Vitoria":
        code_vo = "VIT";
        break;
      default:
        code_vo = "???";
        break;
    }
  
    return code_vo;
  }
  
  // update avance info
  function load_other_day(selectedDate) {
    $.get("/Warenausgang/Tag?sort=StatusASC&selectedDate=" + switchDate(selectedDate), function (dataServ, textStatus, jqXHR) {
      let zone_info = [];
      let data = $(dataServ);
      // loop for zone alredy teken
      $(data.find("#ZoneBase>select>option")).each(function (index, value) {
        let option = $(value);
        let zoneID = parseInt(option.val());
        // check if is taken
        if (option.hasClass("zone-in-verwendung-auslieferungstermin")) {
          let tr_children = data
            .find("[data-selected='" + zoneID + "']")
            .parent()
            .children();
          let ref = get_ref_code(tr_children[6].innerText.trim());
  
          // let url = $(tr_children[0]).find("a").attr("href");
  
          if (ref == "GCA?_TEN?") {
            ref = tr_children[8].innerText.trim().substring(11, 15);
          }
  
          $("#" + option.html()).append(ref);
        }
      });
    });
  }
  
  $(document).on("click", "#show_avance", function () {
    load_other_day("next");
  });
  
  $(document).on("click", "#show_SM_hier", function () {
    load_other_day("back");
  });
  
  function switchDate(dayIN) {
    let d = new Date();
  
    if (dayIN == "next") {
      d.setDate(d.getDate() + 1);
    } else {
      d.setDate(d.getDate() - 1);
    }
  
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();
  
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
  
    return [year, month, day].join("-");
  }
  
  //***************************//
  // Zones de pre-livraison
  //***************************//
  
  $(document).on("click", "#zones_preliv", function () {
    let all_zones_bloked = $(".blocked").not(".color");
  
    $.each(all_zones_bloked, function (indexInArray, valueOfElement) {
      let zoneEL = $(valueOfElement);
      let zoneName = zoneEL.attr("zone");
  
      $.get(zoneEL.attr("href"), function (dataServ, textStatus, jqXHR) {
        let content = $(dataServ).find("#sperrgrundTextArea").val();
  
        switch (true) {
          case content.toLowerCase().includes("livraison lundi"):
            $("#" + zoneName).html("Livraison Lundi");
            break;
          case content.toLowerCase().includes("lundi"):
            $("#" + zoneName).html("Lundi");
            break;
          case content.toLowerCase().includes("mardi"):
            $("#" + zoneName).html("Mardi");
            break;
          case content.toLowerCase().includes("mercredi"):
            $("#" + zoneName).html("Mercredi");
            break;
          case content.toLowerCase().includes("jeudi"):
            $("#" + zoneName).html("Jeudi");
            break;
          case content.toLowerCase().includes("vendredi"):
            $("#" + zoneName).html("Vendredi");
            break;
          case content.toLowerCase().includes("samedi"):
            $("#" + zoneName).html("Livraison samedi");
            break;
          case content.toLowerCase().includes("alsace"):
            $("#" + zoneName).html("Alsace Lait");
            break;
          case content.toLowerCase().includes("pv"):
          case content.toLowerCase().includes("palettes vides"):
            $("#" + zoneName).html("Palettes Vides");
            break;
          case content.toLowerCase().includes("passage"):
            $("#" + zoneName).html("Passage");
            break;
          case content.toLowerCase().includes("travaux"):
            $("#" + zoneName).html("Travaux");
            break;
          case content.toLowerCase().includes("mix"):
            $("#" + zoneName).html("Mix");
            break;
          case content.toLowerCase().includes("stock"):
            $("#" + zoneName).html("Stock");
            break;
  
          default:
            $("#" + zoneName).html("???");
        }
      });
    });
  });
  
  //***************************//
  // Nomber de cartons
  //***************************//
  let cartons_ok = false;
  $(document).on("click", "#double_stock", function () {
    if (cartons_ok) return true;
    cartons_ok = true;
    $.get("/Warenausgang/Tag?sort=StatusASC&selectedDate=" + selected_date, function (servdata) {
      let data = $(servdata);
  
      $(data.find("#ZoneBase>select>option")).each(function (index, value) {
        let option = $(value);
        let zoneID = parseInt(option.val());
  
        if (option.hasClass("zone-in-verwendung-auslieferungstermin")) {
          let tr_children = data
            .find("[data-selected='" + zoneID + "']")
            .parent()
            .children();
  
          // number de cartons*
          let emplacmet = 0;
          let emplacmet_num = tr_children[2].innerText.trim();
          let total_num = tr_children[4].innerText.trim().split("/")[1];
  
          if (emplacmet_num.includes(",")) {
            // Replace the comma with a dot
            let modifiedStr = emplacmet_num.replace(",", ".");
  
            // Convert the modified string to a number
            emplacmet = parseFloat(modifiedStr);
          } else {
            emplacmet = emplacmet_num;
          }
  
          let cartons_num = parseInt(total_num) - emplacmet;
  
          let cartons = " <span class='badge bg-light  text-dark'>" + cartons_num + " </span>";
          // add cartons to dom
          $("#" + option.html()).append(cartons);
        }
      });
    });
  });
