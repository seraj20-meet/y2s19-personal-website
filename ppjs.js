$(document).ready(function() {
    $("#dialog").dialog({

        autoOpen: true,
        buttons: {

            Yes: function() {

                alert("Yes!");
                $(this).dialog("close");
                $(".smile").css("opacity", 1);
            },
            No: function() {

                alert("No!");
                $(this).dialog("close");
                $(".sad").css("opacity", 1);


            },
            Maybe: function() {

                alert("Maybe!");
                $(this).dialog("close");
                 $(".MEH").css("opacity", 1);
            }

        },
        width: "400px"
    });
});