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
    $(".nextBtn").click(function () {
        $(".book_left").hide();
        $(".book_right").show().css({
            display: "flex"
        });
    });


    /*prev버튼 누르면 왼쪽 페이지 나타나게*/
    $(".prevBtn").click(function () {
        $(".book_left").show();
        $(".book_right").hide();
    });



    /*contact - resume, contact 마우스오버시 !*/
    $(".resume.contactBox").mouseover(function () {
        $(this).find("a").hide().next().hide();
    });
    $(".resume.contactBox").mouseout(function () {
        $(this).find("a").show().next().show();
    });


    $(".email.contactBox").mouseover(function () {
        $(this).find("a").hide().next().hide();
    });
    $(".email.contactBox").mouseout(function () {
        $(this).find("a").show().next().show();
    });



    /*pofol - view버튼 세팅*/
    $(".viewBtn.media").mouseover(function () {
        $(this).css({
            border: "1px solid #4a473c"
        });
    });
    $(".viewBtn.media").mouseout(function () {
        $(this).css({
            border: "1px solid #fff"
        });
    });




    /*인트로 마우스 커서 ****************************************/
    // 포인터가 움직일 대상 : .book
    $(".book.intro").mousemove(function (e) { // e-이벤트전달
        var posx = e.pageX + 5; //하단클릭을 위해 조금 벗어나게 +5 해줌!! 
        var posy = e.pageY;
        //console.log("x축:"+posx+"\ny축:"+posy);

        // 마우스 포인터 위치에 따라 이미지커서 위치값 변경하기
        // 대상: #myc
        $("#myc").css({
            top: posy + "px",
            left: posx + "px"
        }); ////// css /////////

    }); //////// mousemove ////////////


    // 이벤트: mouseenter -> 마우스가 영역안으로 들어갈 때만 처리하면 됨
    $(".book.intro").mouseenter(function () {

        // console.log("순번:"+idx);

        //// 커서이미지 변경 !!!
        $("#myc").show();

    }); /////// mouseenter /////////////

    $(".book.intro").mouseleave(function () {

        // console.log("순번:"+idx);

        //// 커서이미지 변경 !!!
        $("#myc").hide();

    }); /////// mouseenter /////////////


    /*인트로 누르면 다음페이지로 이동*/
    $(".book.intro").click(function () {
        location.href = "page_1.html"
    });



    /*공동 프로젝트 ***************************************/
    $(".proj").mouseenter(function () {
        $(this).css({
                backgroundColor: "#e9e5db"
            });
        $(this).addClass("on").siblings().removeClass("on");      
    });
    
    $(".proj").mouseleave(function () {
        $(this).css({
                backgroundColor: "transparent"
            });
        $(this).removeClass("on");      
    });



}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
