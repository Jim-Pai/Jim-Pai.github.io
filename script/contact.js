function myMap() {
    var myLatLng = {lat: 47.620264, lng: -122.3154};
    var mapOptions = {
        center: myLatLng,
        zoom: 15
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var markerOption = {
        position: myLatLng,
        map: map,
        title: "It's my address!!"
    };
    var marker = new google.maps.Marker(markerOption);
    marker.setMap(map);
    marker.setAnimation(google.maps.Animation.BOUNCE);
    console.log("Create Map");
}

var map = new myMap();

function validateForm() {
    var n = document.forms["myForm"]["name"];
    var e = document.forms["myForm"]["email"];
    var p = document.forms["myForm"]["phone"];
    var m = document.forms["myForm"]["message"];
    
    if(n.value == ""){
        n.focus();
        alert("Name must be filled out.");
        return false;
    }
    if(e.value == ""){
        e.focus();
        alert("E-mail must be filled out.");
        return false;
    }
    if(p.value == ""){
        p.focus();
        alert("Phone must be filled out.");
        return false;
    }
    if(!validatePhone(p.value)){
        p.focus();
        alert("Invalid Phone Number.");
        return false;
    }
    if(m.value == ""){
        m.focus();
        alert("Message must be filled out.");
        return false;
    }
}

function validatePhone(phoneNum) {
    var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for(var i = 0; i < phoneNum.length; i++) {
        if(!num.includes(phoneNum[i])) return false;
    }
    return true;
}