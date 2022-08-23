$(document).ready(function () {
    
    $(window).scroll(function () {
        if ($(document).scrollTop() == 0) {
            $('#header.sub_hdr').removeClass('fix');
        } else {
            $('#header.sub_hdr').addClass('fix');
        }
    });

    // a태그 페이지 상단 이동 막기
    $('.btn_free, #btn_free, .btn_join, .page_nav li').on('click', function () {
        console.log("상단이동제한");
        return false;
    });    

    $('.globalStock .main_mid.youtube_mijumi .video_thumbnail').show(); // 페이지 로드 완료후 이미지 노출
    // 페이지 새로고침되도 스크롤 위치 유지
    document.addEventListener("DOMContentLoaded", function (event) {
        var scrollpos = localStorage.getItem('scrollpos');
        if (scrollpos) window.scrollTo(0, scrollpos);
    });
    window.onbeforeunload = function (e) {
        localStorage.setItem('scrollpos', window.scrollY);
    };

    //swiper    
    //메인 포트폴리오    
    if ($('.maingameSwiper').length) {
        var swiper = new Swiper('.maingameSwiper', {
            slidesPerView: "auto",
            spaceBetween: 8,
        });
    }
    //메인 관심종목    
    if ($('.maingfistSwiper').length) {
        var swiper = new Swiper('.maingfistSwiper', {
            slidesPerView: "auto",
            spaceBetween: 8,
            pagination: {
                el: ".swiper-pagination",
            },
        });
    }

    //서브 TODAY 시그널
    if ($('.todaySwiper').length) {
        var swiper = new Swiper('.todaySwiper', {
            setWrapperSize: true,                        
            // pagination: {
            //     el: '.swiper-pagination',
            // },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                slideChange: function () {                                        
                    Swipertabs();                               
                }
            }
        });
        //슬라이드 탭 인 경우 
        function Swipertabs() {            
            // var i = 5;
            for (var i = 0; i <= 20; i++) {                                
                $('.mainBox.today_list .tabsArea .tab_container .tab_content:nth-of-type(2n - 1)').show();    
                $('ul.tabs li[rel="tab' + i + ']').click(function () {
                    $("ul.tabs li").removeClass("active");
                    $(this).addClass("active");
                    $(".tabsArea .tab_content").hide();                        
                    $('.swiper-slide .tabsArea #tab' + i + '.tab_content').show();                   
                });        
            }    
        }
    }

    // 해더 서비스 선택 (미국주식/국내주식)
    $('.MK #wrap #header .bgWrap .left_box .nation_list').on("click", function () {
        $(this).toggleClass('choice');
    });
    $('.MK #wrap #header .bgWrap .left_box .nation_list li').on("click", function () {
        $('.MK #wrap #header .bgWrap .left_box .nation_list li').removeClass('active');
        $(this).addClass('active');
    });

    $('html').click(function (e) {
        if (!$(e.target).is('.nation_list *')) {
            $('.MK #wrap #header .bgWrap .left_box .nation_list').removeClass('choice');                
        }        
    });

    // 알람페이지 서비스 선택 (미국주식/국내주식)
    $('.MK #wrap #container.sub_stock .alarmArea .nation_list').on("click", function () {
        $(this).toggleClass('choice');
    });
    $('.MK #wrap #container.sub_stock .alarmArea .nation_list li').on("click", function () {
        $('.MK #wrap #container.sub_stock .alarmArea .nation_list li').removeClass('active');
        $(this).addClass('active');
    });

    $('html').click(function (e) {
        if (!$(e.target).is('.nation_list *')) {
            $('.MK #wrap #container.sub_stock .alarmArea .nation_list').removeClass('choice');                
        }        
    });

    //검색
    if ($('.sub_search').length) {
        $('.searchInput').focus().click();
    }
    if ($('.searchInput').length) {
        $('.searchArea .searchInput').on("keydown", function () {
            $('.searchArea').addClass('keydown');
            $('.sch_autocomplete').addClass('focus_on');
        });

        $('.MK .main_searching .searchArea .searchInput').on("keydown", function () {
            $('.MK .main_searching .searchArea').addClass('keydown');
            $('.MK .main_searching .sch_autocomplete').addClass('focus_on');
        });
    }
    
    $(window).scroll(function () {
        // 메인 상단 탭네비 활성화
        if ($('.page_nav').length) {
            var navoffset01 = $('.mainBox.area_recom').offset().top - $('.main_hdr').innerHeight() - $('.page_nav').innerHeight() - 40;
            var navoffset02 = $('.mainBox.area_hit100').offset().top - $('.main_hdr').innerHeight() - $('.page_nav').innerHeight() - 40;
            var navoffset03 = $('.mainBox.area_fist').offset().top - $('.main_hdr').innerHeight() - $('.page_nav').innerHeight() - 40;
            var navoffset04 = $('.mainBox.area_theme').offset().top - $('.main_hdr').innerHeight() - $('.page_nav').innerHeight() - 40;
            $('.page_nav li').removeClass('active');
            if ($(document).scrollTop() >= 0 && $(document).scrollTop() < navoffset02) {
                console.log("11");
                $('.page_nav li a.nav_recom_scr').parents().addClass('active');
            } else if (navoffset01 <= navoffset02 && $(document).scrollTop() < navoffset03) {
                console.log("22");
                $('.page_nav li a.nav_hit100').parents().addClass('active');
            } else if (navoffset02 <= navoffset03 && $(document).scrollTop() < navoffset04) {
                console.log("33");
                $('.page_nav li a.nav_fist').parents().addClass('active');
            } else {
                console.log("44");
                $('.page_nav li a.nav_theme').parents().addClass('active');
            }
        }
    });
    
    // 메인 상단 탭네비 페이지내 이동    
    $('.page_nav li a.nav_recom_scr').on("click", function () {
        var offset = $('.mainBox.area_recom').offset();          
        console.log(offset.top);      
        $('html').animate({ scrollTop: offset.top - 140}, 400);
    });
    $('.page_nav li a.nav_hit100').on("click", function () {
        var offset = $('.mainBox.area_hit100').offset();
        console.log(offset.top);
        $('html').animate({ scrollTop: offset.top - 140}, 400);
    });
    $('.page_nav li a.nav_fist').on("click", function () {
        var offset = $('.mainBox.area_fist').offset();
        console.log(offset.top);
        $('html').animate({ scrollTop: offset.top - 140}, 400);
    });
    $('.page_nav li a.nav_theme').on("click", function () {
        var offset = $('.mainBox.area_theme').offset();
        console.log(offset.top);
        $('html').animate({ scrollTop: offset.top - 140}, 400);
    });
    
    $(".tabsArea .tab_content").hide();
    $(".tabsArea .tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tabsArea .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });

    // 기업개요 더보기 열기
    $('#container.sub_search .mainBox.outline .summary, #container.sub_stock .mainBox.outline .summary').on("click", function () {        
        if ($(this).children().children().hasClass("txt_line02")) {            
            $(this).toggleClass('active');             
        } else {
            //더보기 없음            
        }
    });       

    // 진단점수 그래프바 에니메이션 효과
    (function( $ ) {
        $(function() {
            function animated_contents() {
                $(".zt-skill-bar > div ").each(function (i) {
                    var $this  = $(this),
                        skills = $this.data('width');
    
                    $this.css({'width' : skills + '%'});
    
                });
            }
            
            if(jQuery().appear) {
                $('.zt-skill-bar').appear().on('appear', function() {
                    animated_contents();
                });
            } else {
                animated_contents();
            }
        });
    }(jQuery));
        
    /**
     * 모달 스크립트 실행 함수로 modalBox.js파일은 로컬용으로 서버 올라갈 땐 해당 코드를 여기로 옴겨야함
     */
    function modalBoxJs() {
        // 모달팝업 - 프리미엄 가입하기
        $('.btn_free, #btn_free').on('click', function () {
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

        // 모달팝업 - 관심종목 지정 (게스트) 
        $('.recom_company .att .attention.attention_guest').on('click', function () {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.signal_guest').show().addClass('slideUp');
        });

        // 모달팝업 - 관심종목 지정 (베이직)
        $('.recom_company .att .attention.attention_basic').on('click', function () {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.signal_basic').show().addClass('slideUp');
        });

        // 모달팝업 - 닫기
        $('.modal .pop_header .clse, .blocker').on('click', function () {
            $('.blocker').hide();
            $('.modal').hide().removeClass('slideUp');
        });
    }
    modalBoxJs();
});


