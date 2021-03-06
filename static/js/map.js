console.log("map.js")
var myMap = L.map("map", {
    center: [40.718266 ,-74.007819],//tribeca area
    zoom: 13
  });
  const MAP_URL = "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
  
  L.tileLayer(MAP_URL, {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
     id: 'mapbox/streets-v11',
    accessToken: API_KEY
  }).addTo(myMap);
  
  var url = "https://pridetrip.herokuapp.com/map";
  
  fetch(url).then(d=>d.json()).then(function(response) {
   console.log(response)
    var location = response.results;
    var heatArray = [];
      for (var i = 0; i < location.length; i++) {
      var latitude = location[i].dolat;
      var longitude = location[i].dolon;
      if (latitude,longitude) {
        heatArray.push([latitude, longitude]);
      }
    }
  
    var heat = L.heatLayer(heatArray, {
      radius: 25,
      blur: 15
    }).addTo(myMap);
  
  },(msg)=>{console.log(msg)} );
  