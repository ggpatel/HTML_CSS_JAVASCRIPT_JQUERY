$(document).ready(function () {
    var tableTr = $(".tableTr").html();
    var html = "";
    for (var i = 8; i <= 20; i++) {
        html += "<tr>" + tableTr.replace("[Number]", i).replace("Description", "Description" + i).replace("Quntity", "Quntity" + i).replace("Price", "Price" + i).replace("Amt1", "Amt1" + i).replace("Amt2", "Amt2" + i).replace("spanDescription", "spanDescription" + i).replace("spanQuntity", "spanQuntity" + i).replace("spanPrice", "spanPrice" + i).replace("spanAmt1", "spanAmt1" + i).replace("spanAmt2", "spanAmt2" + i);
        + "</tr>"
    }
    $(".tableTr").parent().append(html);
    $(".tableTr").remove();

});

function onClick() {
    var Name = $("#Name").val();
    $(".name").html(Name);
    $("#Name").remove();

    var Invoice = $("#Invoice").val();
    $(".invoice").html(Invoice);
    $("#Invoice").remove();

    var Phone = $("#Phone").val();
    $(".phone").html(Phone);
    $("#Phone").remove();

    var Email = $("#Email").val();
    $(".email").html(Email);
    $("#Email").remove();

    var Date = $("#Date").val();
    $(".date").html(Date);
    $("#Date").remove();

    var Soldby = $("#Soldby").val();
    $(".soldBy").html(Soldby);
    $("#Soldby").remove();

    var DueDate = $("#DueDate").val();
    $(".dueDate").html(DueDate);
    $("#DueDate").remove();


    for (var i = 8; i <= 20; i++) {
        var Description = $("#Description" + i).val();
        $(".spanDescription" + i).html(Description);
        $("#Description" + i).remove();

        var Quntity = $("#Quntity" + i).val();
        $(".spanQuntity" + i).html(Quntity);
        $("#Quntity" + i).remove();

        var Price = $("#Price" + i).val();
        $(".spanPrice" + i).html(Price);
        $("#Price" + i).remove();

        var Amt1 = $("#Amt1" + i).val();
        $(".spanAmt1" + i).html(Amt1);
        $("#Amt1" + i).remove();


        var Amt2 = $("#Amt2" + i).val();
        $(".spanAmt2" + i).html(Amt2);
        $("#Amt2" + i).remove();

    }
    window.print();


}