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

    $(".center-but, .close").click(function(){
        if($(".bot-cont").hasClass("open")){
            $(".bot-cont").removeClass("open");
        } else {
            $(".bot-cont").addClass("open");
        }
    });

    $(".menu-button").click(function(){
       if($("#app").hasClass("open")){
           $("#app").removeClass("open");
       } else {
           $("#app").addClass("open");
       }
    });

    $("#menu").on("swipeleft",function(){
        $("#app").removeClass("open");
    });
});
