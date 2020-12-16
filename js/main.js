/// 메인 페이지 JS - main.js ////


$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");

    /*gnb*/
    $(".gnb li").mouseover(function () {
        $(this).css({
                transform: "translateX(-1vw)"
            })
            .siblings().find("a").css({
                opacity: ".5"
            });
    });
    $(".gnb li").mouseout(function () {
        $(this).css({
                transform: "translateX(0)"
            })
            .siblings().find("a").css({
                opacity: "1"
            });
    });



    /*메뉴 나타나게*/
    $(".menubtn, .menubtn2").click(function () {
        $(".menu_box").stop().slideDown(400);
    });

    $(".cbtn").click(function () {
        $(".menu_box").stop().slideUp(400);
    });


    /*포폴 오버시 하위메뉴 나타나게*/
    $(".menu_portfolio a").mouseover(function () {
        $(".submenu").stop().slideDown(400);
    });
    $(".menu_portfolio").mouseout(function () {
        $(".submenu").stop().slideUp(400);
    });

    
    /*next버튼 누르면 오른쪽 페이지 나타나게*/
    $(".nextBtn").click(function(){
        $(".book_left").hide();
        $(".book_right").show().css({
            display:"flex"
        });
    });

    
    /*prev버튼 누르면 왼쪽 페이지 나타나게*/
    $(".prevBtn").click(function(){
        $(".book_left").show();
        $(".book_right").hide();
    });

    
    /*contact - resume, contact 마우스오버시 !*/
    $(".resume.contactBox").mouseover(function(){
        $(this).find("a").hide().next().hide();
    });
    $(".resume.contactBox").mouseout(function(){
        $(this).find("a").show().next().show();
    });
    
    
    $(".email.contactBox").mouseover(function(){
        $(this).find("a").hide().next().hide();
    });
    $(".email.contactBox").mouseout(function(){
        $(this).find("a").show().next().show();
    });
    

}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
