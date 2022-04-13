$(document).ready(function () {

    if (window.location.href.indexOf("index") > -1) {
        var urlRoute = './';
        var hdrRoute = 'header_index.html';
        var ftRoute = 'footer_index.html';        
    } else  {
        var urlRoute = '../';
        var hdrRoute = 'header.html';
        var ftRoute = 'footer.html';        
    }

    $('#header.main_hdr').load(urlRoute + 'common/' + hdrRoute, function () {
        console.log("메인해더");    
    });
    $('#header.sub_hdr').load(urlRoute + 'common/' + hdrRoute, function () {
        console.log("서브해더");    
        hdrJs();       
    });
    $('#header.view_hdr').load(urlRoute + 'common/' + hdrViewRoute, function () {
        console.log("뷰페이지해더");    
        hdrJs();                     
    });


    $('#footer').load(urlRoute + 'common/' + ftRoute, function () {
        console.log("푸터");                    
    });



});