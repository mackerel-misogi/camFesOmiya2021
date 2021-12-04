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
//アコーディオンをクリックした時の動作
$(document).on('click','.accordion_bar', function() {
  var findElm = $(this).prev(".box");
  $(findElm).slideToggle();
    
  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $(this).addClass('close');
  }
});

$(document).on('click','.answer_bar', function() {
  var findElm = $(this).prev(".gallery_work_image_answer");
  $(findElm).slideToggle();
    
  if($(this).hasClass('close')){
    $(this).removeClass('close');
  }else{
    $(this).addClass('close');
  }
});
