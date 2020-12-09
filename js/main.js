/// 메인 페이지 JS - main.js ////


$(function(){ /////// jQB ///////////////////////
    console.log("로딩완료!");
    
    /*gnb*/
    $(".gnb li").mouseover(function(){
       $(this).css({
           transform: "translateX(-1vw)"
       })
           .siblings().find("a").css({
           opacity: ".5"
       });
    });
    $(".gnb li").mouseout(function(){
       $(this).css({
           transform: "translateX(0)"
       })
           .siblings().find("a").css({
           opacity: "1"
       });
    });
    
    
    
    /*메뉴 나타나게*/
    $(".menubtn").click(function(){
       $(".menu_box").stop().slideDown(400);
    });
    
    $(".cbtn").click(function(){
        $(".menu_box").stop().slideUp(400);
    });
    
    
    /*포폴 오버시 하위메뉴 나타나게*/
    $(".menu_portfolio a").mouseover(function(){
        $(".submenu").stop().slideDown(400); 
    });
    $(".menu_portfolio").mouseout(function(){
        $(".submenu").stop().slideUp(400); 
    });
    
    
});////////// jQB ///////////////////////////////
/////////////////////////////////////////////////