// config add paltte modal
var add_modal = new bootstrap.Modal(document.getElementById('add_modal'), {
    keyboard: false
})
 
// Enable scan events for the entire document
onScan.attachTo(document);
// Register event listener
document.addEventListener('scan', function(sScancode, iQuantity) {
    add_modal.show()

  
 


    let barcode = sScancode.detail.scanCode;
 

    let parsed_data = parseBarcode(barcode);

 


   for (let i = 0; i < parsed_data.parsedCodeItems.length; i++) {
     


     if(parsed_data.parsedCodeItems[i].ai){

        switch(parsed_data.parsedCodeItems[i].ai){

            // check for SSCC 
            case "00":
                console.log("sscc found");
                $("#sscc").val(parsed_data.parsedCodeItems[i].data)
            break;
            
            // check for KLSTB 
            case "400":
            console.log("KLSTB found");
            $("#KLSTB").val(parsed_data.parsedCodeItems[i].data);
            
            break;

            // check for GTIN 
            case "02":
                console.log("Gtin found");
                $("#GTIN").val(parsed_data.parsedCodeItems[i].data);
            break;

            
            // Best Before Date (YYMMDD)
            case "15":
                console.log("Best Before Date found");
                $("#best_before").val(parsed_data.parsedCodeItems[i].data);
            break;

            // Batch or Lot Number
            case "10":
                console.log("Best Before Date found");
                $("#batch_lot").val(fix_colis_batch(parsed_data.parsedCodeItems[i].data).lot);
                $("#colis").val(fix_colis_batch(parsed_data.parsedCodeItems[i].data).colis);
                console.log(fix_colis_batch(parsed_data.parsedCodeItems[i].data))
            break;

            // check for Colis 
            case "37":
            console.log("colis found");
            $("#colis").val(parsed_data.parsedCodeItems[i].data);
            break; 
     }
  }

}
 
 
 

 
});


function fix_colis_batch(input){
  
    let data = {}

    let split_barcode = input.split("37")
    let colis =  split_barcode[split_barcode.length - 1];

    data.colis = parseInt(colis,10)
    data.lot = input.substring(0, input.indexOf("37" + colis))


    return data;
}


$(".form-check").on("click",function(e){

  let p_id =  $(e.target).attr("for");


  $("#" + p_id).toggleClass("done")
    
})