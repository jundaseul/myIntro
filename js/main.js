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
    $(".book").mousemove(function (e) { // e-이벤트전달
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
    $(".book").mouseenter(function () {

        // console.log("순번:"+idx);

        //// 커서이미지 변경 !!!
        $("#myc").show();

    }); /////// mouseenter /////////////

    $(".book").mouseleave(function () {

        // console.log("순번:"+idx);

        //// 커서이미지 변경 !!!
        $("#myc").hide();

    }); /////// mouseenter /////////////


    /*인트로 누르면 다음페이지로 이동*/
    $(".book").click(function () {
        location.href = "page_1.html"
    });



    /*타이핑 효과 **********************************/
    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;

    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
    typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
    if (typingBool == false) { // 타이핑이 진행되지 않았다면 
        typingBool = true;
        var tyInt = setInterval(typing, 100); // 반복동작 
    }

    function typing() {
        $(".typing ul li").removeClass("on");
        $(".typing ul li").eq(liIndex).addClass("on");
        if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
            $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++;
        } else {
            if (liIndex < liLength - 1) {
                //다음문장으로  가기위해 인덱스를 1증가
                liIndex++;
                //다음문장을 타이핑하기위한 셋팅
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

                //다음문장 타이핑전 1초 쉰다
                clearInterval(tyInt);
                //타이핑종료

                setTimeout(function () {
                    //1초후에 다시 타이핑 반복 시작
                    tyInt = setInterval(typing, 100);
                }, 1000);
            } else if (liIndex == liLength - 1) {

                //마지막 문장까지 써지면 반복종료
                clearInterval(tyInt);
            }
        }
    }





}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
