/* eslint-disable */

$(function () {

    // 함수의 호출 = 함수의 내부 코드가 실행
    // fnSlide();

    setInterval(fnSlide, 5000); // 일정시간마다 반복

    function fnSlide() { // 함수의 정의
        //js코드 실행


        /* 슬라이드쇼 애니메이션 실행코드 시작 */
        $("div#shuttleFrame").animate({
                "margin-left": "-780px"
            },
            3000,
            function () {
                $("#shuttleFrame>a:nth-child(1)")
                    .insertAfter("#shuttleFrame>a:nth-child(3)")
                // $("선택자").insertAfter("이동할 위치")
                $("#shuttleFrame").css({
                    "margin-left": "0"
                });
            }
        ); /* 슬라이드쇼 애니메이션 실행코드 끝 */
    } // 커스텀 함수 끝
});
