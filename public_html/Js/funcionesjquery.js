$(document).ready(function () {
    $(".accordion").accordion();
});

$(document).ready(function () {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
});

$(document).ready(function () {
    $(".imput").checkboxradio();
});

$(document).ready(function () {
        $( "#datepicker" ).datepicker();
});

$(document).ready(function () {
        $( "#dialog" ).dialog();
});

$(document).ready(function () {
    $("#progressbar").progressbar({
        value: 37
    });
});

 $(document).ready(function () {
     $("#speed").selectmenu();
      $("#files").selectmenu();
        $("#number")
        .selectmenu()
        .selectmenu("menuWidget")
        .addClass("overflow");
        $("#salutation").selectmenu();
});

 $(document).ready(function () {
        $( "#tabs" ).tabs();
});

$(document).ready(function () {
        $( document ).tooltip();
});


