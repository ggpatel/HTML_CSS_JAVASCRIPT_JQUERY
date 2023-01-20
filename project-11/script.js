$(document).ready(function () {
    $("#zeroHide").click(function () {
        $(this).hide();
    });

    $("#zeroShow").click(function () {
        $("#zeroHide").show();
        $("#zeroHover").show();
        $("#dblclick").show();
        $("#mouseenter").show();
        $("#mouseleave").show();
        $("#mouseup").show();
        $("#mousedown").show();
        $("blur").show();
    });

    $("#zeroHover").hover(function () {
        $(this).hide();
    });

    $("#dblclick").dblclick(function () {
        $(this).hide();
    });

    $("#mouseenter").mouseenter(function () {
        $(this).hide();
    });

    $("#mouseleave").mouseleave(function () {
        $(this).hide();
    });

    $("#mouseup").mouseup(function () {
        $(this).hide();
    });

    $("#mousedown").mousedown(function () {
        $(this).hide();
    });

    $("#blur").blur(function () {
        $(this).hide();
    });

    $(".focusid").focus(function () {
        $(this).css("background-color", "yellow");
    });

    $(".focusid").blur(function () {
        $(this).css("background-color", "green");
    });

    $("#leaveclickenter").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }
    });

    $("#hide1secb").click(function () {
        $("#hide1secp").hide(1000);
    });

    $("#toggleb").click(function () {
        $("#togglep").toggle();
    });

    $("#fadeinB").click(function () {
        $("#fadeindiv1").fadeIn();
        $("#fadeindiv2").fadeIn("slow");
        $("#fadeindiv3").fadeIn(3000);
    });

    $("#fadeoutB").click(function () {
        $("#fadeoutdiv1").fadeOut();
        $("#fadeoutdiv2").fadeOut("slow");
        $("#fadeoutdiv3").fadeOut(3000);
    });
    $("#fadetoggleB").click(function () {
        $("#fadetoggle1").fadeToggle();
        $("#fadetoggle2").fadeToggle("slow");
        $("#fadetoggle3").fadeToggle(3000)
    });

    $("#flipdown").click(function () {
        $("#paneldown").slideDown("slow");
    })
    $("#animateB").click(function () {
        $("#divanimate").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'

        });
    });

    $("#toggleanimateB").click(function () {
        $("#divtoggleanimate").animate({
            height: 'toggle'
        });
    });

    $("#opacityB").click(function () {
        var div = $("#opacitydiv");
        div.animate({ height: '300px', opacity: '0.4' }, "slow");
        div.animate({ width: '300px', opacity: '0.8' }, "slow");
        div.animate({ height: '100px', opacity: '0.4' }, "slow");
        div.animate({ width: '100px', opacity: '0.8' }, "slow");
    })
});
