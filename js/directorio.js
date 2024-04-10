
$(".central-btn button").click(function (e) { 
    e.preventDefault();
    $(".central-btn button").removeClass("activo");
    $(this).addClass("activo");
});