/* eslint-disable  */

$(function () {

    setInterval(fnslide,5000);

    function fnslide() { /*커스텀 함수 시작*/

        $("#shuttleFrame").animate({
                "margin-top": "-300px"
            },
            3000,
            function () {
                $("#shuttleFrame>a:nth-child(1)")
                    .insertAfter("#shuttleFrame>a:nth-child(3)");

                $("#shuttleFrame").css({
                    "margin-top": "0px"
                });
            }
            // 슬라이드 애니메이션이 종료되면 이미지 요소를 갖는 첫번째 a요소가
            // 머자먹  a요소 위로 이동
        );
    } /* 커스텀 함수 끝 */

});
