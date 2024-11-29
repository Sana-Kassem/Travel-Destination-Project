$(document).ready(function () {
    $("section").children("h2").nextAll().hide();
    $("section").click(function () {
        $(this).children("h2").nextAll().slideToggle();
    });
});