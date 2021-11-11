$(function(){
    var headerHeight = 66;
    $('a[href^="#"]').click(function(){
        var href = $(this).attr("href");
        var target = $(href);
        var position = target.offset().top - headerHeight;
        $('body,html').animate({scrollTop: position}, 250, 'swing');
    });
    
    $(".navi02 li a").on('click',function(event){
        $("#toggle").prop("checked",false);
    });
});
