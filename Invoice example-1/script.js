$(document).ready(function () {
    var tableTr = $(".tableTr").html();
    var html = "";
    for (var i = 8; i <= 20; i++) {
        html += "<tr>" + tableTr.replace("[Number]", i) + "</tr>"
    }
    $(".tableTr").parent().append(html);
    $(".tableTr").remove();
});