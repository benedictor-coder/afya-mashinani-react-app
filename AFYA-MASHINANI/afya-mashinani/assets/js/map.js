
$(document).ready(function () {
    var map;
    var geocoder;
    // Create the script tag, set the appropriate attributes
    var script = document.createElement("script");
    script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyA1bF3Ry-gVyKmSVse4s1zmfnyd4_9b3F8&callback=initMap";
    script.defer = true;
    // Append the 'script' element to 'head'
    document.head.appendChild(script);
    // Attach your callback function to the `window` object and loadmap()
    window.initMap = function () {
        // The location of Kitale
        const location = { lat: 1.01614, lng: 34.9696852 };
        // The map, centered at Kitale
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: location,
        });

        $.ajax({
            url: url + "Dashboard/Loadmaps",
            type: "post",
            //dataType: 'JSON',
            data: { action: "loadmaps" },
            success: function (response) {
                data = JSON.parse(response);
                //console.log(response);
                geocoder = new google.maps.Geocoder();
                //codeAddress(data);
                showAllpoints(data);
            },
            error: function (xhr) {
                console.log("Request Status:" + xhr.status);
                console.log("Status Text:" + xhr.statusText);
                console.log(xhr.responseText);
            },
        });
        //all points
        function showAllpoints(data) {
            const infoWind = new google.maps.InfoWindow();
            // Array.prototype.forEach.call(data, function(data){
            $.each(data, function (index, data) {
                //var infoWind = new google.maps.InfoWindow;
                var content = document.createElement("div");
                var strong = document.createElement("strong");

                strong.textContent = data.sublocation + ",Kwa" + " " + data.commonName;
                content.appendChild(strong);
                const img = document.createElement("img");
                img.src = url + "assets/images/appicon.png";
                img.style.width = "25px";
                content.appendChild(img);

                const marker = new google.maps.Marker({
                    position: new google.maps.LatLng(data.latitude, data.longitude),
                    icon: {
                        path: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",
                        scale: 0.04,
                        fillColor: "#20C2EE",
                        strokeColor: "#20C2EE",
                        strokeWeight: 1,
                        fillOpacity: 0.8,
                    },
                    map: map,
                });
                console.log(data.latitude, data.longitude);
                marker.addListener("mouseover", function () {
                    infoWind.setContent(content);
                    infoWind.open(map, marker);
                });
            });
        }
    };
    //get a position coordinates
    function codeAddress(data) {
        //Array.prototype.forEach.call(cdata, function(data){
        $.each(data, function (index, value) {
            var address = value.sublocation + " " + value.landmark;
            geocoder.geocode({ address: address }, function (results, status) {
                if (status == "OK") {
                    map.setCenter(results[0].geometry.location);
                    console.log(results[0].geometry.location);

                    var points = {};
                    points.id = value.id;
                    points.lat = map.getCenter().lat();
                    points.lng = map.getCenter().lng();
                    updateCollegeWithLatLng(points);
                } else {
                    alert(
                        "Geocode was not successful for the following reason: " + status
                    );
                }
            });
        });
    }
    //update the location
    function updateCollegeWithLatLng(points) {
        $.ajax({
            url: url + "Dashboard/....",
            method: "post",
            data: points,
            success: function (res) {
                console.log(res);
            },
        });
    }
});