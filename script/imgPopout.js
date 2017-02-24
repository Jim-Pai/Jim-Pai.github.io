$(document).ready(function() {
    setupPopImg();
    $(".popout").slick({
        dots: true,
        speed: 500,
        arrows: true
    });
    
    $(".popoutBg").hide();
    
    $(".projectContent img").click(function() {
        var index = $(".projectContent img").index(this);
        $(".popoutBg").show();
        $(".popout").slick("setPosition");
        $(".popout").slick("slickGoTo", index, true);
    });
    
    $(".popoutImg").click(function() {
        $(".popoutBg").hide();
    });
});

function setupPopImg() {
    var imgs = $(".projectContent img");
    var result = "";
    
    for(var i = 0; i < imgs.length; i++){
        result += "<div><img class='popoutImg' src='" + imgs[i].src + "' alt='Popout Project'></div>";
    }
    $(".popout").html(result);
}