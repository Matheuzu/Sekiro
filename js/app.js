$('#menuIcon').on('click', function(){
    $('#menu ul').slideToggle(800);
});

AOS.init({
    duration: 1500,
});

$("#hist").click(function() {
    $('html,body').animate({
        scrollTop: $("#historia").offset().top},
        'slow');
});
$("#hist").click(function() {
    $('html,body').animate({
        scrollTop: $("#historia").offset().top},
        'slow');
});
$("#ini").click(function() {
    $('html,body').animate({
        scrollTop: $("#inimigos").offset().top},
        2500);
});
$(".comprar").click(function() {
    $('html,body').animate({
        scrollTop: $("#comprar").offset().top},
        2500);
});

$(".ajustePlay").click(function() {
    var StateName = $(this).attr("state");
    console.log(StateName);
    $('#videoIni').slideToggle(800);
    $('#videoIni iframe').attr("src", StateName);
});
$(".close").click(function() {
    $('#videoIni').slideToggle(800);
    $('#videoIni').pause()
});