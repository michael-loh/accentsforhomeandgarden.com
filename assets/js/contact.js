var gMapAPIKey = "AIzaSyB93YkfKvUHpX47qtrbyK0XLBo3zwbUePM";

var map;
function initMap() {
    
    var location = {lat: 38.800486, lng: -75.324116};
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.800486, lng: -75.324116},
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        draggable: false,
        scrollwheel: false
    });
     
    var contentString = '<h5>Accents for Home and Garden</h5>' +
        '<p>13034 Cedar Creek Road<br>' +
        'Milton, DE 19968</p>';
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Accents for Home and Garden'
    });
    
    marker.addListener('click', function () {
       infowindow.open(map, marker) 
    });
}
