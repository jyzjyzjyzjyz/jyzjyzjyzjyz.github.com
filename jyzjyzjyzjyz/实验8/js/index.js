var flag=1;
$("body").ready(function(){
   init();
});

$("body").on('click','.m-w_1',function(){
   $(".m-work_1").show();
   $(".m-work_2").hide();
   $(".m-work_3").hide();
});
$("body").on('click','.m-w_2',function(){
   $(".m-work_1").hide();
   $(".m-work_2").show();
   $(".m-work_3").hide();
});
$("body").on('click','.m-w_3',function(){
   $(".m-work_1").hide();
   $(".m-work_2").hide();
   $(".m-work_3").show();
});
$("body").on('click','#m-photo_s',function(){
   if(flag==1){
       var s = $(this).css("background-image");
      var obs ='blur('+10+'px)';
   }
   else {
      obs ='blur('+0;
   }
   $(".m-photo_1").css("background-image",s).toggle(200,function(){
      flag=1-flag;
   });
   $('.m-photo').css("filter",obs);
   $('.m-photo_1').css("border-color","#336699");
});
$("body").on('click','.m-photo_1',function(){
     var s = $(this).css("background-image");
      if(flag==0){
        obs ='blur('+0;  
    }
   
   $(".m-photo_1").css("background-image",s).toggle(200,function(){
      flag=1-flag;
   });
   $('.m-photo').css("filter",obs);
   $('.m-photo_1').css("border-color","#336699");
})
$("body").on('click','.m-2_1',function(){
   $(".m-2_1").css("background",'grey');
   $(".m-2_2").css("background",'white');
   $(".m-2_3").css("background",'white');
   $(".box_2").hide();
   $(".box_3").hide();
   $(".box_1").show();
});
$("body").on('click','.m-2_2',function(){
    $(".m-2_2").css("background",'grey');
   $(".m-2_1").css("background",'white');
   $(".m-2_3").css("background",'white');
   $(".box_1").hide();
   $(".box_2").show();
   $(".box_3").hide();
});
$("body").on('click','.m-2_3',function(){
   $(".m-2_3").css("background",'grey');
   $(".m-2_2").css("background",'white');
   $(".m-2_1").css("background",'white');
   $(".box_1").hide();
   $(".box_2").hide();
   $(".box_3").show();
});
$("body").on('click','.m-add',function(){
   var element = "<div class=m-3_box><div class=m-num></div><button class=m-del>Delete</button></div>"
   $(".m-3_body").append(element);
   init();
});
$("body").on('click','.m-del',function(){
   $(this).parent().remove();
   init();
});

function init(){
   var n = $(".m-3_body").children("div").length;
   for(var i=0;i<n;i++){
      $(".m-3_body .m-num").eq(i).text(i+1);
   }
}