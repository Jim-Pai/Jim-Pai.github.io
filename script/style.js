$(document).ready(function() {
    if(document.cookie != null){
        setupStyle();
    }
    
    $(".styleBtn").click(function() {
        var fileName = getFileName();
        var id = this.id;
        changeStyle(fileName + id);
        createCookie(id, 1);
    });
});

function changeStyle(cssName) {
    var link = document.getElementById("cssLink");
    link.href = "css/" + cssName + ".css";
}

function createCookie(styleID, days) {
    var expireDay = days;
    var d = new Date();
    d.setTime(d.getTime() + (expireDay * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    
    document.cookie = "name=" + styleID + "; " + expires + "; path=/;";
    console.log(document.cookie);
}

function getCookieValue(key) {
    var map = {};
    var cookie = document.cookie;
    var pairs = cookie.split("; ");
    
    for(var i = 0; i < pairs.length; i++){
        var keyValue = pairs[i].split("=");
        map[keyValue[0]] = keyValue[1];
    }
    
    return (map[key] == null || map[key] == "") ? 1 : map[key];
}

function getFileName() {
    console.log(location.href);
    var path = location.href.split("/");
    var htmlName = path[path.length - 1].split(".");
    return htmlName[0];
}

function setupStyle() {
    changeStyle(getFileName() + getCookieValue("name"));
    console.log("Style ID = " + getCookieValue("name"));
}

function clearCookie() {
    createCookie("", -1);
}