$(document).ready(function () {

    // 해더 스크립트
    function hdrJs() {
        console.log("해더스크립트 로딩되면 나옴");
        $(window).scroll(function () {                   
            if ($(document).scrollTop() == 0) {
                $('#header.sub_hdr').removeClass('fix');
            } else {
                $('#header.sub_hdr').addClass('fix');
            }
            
        });  
    }

    $(window).scroll(function () {
        if ($(document).scrollTop() == 0) {
            $('#header.sub_hdr').removeClass('fix');
        } else {
            $('#header.sub_hdr').addClass('fix');
        }

    });

    // 해더 스크립트 실행
    hdrJs();

    


    // a태그 페이지 상단 이동 막기
    $('btn_free, .btn_join, .page_nav li').on('click', function () {
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


    // 해더 서비스 선택 (미국주식/국내주식)
    $('.MK #wrap #header .bgWrap .left_box .nation_list').on("click", function () {
        $(this).toggleClass('choice');
    });
    $('.MK #wrap #header .bgWrap .left_box .nation_list li').on("click", function () {
        $('.MK #wrap #header .bgWrap .left_box .nation_list li').removeClass('active');
        $(this).addClass('active');
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
        // $('.searchArea .searchInput').on("focusout", function () {
        //     $('.searchArea').removeClass('keydown');                
        //     $('.sch_autocomplete').removeClass('focus_on');
        // });

        $('.MK .main_searching .searchArea .searchInput').on("keydown", function () {
            $('.MK .main_searching .searchArea').addClass('keydown');
            $('.MK .main_searching .sch_autocomplete').addClass('focus_on');
        });
        // $('.MK .main_searching .searchArea .searchInput').on("focusout", function () {        
        //     $('.MK .main_searching .searchArea').removeClass('keydown');                
        //     $('.MK .main_searching .sch_autocomplete').removeClass('focus_on');
        // });
    }

    // 메인 AI추천 탭네비 상단 고정 시키기    
    $(window).scroll(function () {
        if ($('.mainBox.area_recom').length) {
            var jbOffset = $('.mainBox.area_recom').offset();
            if ($(document).scrollTop() < jbOffset.top - 40) {
                // $('#container').css({
                //     'padding' : '25px 0 25px',                    
                // });                                                      
                $('.mainBox.area_recom .page_nav').css({
                    'position': 'relative',
                    'top': '0',
                }).removeClass('boxShadow');

            } else {
                // $('#container').css({
                //     'padding' : '62px 0 25px',                    
                // });                
                $('.mainBox.area_recom .page_nav').css({
                    'position': 'fixed',
                    'top': '54px',
                }).addClass('boxShadow');
            }
        }
    });
    $(window).scroll(function () {
        if ($('.mainBox.area_recom .page_nav').length) {
            var navoffset01 = $('.mainBox.area_recom').offset().top - $('.main_hdr').innerHeight() - $('.page_nav').innerHeight() - 40;
            var navoffset02 = $('.mainBox.area_hit100').offset().top - $('.main_hdr').innerHeight() - $('.page_nav').innerHeight() - 40;
            var navoffset03 = $('.mainBox.area_fist').offset().top - $('.main_hdr').innerHeight() - $('.page_nav').innerHeight() - 40;
            var navoffset04 = $('.mainBox.area_theme').offset().top - $('.main_hdr').innerHeight() - $('.page_nav').innerHeight() - 40;
            $('.mainBox.area_recom .page_nav li').removeClass('active');
            if ($(document).scrollTop() >= 0 && $(document).scrollTop() < navoffset02) {
                $('.mainBox.area_recom .page_nav li a.nav_recom_scr').parents().addClass('active');
            } else if (navoffset01 <= navoffset02 && $(document).scrollTop() < navoffset03) {
                $('.mainBox.area_recom .page_nav li a.nav_hit100').parents().addClass('active');
            } else if (navoffset02 <= navoffset03 && $(document).scrollTop() < navoffset04) {
                $('.mainBox.area_recom .page_nav li a.nav_fist').parents().addClass('active');
            } else {
                $('.mainBox.area_recom .page_nav li a.nav_theme').parents().addClass('active');
            }
        }
    });
    // 메인 상단 탭네비 페이지내 이동    
    $('.mainBox.area_recom .page_nav li a.nav_recom_scr').on("click", function () {
        var offset = $('.mainBox.area_recom').offset();
        $('html').animate({ scrollTop: offset.top - 94 }, 400);
    });
    $('.mainBox.area_recom .page_nav li a.nav_hit100').on("click", function () {
        var offset = $('.mainBox.area_hit100').offset();
        $('html').animate({ scrollTop: offset.top - 94 }, 400);
    });
    $('.mainBox.area_recom .page_nav li a.nav_fist').on("click", function () {
        var offset = $('.mainBox.area_fist').offset();
        $('html').animate({ scrollTop: offset.top - 94 }, 400);
    });
    $('.mainBox.area_recom .page_nav li a.nav_theme').on("click", function () {
        var offset = $('.mainBox.area_theme').offset();
        $('html').animate({ scrollTop: offset.top - 94 }, 400);
    });

    //탭메뉴
    $(".tabsArea .tab_content").hide();
    $(".tabsArea .tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tabsArea .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
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


});


