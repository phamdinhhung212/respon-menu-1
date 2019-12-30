$(document).ready(function() {
    $("#icon-menu").click(function() {
        $("#menu-respon").stop().slideToggle(500);
    });
    $(window).resize(function() {
        var x = $(window).width();
        console.log(x);
        $("#windown-size").text(x);
        if( x >= 1024 ) {
            $("#menu-respon").css('display','none');
        }
    });
});
$(document).ready(function() {
    $("#btn-search").click(function() {
        $("#form-search input").stop().fadeToggle(500);
        return false;
    });
});