$(document).ready(function () {
    $("#zeroHide").click(function () {
        $(this).hide();
    });

    $("#zeroShow").click(function () {
        $("#zeroHide").show();
        $("#zeroHover").show();
        $("#dblclick1").show();
        $("#mouseenter1").show();
        $("#mouseleave1").show();
        $("mouseup1").show();
        $("mousedown1").show();
        $("#blur1").show();
    });
    $("#zeroHover").hover(function () {
        $(this).hide();
    })
    $("#dblclick1").dblclick(function () {
        $(this).hide();
    })
    $("#mouseenter1").mouseenter(function () {
        $(this).hide();
    })
    $("#mouseleave1").mouseleave(function () {
        $(this).hide();
    })
    $("#mouseup1").mouseup(function () {
        $(this).hide();
    })
    $("#mousedown1").mousedown(function () {
        $(this).hide();
    })
    $("#bulr1").blur(function () {
        $(this).hide();
    })
    $("#hideB").click(function () {
        $("#hideP").hide(2000);
    })
    $("#toggleB").click(function () {
        $("#toggleP").toggle();
    })
    $("#fadeinB").click(function () {
        $("#fadeindiv1").fadeIn();
        $("#fadeindiv2").fadeIn("slow");
        $("#fadeindiv3").fadeIn(3000);
    })
    $("#fadeoutB").click(function () {
        $("#fadeoutdiv1").fadeOut();
        $("#fadeoutdiv2").fadeOut("slow");
        $("#fadeoutdiv3").fadeOut(3000);
    });

    $("#fadetoggleB").click(function () {
        $("#fadetogglediv1").fadeToggle();
        $("#fadetogglediv2").fadeToggle("slow");
        $("#fadetogglediv3").fadeToggle(3000);
    })

    $("#flip1").click(function () {
        $("#panel1").slideToggle("8000");
    })

    $("#stopB").click(function () {
        $("#panel1").stop();
    })
    $("#animateB").click(function () {
        $("#animatediv").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    })
    $("#callbackB").click(function () {
        $("#callbackP").hide("slow", function () {
            alert("this is now hidden");
        });
    })
    $("#callbackB1").click(function () {
        $("#callbackP1").hide(1000);
        alert("para is now hidden");
    });

    $("#chainB1").click(function () {
        $("#chainP1").css("color", "red").slideUp(2000).slideDown(2000);
    });

    $("#animatechainB").click(function () {
        $("#animatechaindiv").animate({ height: '300px', opacity: '0.4' }, "slow")
            .animate({ width: '300px', opacity: '0.8' }, "slow")
            .animate({ height: '100px', opacity: '0.4' }, "slow")
            .animate({ width: '300px', opacity: '0.8' }, "slow")
            .hide("slow")
            .show("slow");
    });
    // example of Jquery HTML for set and get untill line 135
    $("#getbtn1").click(function () {
        alert("Text: " + $("#getP").text());
    });

    $("#getbtn2").click(function () {
        alert("HTML: " + $("#getP").html());
    });

    $("#getbtnvalue").click(function () {
        alert("Value : " + $("#getvalueP").val());
    });

    $("#getbtnattr").click(function () {
        alert($("#w3s").attr("href"));
    });

    $("#setbtn1").click(function () {
        $("#settext").text("Hello world!!");
    });
    $("#setbtn2").click(function () {
        $("#setHTML").html("<b>Hello world!!</b>");
    });
    $("#setbtn3").click(function () {
        $("#setvalue").val("Dolly Duck");
    });

    $("#changebtn").click(function () {
        $("#katespade").attr({
            "href": "https://www.katespade.com/jquery",
            "title": "Expensive !"
        });
    });

    $("#callbackbtn").click(function () {
        $("#katespadegirl").attr("href", function (i, origValue) {
            return origValue + "/jquery/";
        });
    });

    $("#btnapnd1").click(function () {
        $(".apndP").append("<b>appended text</b>");
    });
    $("#btnapnd2").click(function () {
        $("#apndol").append("<li>appended list</li>");
    });

    $("#btnprepend1").click(function () {
        $(".prependP").prepend("<b>prepend text</b>");
    });

    $("#btnprepend2").click(function () {
        $("#prependol").prepend("<li>prepended list</li>");
    });

    $("#btnimgbefore").click(function () {
        $("#imgkatespade").before("<b>before</b>");

    });
    $("#btnimgafter").click(function () {
        $("#imgkatespade").after("<i>after</i>")
    });

    $("#rmvbtn").click(function () {
        $("#rmvdiv").remove();
    });

    $("#emptybtn").click(function () {
        $("#emptydiv").empty();
    });

    $("#rmvclsdemobtn").click(function () {
        $("p").remove(".rmvcls , .rmvdemo");
    });

    $("#btnadd").click(function () {
        $(".headadd1, .paraadd ").addClass("blue");
        $(".divadd").addClass("important blue");
    });

    $("#btnredrmv").click(function () {
        $(".headredrmv, .pararedrmv").removeClass("red").addClass("green");
    });

    $("#btntoggleyellow").click(function () {
        $(".headtoggleyellow, .paratoggleyellow").toggleClass("yellow");
        alert($(".headtoggleyellow,.paratoggleyellow").hasClass("yellow"));
    });

    $("#btngetcssmethod").click(function () {
        alert("Background color = " + $(".paragetcssmethod").css("background-color"));
    });

    $("#btnsetcssmethod").click(function () {
        $(".parasetcssmethod").css({
            "background-color": "yellow",
            "font-size": "200%"
        });
    });
    $("#btnheightwidth").click(function () {
        var txt = "";
        txt += "Width of div:" + $("#divheightwidth").width() + "<br />";
        txt += "Height of div:" + $("#divheightwidth").height() + "<br />";
        txt += "Inner width of div: " + $("#divheightwidth").innerWidth() + "<br />"
        txt += "Inner height of div " + $("#divheightwidth").innerHeight();
        $("#divheightwidth").html(txt);
    });
    $("#btnouterheightwidth").click(function () {
        var txt = "";
        txt += "Width of div:" + $("#divouterheightwidth").width() + "<br/>";
        txt += "height of div:" + $("#divouterheightwidth").height() + "<br />";
        txt += "Outer width of div:" + $("#divouterheightwidth").outerWidth() + "<br />"
        txt += "outer height of div:" + $("#divouterheightwidth").outerHeight();
        $("#divouterheightwidth").html(txt);
    });

    $("#btnmargin").click(function () {
        var txt = "";
        txt += "width of div:" + $("#divmargin").width() + "<br/>";
        txt += "height of div:" + $("#divmargin").height() + "<br/>";
        txt += "outer width of div (margin included):  " + $("#divmargin").outerWidth(true) + "<br/>";
        txt += "outer height of div (margin included): " + $("#divmargin").outerHeight(true);
        $("#divmargin").html(txt);
    });
    $("#btndimension").click(function () {
        var txt = "";
        txt += "Document width/height: " + $(document).width();
        txt += "x" + $(document).height() + "\n";
        txt += "Window width/height: " + $(window).width();
        txt += "x" + $(window).height();
        alert(txt);
    });

    $("#btnresize").click(function () {
        $("#divresize").width(500).height(500);
    });

    $(".spanparent").parent().css({
        "color": "red",
        "border": "2px solid red"
    });
    $(".spanparents").parentsUntil("ul").css({
        "color": "red",
        "border": "2px solid red"
    });

    $(".divchild").children("p.firstchildP").css({
        "color": "red",
        "border": "2px solid red"
    });

    $(".divfindchild").find("*").css({
        "color": "red",
        "border": "2px solid red"
    });

    $(".divfirstfilter").last().css("background-color", "yellow");

    $(".Peqfilter").eq(1).css("background-color", "yellow");

    $("P").filter(".Pfilter").css("background-color", "yellow");

    $("#siblingsh2").siblings("#siblingsh3").css({
        "color": "red",
        "border": "2px solid red"
    });

    $("#siblingsnexth2").nextUntil("#siblingsh5").css({
        "color": "red",
        "border": "2px solid red"
    });

    $("#siblingsprevh5").prev().css({
        "color": "red",
        "border": "2px solid red"
    })

    // AJAX start here//
    $("#fileloadbuttonnote").click(function () {
        $("#noteloaddiv").load("Demo_test.txt");
    });

    $("#fileloadbutton").click(function () {
        $("#fileloaddiv").load("https://getcontent.free.beeceptor.com", function (statusTxt, responceTxt, xhr) {
            if (statusTxt == "success")
                alert("external content loded successfully");
            if (statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusTxt);
        });
    });


    $.get("https://getcontent.free.beeceptor.com/getdata", function (data, status) {
        alert("Data : " + data.name + "\nStatus: " + status);

    });

    $.post("https://getcontent.free.beeceptor.com/getcontent", "", function (data, status) {
        alert("Data: " + data.status + "\nStatus: " + status);
    });

    $("#Azaxbutton").click(function () {
        var remarks = prompt("Are you sure, you want to approve?\n\nPlease enter remarks:", "");
        if (remarks != null && remarks != "") {
            $.ajax({
                type: "POST",
                url: "https://getcontent.free.beeceptor.com/getcontent",
                data: {},
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (r) {
                    if (r) {
                        alert("status: " + r.status);
                    } else {
                        alert("Some issue occured, please try again.");
                    }
                }
            });
        }
    });
    // insted of this line you can keep  $("#myInput").keyup(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


    var array = [
        {
            FirstName: "Garvit",
            id: 8,
        },
        {
            FirstName: "Grishma",
            id: 5,
        },
        {
            FirstName: "Gahan",
            id: 8,

        }
    ];
    var filter = array.filter(function (item) {
        return item.id == 8;
    });
    filter.forEach(function (item) {
        alert(item.FirstName);
    });





    appendText();
    afterText();

});

function appendText() {
    var text1 = "<p style='color :red'>Text.</p>";
    var text2 = $("<p></p>").text("Text.");
    var text3 = document.createElement("input");

    text3.value = "Text."
    $("body").append(text1, text2, text3);
}

function afterText() {
    var text1 = "<b>I</b>";
    var text2 = $("<i><i>").text("love");
    var text3 = document.createElement("b");
    text3.innerHTML = "jQuery!!";
    $("img").after(text1, text2, text3);
}

// AJAX start here//



