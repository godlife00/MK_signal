$(document).ready(function () {

    if (window.location.href.indexOf("index") > -1) {
        var urlRoute = './';
        var modalRoute = 'modalBox.html';
    } else {
        var urlRoute = '../';
        var modalRoute = 'modalBox.html';
    }

    $('.modalBox').load(urlRoute + 'common/' + modalRoute, function () {
        console.log("모달 html 불러오기");
        function modalBoxJs() {
            // 모달팝업 - 프리미엄 가입하기
            $('.btn_free').on('click', function () {
                console.log("test");
                $('.modal').hide().removeClass('slideUp');
                $('.blocker').show();
                $('.premium_join').show().addClass('slideUp');
            });
            // 모달팝업 - AI매매신호
            $('.adequateArea .listWrap .mid .charm_num').on('click', function () {
                $('.modal').hide().removeClass('slideUp');
                $('.blocker').show();
                $('.signal_pop01').show().addClass('slideUp');
            });
            // 모달팝업 - 관심종목 지정안내
            $('.recom_company .att .attention.attention_pop').on('click', function () {
                $('.modal').hide().removeClass('slideUp');
                $('.blocker').show();
                $('.signal_pop02').show().addClass('slideUp');
            });
            // 모달팝업 - 닫기
            $('.modal .pop_header .clse, .blocker').on('click', function () {
                $('.blocker').hide();
                $('.modal').hide().removeClass('slideUp');
            });
        }
        modalBoxJs(); // 모달 스크립트 실행 함수
    });
});