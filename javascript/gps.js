jQuery(function(){
// Wait for Cordova to load
    //
    var destination_cords = '47.7459739, -117.404516';
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var map = '<iframe ' +
            'width="300" ' +
            'height="300" ' +
            'frameborder="0" ' +
            'scrolling="no" ' +
            'marginheight="0" ' +
            'marginwidth="0" ' +
            'src="https://maps.google.com/maps?' +
            'daddr='+destination_cords +
            '&amp;saddr=' + lat +',' + lon + '&amp;' +
            'output=embed&amp;' +
            'z=11"></iframe>' +
            '<br /><small><a ' +
            'href="https://maps.google.com/maps?' +
            'f=d&amp;' +
            'source=embed&amp;' +
            'saddr=' + lat +',' + lon + '&amp;' +
            'daddr=' + destination_cords + '&amp;' +
            ' style="color:#0000FF;text-align:left">View Larger Map</a></small>';
        $("#directionMap").html(map);
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
})