var rowsElements = document.getElementById("rows");

function addRow(){
    rowsElements.innerHTML = rowsElements.innerHTML + 

    "<div class='row align-items-start'>" +
        "<div class='col-4' style='padding: 0 !important; padding-right: 16px !important;'><br>" +
            "<input type='number' class='form-control coluna-A' placeholder='-'>" +
        "</div>" +
        "<div class='col-4' style='padding: 0 !important; padding-right: 16px !important;'><br>" +
            "<input type='number' class='form-control coluna-B' placeholder='-'>" +
        "</div>"+
    "</div>";

    nRows++;
}