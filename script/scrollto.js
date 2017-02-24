$(document).ready(function() {
    $("a").click(function() {
        var speed = 1500.00;
        var targethref = this.href;
        var elementID = targethref.split("#");
        var len = elementID.length;
        if(len < 2) return;
        
        var fullDisrance = $("footer").offset().top - $("#top").offset().top;
        var currentDistance = Math.abs($(document).scrollTop() - $("#" + elementID[len - 1]).offset().top);
        $("html, body").animate({ scrollTop: $("#" + elementID[len - 1]).offset().top }, speed * currentDistance / fullDisrance);
    });
});

