$(document).ready(function () {
    var tableTr = $(".tableTr").html();
    var html = "";
    for (var i = 8; i <= 20; i++) {
        html += "<tr>" + tableTr.replace("[Number]", i) + "</tr>"
    }
    $(".tableTr").parent().append(html);
    $(".tableTr").remove();
});

function onClick() {
    var name = $("#name").val();
    $(".name").html(name);
    $("#name").remove();
    window.print();

    var invoice = $("#invoice").val();
    $(".invoice").html(invoice);
    $("#invoice").remove();
    window.print();

    var Phone = $("#Phone").val();
    $(".Phone").html(Phone);
    $("#Phone").remove();
    window.print();

    var Email = $("#Email").val();
    $(".Email").html(Email);
    $(".Email").remove();
    window.print();

    var Date = $("#Date").val();
    $("Date").html(Date);
    $(".Date").remove();
    window.print();

    var Soldby = $("#Sold by").val();
    $(".Sold by").html(Soldby);
    $("#Sold by").remove();
    window.print();

    var DueDate = $("#Due Date").val();
    $(".Due Date").html(DueDate);
    $("#Due Date").remove();
    window.print();




}