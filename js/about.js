$(function () { /////// jQB ///////////////////////

    console.log("로딩완료!");

    /// 전역변수 ///////
    var setPers1 = 90;
    var setPers2 = 80;
    var setPers3 = 65;
    var setPers4 = 70;
    var setPers5 = 85;
    var setTime = 3000;


    $(function () { // jQB /////////////////

        // svg 애니메이션 셋팅
        var newPers1 = 300 * ((100 - setPers1) / 100);
        // 300은 원래 전체 %수
        // 이것의 70%라면 나머지 30%가 빠진 숫치로 넣으면됨!
        //console.log("계산:"+newPers);
        $(".btn1 .c1").delay(1000).animate({
            strokeDashoffset: newPers1 + "%"
        }, setTime); //// animate //////

        // 1초후 퍼센트증가 함수 호출하기!
        setTimeout(function () {
            addPers(setPers1, setTime,".btn1",0);
        }, 1000); /// 타임아웃 ////
    ///////////////////////////////////////////////////
        
        // svg 애니메이션 셋팅
        var newPers2 = 300 * ((100 - setPers2) / 100);
        // 300은 원래 전체 %수
        // 이것의 70%라면 나머지 30%가 빠진 숫치로 넣으면됨!
        //console.log("계산:"+newPers);
        $(".btn2 .c1").delay(2000).animate({
            strokeDashoffset: newPers2 + "%"
        }, setTime); //// animate //////

        // 1초후 퍼센트증가 함수 호출하기!
        setTimeout(function () {
            addPers(setPers2, setTime,".btn2",1);
        }, 2000); /// 타임아웃 ////
    ///////////////////////////////////////////////////
        
        // svg 애니메이션 셋팅
        var newPers3 = 300 * ((100 - setPers3) / 100);
        // 300은 원래 전체 %수
        // 이것의 70%라면 나머지 30%가 빠진 숫치로 넣으면됨!
        //console.log("계산:"+newPers);
        $(".btn3 .c1").delay(1500).animate({
            strokeDashoffset: newPers3 + "%"
        }, setTime); //// animate //////

        // 1초후 퍼센트증가 함수 호출하기!
        setTimeout(function () {
            addPers(setPers3, setTime,".btn3",2);
        }, 1500); /// 타임아웃 ////
    ///////////////////////////////////////////////////
        
        // svg 애니메이션 셋팅
        var newPers4 = 300 * ((100 - setPers4) / 100);
        // 300은 원래 전체 %수
        // 이것의 70%라면 나머지 30%가 빠진 숫치로 넣으면됨!
        //console.log("계산:"+newPers);
        $(".btn4 .c1").delay(2500).animate({
            strokeDashoffset: newPers4 + "%"
        }, setTime); //// animate //////

        // 1초후 퍼센트증가 함수 호출하기!
        setTimeout(function () {
            addPers(setPers4, setTime,".btn4",3);
        }, 2500); /// 타임아웃 ////
    ///////////////////////////////////////////////////
        
        // svg 애니메이션 셋팅
        var newPers5 = 300 * ((100 - setPers5) / 100);
        // 300은 원래 전체 %수
        // 이것의 70%라면 나머지 30%가 빠진 숫치로 넣으면됨!
        //console.log("계산:"+newPers);
        $(".btn5 .c1").delay(1900).animate({
            strokeDashoffset: newPers5 + "%"
        }, setTime); //// animate //////

        // 1초후 퍼센트증가 함수 호출하기!
        setTimeout(function () {
            addPers(setPers5, setTime,".btn5",4);
        }, 1900); /// 타임아웃 ////
    ///////////////////////////////////////////////////

    }); ///////// jQB /////////////////////
    /////////////////////////////////////

    
    
    
    /*/////////////////////////////////////////////
        함수명:addPers
        기능: 파라미터로 넘어온 수치까지 퍼센트를 증가시킴
    */ /////////////////////////////////////////////
    var pers = [0,0,0,0,0]; // 퍼센트숫자 초기값
    function addPers(limit, duration, objnm,i) {
        // limit - 퍼센트한계값, duration - 전체시간(1/1000), objnm-오브젝트이름, i-순번
        pers[i]++; //1씩증가
        // 화면 퍼센트 출력하기
        $(objnm+" .num").text(pers[i]);

        // 자기자신을 호출함(재귀호출!)
        if (pers[i] < limit) { // limit 한계 퍼센트까지만 재귀호출
            setTimeout(function () {
                addPers(limit, duration, objnm,i);
            }, duration / limit); /// 타임아웃 ////
            // 타임아웃시간을 전체시간/한계퍼센트로 등분함!
        } /// if /////////////////
        
        //console.log("pers:"+pers[i]);

    } ///////////// addPers 함수 ////////////////////
    ////////////////////////////////////////////////
    ////////////////////////////////////////////////
    
    
    
    
    
    
    

}); ////////// jQB ///////////////////////////////

/////////////////////////////////////////////////
