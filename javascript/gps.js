// Put your custom code here
jQuery(function(){

    navigator.geolocation.getCurrentPosition(function(pos){
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
//        var map = '<iframe width="300px" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=d&amp;source=s_d&amp;saddr='
//            + lat +',' + lon +
//            '&amp;daddr=Shakey\'s+Pizza+Parlor,+9602+North+Newport+Highway,+Spokane,+WA+99218&amp;output=embed&amp;z=11"></iframe><br /><small><a href="https://maps.google.com/maps?f=d&amp;source=embed&amp;saddr='
//            + lat +',' + lon +
//            '&amp;daddr=Shakey\'s+Pizza+Parlor,+9602+North+Newport+Highway,+Spokane,+WA+99218&amp;hl=en&amp;aq=&amp;sll='
//            + lat +',' + lon +
//            '&amp;spn='
//            + lat +',' + lon +
//            '" style="color:#0000FF;text-align:left">View Larger Map</a></small>';
        var destination = "Shakey's+Pizza+Parlor,+9602+N+Newport+Hwy,+Spokane,+WA&amp;";
        var destination_cords = '47.7459739, -117.404516';

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
    })
})