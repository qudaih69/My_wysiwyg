$(function () {

    var URL;
    var mouseX = 0;
    var mouseY = 0;
    $("#editeur").hide();
    $(".code").click(function () {
        if ($("#editeur").is(":hidden")) {
            $(".code").css('color', 'red');
            $("#textarea").hide();
            $("#editeur").show();
            $("#editeur").html($("#textarea").val());
        } else {
            $(".code").css('color', 'black');
            $("#textarea").show();
            $("#editeur").hide();
        }
    });

    $("#textarea").mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    $("#textarea").mousedown(function () {
        menuFadeOut();
    });

    $("#textarea").select(function () {
        $("#menu").css("top", mouseY - 200).css("left", mouseX - 300).fadeIn("1000");
    });

    $("#bold").click(function () {
        wrapText("<b>", "</b>");
        menuFadeOut();
    });

    $("#italic").click(function () {
        wrapText("<i>", "</i>");
        menuFadeOut();
    });

    $("#underline").click(function () {
        wrapText("<u>", "</u>");
        menuFadeOut();
    });

    $("#link").click(function () {
        getURL();
        if (URL.match(/^http:/)) {
            wrapText("<a href='" + URL + "' target='_blank'>", "</a>");
            menuFadeOut();
        } else {
            wrapText("<a href='http://" + URL + "' target='_blank'>", "</a>");
            menuFadeOut();
        }
    });

    $("#del").click(function () {
        wrapText("<del>", "</del>");
        menuFadeOut();
    });

    $("#right").click(function () {
        $("#editeur").css('text-align','right');
        wrapText("<div align='right'>", "</div>");
        menuFadeOut();
    });

    $("#center").click(function () {
        $("#editeur").css('text-align','center');
        wrapText("<div align='center'>", "</div>");
        menuFadeOut();
    });

    $("#left").click(function () {
        $("#editeur").css('text-align','left');
        wrapText("<div align='left'>", "</div>");
        menuFadeOut();
    });

    $("#justify").click(function () {
        $("#editeur").css('text-align','justify');
        wrapText("<div align='justify'>", "</div>");
        menuFadeOut();
    });

    function wrapText(openTAG, closeTAG)
    {
        var desc = $("#textarea").val();
        var selStart = $("#textarea")[0].selectionStart;
        var selEnd = $("#textarea")[0].selectionEnd;
        var text = desc.substring(selStart, selEnd);
        var before = desc.substring(desc, selStart);
        var after = desc.substring(selEnd, desc.length);
        $("#textarea").val(before + openTAG + text + closeTAG + after);
        $("#editeur").html($("#textarea").val());
    }

    function getURL()
    {
        URL = prompt("Entrez un URL valide :");
        if (URL === "") {
            getURL();
        }
    }

    function menuFadeOut()
    {
        $("#menu").fadeOut(1000);
    }

    $(".history").click(function (event) {
        event.preventDefault();
        history.back(1);
    });
});