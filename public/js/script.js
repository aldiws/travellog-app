$(document).ready(function () {
    $("#head_nav_search").click(function () {
        $(".search_section_banner").css("opacity", "0")
        $(".search_section_box").css('opacity', '1')
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
});


var target = $('.search_section_banner_message_font');
var targetHeight = target.outerHeight();

$(document).scroll(function (e) {
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if (scrollPercent >= 0) {
        target.css('opacity', scrollPercent);
    }

    if (targetHeight < window.scrollY) {
        target.css('opacity', '0')
    }

    console.log(window.scrollY)
});