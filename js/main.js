/**
 * Created by Yaroslav on 23.07.2017.
 */
$(document).ready(function(){
    $('.one-tab').click(function(){
       var showTab = $(this).attr("data-show");
       $(showTab).siblings().hide();
       $(showTab).fadeIn();
       $(this).siblings().removeClass('active');
       $(this).addClass('active');
    });
});
