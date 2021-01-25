'use strict'
$("#lenght").mask("99.9");
$("#girth").mask("99.9");
$("#lenght").attr({
    "max": 26.00,
    "min": 5.00,
});

$("#girth").attr({
    "max": 18.00,
    "min": 9.00,
});

$('#form__button').on("click", function(event) {
    event.preventDefault();
    let length = document.getElementById('lenght').value;
    let girth = document.getElementById('girth').value;


    $.ajax({
        url: '../../calc.php',
        type: 'POST',
        cashe: false,
        data: { 'length': length, 'girth': girth },
        dataType: 'html',
        beforeSend: function() {
            $("#page_1").css({ 'display': 'none', 'z-index': '9' });
            $("#preloader").css({ 'opacity': '1', 'z-index': '9' });
        },
        success: function(data) {
            function preloader() {
                $("#preloader").css({ 'opacity': '0', 'z-index': '-2' })
            }
            setTimeout(preloader, 1000);
            $("#page_2").css({ 'display': 'block', 'z-index': '9' });
            console.log(data);
        },
    });
})

$('#anew').on("click", function(event) {
    event.preventDefault();
    $("#page_2").css({ 'display': 'none', 'z-index': '9' });
    $("#preloader").css({ 'opacity': '1', 'z-index': '9' });

    function preloader() {
        $("#preloader").css({ 'opacity': '0', 'z-index': '-2' })
    }
    setTimeout(preloader, 1000);
    $("#page_1").css({ 'display': 'block', 'z-index': '9' });

})