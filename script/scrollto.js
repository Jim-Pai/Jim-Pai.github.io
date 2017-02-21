$(document).ready(function() {
    $("a").click(function() {
        var targethref = this.href;
        var elementID = targethref.split("#");
        var len = elementID.length;
        if(len < 2) return;
        $("html, body").animate({ scrollTop: $("#" + elementID[len - 1]).offset().top }, 1000);
    });
});

