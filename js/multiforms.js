$(function(){
  var current_fs, previous_fs, next_fs;
  //Next is pressed
  $('button.next').click(function(e){
    e.preventDefault();
    current_fs = $(this).closest('fieldset');
    next_fs = current_fs.next();
    $('.progressbar li').eq($('fieldset').index(next_fs)).addClass('active');
    console.log(next_fs);
    next_fs.show();
  });
  //Previous is pressed
  $('button.previous').click(function(e){
    e.preventDefault();
    current_fs = $(this).closest('fieldset');
    previous_fs = current_fs.prev();
    $('.progressbar li').eq($('fieldset').index(current_fs)).removeClass('active');
    current_fs.hide();
    previous_fs.show();
  });
});