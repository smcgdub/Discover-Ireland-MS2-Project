// VARIABLES
  let map;

// CITY VARIABLES 
  // const dublin = { lat: 53.34664, lng: -6.271798 }
  // const cork = { lat: 51.898627, lng: -8.4705942 }
  const galway = { lat: 53.2744122, lng: -9.0490632 };

// ICON VARIABLES 
  const hotel = 'http://maps.google.com/mapfiles/kml/pal2/icon20.png';
  const bars = 'http://maps.google.com/mapfiles/kml/pal2/icon19.png';
  const restaurant = 'http://maps.google.com/mapfiles/kml/pal2/icon63.png';
  const touristAttractions = 'http://maps.google.com/mapfiles/kml/pal4/icon46.png';

// MAP FUNCTION START
  function initMap() {

    // MAP OPTIONS 
    const mapOptions = {
      center: galway,
      zoom: 15,
    };

// CREATE THE MAP 
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

// MY MARKERS GALWAY HOTELS
var galwayHotels = [
  {"lat": 53.2710431999531, "lng": -9.05432419355871, "name": "The Residence Hotel", 
  "information": `<b>Address</b>: 14 Quay St, Galway, H91 P628, <br> 
  <b>Phone</b>: +3535 91 569 600 <br>
  <a href="https://www.theresidencehotel.ie/en/" target=”_blank”>Website Here</a>`},

  {"lat": 53.27505655643179, "lng": -9.04616004907515, "name": "The Forster Court Hotel", 
  "information": `<b>Address</b>: Forster St, Galway, H91 PY7E, <br> 
  <b>Phone</b>: +3535 91 564 111 <br>
  <a href="https://www.theforstercourt.ie/en/" target=”_blank”>Website Here</a>`},

  {"lat": 53.2703762, "lng": -9.0530298, "name": "The House Hotel", 
  "information": `<b>Address</b>: Spanish Parade, Latin Quarter, Galway, H91 X309, <br> 
  <b>Phone</b>: +3535 91 538 900 <br>
  <a href="https://www.thehousehotel.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.2745383, "lng": -9.0469838, "name": "Park House Hotel", 
  "information": `<b>Address</b>: 18 Forster St, Eyre Square, Galway, H91 PCF8, <br> 
  <b>Phone</b>: +3535 91 564 924 <br>
  <a href="https://www.parkhousehotel.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.27327719258493, "lng": -9.048736893591606, "name": "Kinlay Hostel Galway", 
  "information": `<b>Address</b>: Merchants Rd, Eyre Square, Galway, H91 F2KT, <br> 
  <b>Phone</b>: +3535 91 565 244 <br>
  <a href="https://www.kinlaygalway.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.27546, "lng": -9.06235, "name": "Ash Grove Guesthouse", 
  "information": `<b>Address</b>: 6 Ash Grove, Galway, H91 XK35, <br> 
  <b>Phone</b>: +3535 91 581 291 <br>
  <a href="http://www.ashgrovehousegalway.com/" target=”_blank”>Website Here</a>`},

  {"lat": 53.27077, "lng": -9.04749, "name": "Harbour Hotel", 
  "information": `<b>Address</b>: New Dock St, Galway, H91 E9PR, <br> 
  <b>Phone</b>: +3535 91 894 800 <br>
  <a href="https://www.harbour.ie" target=”_blank”>Website Here</a>`},

  {"lat": 53.27614, "lng": -9.05244, "name": "Woodquay Hostel", 
  "information": `<b>Address</b>: 23/24 Woodquay, Galway, H91 P8RP, <br> 
  <b>Phone</b>: +3535 91 562 618 <br>
  <a href="http://woodquayhostel.ie/" target=”_blank”>Website Here</a>`},
];

// MY MARKERS GALWAY BARS
var galwayBars = [
  {"lat": 53.27110518648743, "lng": -9.053919060465876, "name": "The Quays Bar", 
  "information": `<b>Address</b>: 11 Quay Street, Galway, <br> 
  <b>Phone</b>: +3535 91 568 347 <br>
  <a href="https://quaysgalway.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.27461586482922, "lng": -9.048351798774188, "name": "O'Connell's Bar", 
  "information": `<b>Address</b>: 8 Eyre Square, Galway, H91 FT22, <br> 
  <b>Phone</b>: +3535 91 563 634 <br>
  <a href="https://www.facebook.com/oconnellsbar/" target=”_blank”>Website Here</a>`},

  {"lat": 53.27174653413569, "lng": -9.054156048461468, "name": "The Front Door Pub", 
  "information": `<b>Address</b>: 8 Cross Street Upper, Galway, H91 YY06, <br> 
  <b>Phone</b>: +3535 91 563 757 <br>
  <a href="http://www.frontdoorpub.com/" target=”_blank”>Website Here</a>`},

  {"lat": 53.270025372440855, "lng": -9.05989094661011, "name": "Massimo Bar Galway", 
  "information": `<b>Address</b>: 10 William St W, Galway, H91 C2X3, <br> 
  <b>Phone</b>: +3535 91 582 239 <br>
  <a href="https://massimogalway.com/" target=”_blank”>Website Here</a>`},

  {"lat": 53.2710706181891, "lng": -9.054340458904251, "name": "1520 Bar", 
  "information": `<b>Address</b>: 14 Quay St, Galway, H91 P628, <br> 
  <b>Phone</b>: +3535 91 569 600 <br>
  <a href="https://1520.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.27529, "lng": -9.05279, "name": "Barr An Chaladh", 
  "information": `<b>Address</b>: Daly's Place, 3 Woodquay, Galway, H91 Y90F, <br> 
  <b>Phone</b>: +3535 91 895 762 <br>
  <a href="https://barr-an-chaladh.business.site/" target=”_blank”>Website Here</a>`},

  {"lat": 53.26989, "lng": -9.05700, "name": "The Salt House", 
  "information": `<b>Address</b>: 4 Raven Terrace, Galway, H91 D9Y2, <br> 
  <b>Phone</b>: +3535 91 441 550 <br>
  <a href="http://www.galwaybaybrewery.com/salthouse/" target=”_blank”>Website Here</a>`},

  {"lat": 53.26988, "lng": -9.05293, "name": "Pálás Kitchen & Bar", 
  "information": `<b>Address</b>: 15 Merchants Rd Lower, Galway, H91 WK6P, <br> 
  <b>Phone</b>: +3535 91 394 076 <br>
  <a href="https://palas.ie/eat-drink/cinema-eat-drink/" target=”_blank”>Website Here</a>`},
];

// MY MARKERS GALWAY RESTAURANTS
var galwayRestaurants = [
  {"lat": 53.27121098114582, "lng": -9.05703831389341, "name": "BoTown Burger", 
  "information": `<b>Address</b>: 57 Dominick St Lower, Galway, H91 VP95, <br> 
  <b>Phone</b>: +3535 91 534 834 <br>
  <a href="https://botown.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.27596460192951, "lng": -9.049661671172132, "name": "Apoema Bistro", 
  "information": `<b>Address</b>: Lydon Court, Bóthar Irwin, Galway, H91 AK09, <br> 
  <b>Phone</b>: +3535 91 865 963 <br>
  <a href="https://www.apoemabistro.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.26957125, "lng": -9.05377675, "name": "Ard Bia at Nimmos", 
  "information": `<b>Address</b>: Spanish Arch, The Long Walk, Galway, H91 E9XA, <br> 
  <b>Phone</b>: +3535 91 561 114 <br>
  <a href="http://www.ardbia.com/" target=”_blank”>Website Here</a>`},

  {"lat": 53.2715455, "lng": -9.0533014, "name": "Cava Bodega", 
  "information": `<b>Address</b>: 1 Middle St, Galway, H91 AK13, <br> 
  <b>Phone</b>: +3535 91 539 884 <br>
  <a href="https://www.cavarestaurant.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.271036, "lng": -9.057088, "name": "Dela Restaurant", 
  "information": `<b>Address</b>: 51 Dominick St Lower, Galway, H91 E3F1, <br> 
  <b>Phone</b>: +3535 91 449 252 <br>
  <a href="http://dela.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.27440, "lng": -9.05178, "name": "Zappis Restaurant", 
  "information": `<b>Address</b>: 16, 18 Eglinton St, Galway, H91 YX62, <br> 
  <b>Phone</b>: +3535 91 565 425 <br>
  <a href="https://zappisgalway.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.27209, "lng": -9.05167, "name": "Trieste Café & Wine Bar", 
  "information": `<b>Address</b>: 5 Buttermilk Walk, Middle St, Galway, H91 D2C4, <br> 
  <b>Phone</b>: +3535 83 046 8241 <br>
  <a href="https://www.facebook.com/TriesteWineBar/" target=”_blank”>Website Here</a>`},

  {"lat": 53.26957, "lng": -9.06119, "name": "Kai Restaurant", 
  "information": `<b>Address</b>: 22 Sea Rd, Galway, H91 DX47, <br> 
  <b>Phone</b>: +3535 91 526 003 <br>
  <a href="http://www.kairestaurant.ie/" target=”_blank”>Website Here</a>`},
];

// MY MARKERS GALWAY TOURIST ATTRACTIONS
var galwayTouristAttractions = [
  {"lat": 52.9717877, "lng": -9.4291244, "name": "Cliffs Of Moher", 
  "information": `<b>Address</b>: Cliffs Of Moher, Lahinch, County Galway <br> 
  <b>Phone</b>: +353 65 708 6141 <br>
  <a href="https://www.cliffsofmoher.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.26001885, "lng": -9.074074429225629, "name": "National Aquarium of Ireland", 
  "information": `<b>Address</b>: Seapoint Promenade, Galway, H91 T2FD <br> 
  <b>Phone</b>: +353 91 585 100 <br>
  <a href="https://www.nationalaquarium.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 53.269770300000005, "lng": -9.05342186303836, "name": "Galway City Museum", 
  "information": `<b>Address</b>: Spanish Parade, Galway, H91 CX5P <br> 
  <b>Phone</b>: +353 91 532 460 <br>
  <a href="https://www.galwaycitymuseum.ie/?locale=en" target=”_blank”>Website Here</a>`},

  {"lat": 53.27155398168091, "lng": -9.05370157445546, "name": "The Latin Quarter", 
  "information": `<b>Address</b>: 22 High St, Galway, H91 VX4E <br> 
  <b>Phone</b>: +353 91 530 000 <br>
  <a href="https://www.facebook.com/latinquartergalway/" target=”_blank”>Website Here</a>`},

  {"lat": 53.2744475, "lng": -9.049333276783623, "name": "Eyre Square", 
  "information": `<b>Address</b>: Eyre Square, Galway <br> 
  <a href="https://en.wikipedia.org/wiki/Eyre_Square" target=”_blank”>Website Here</a>`},

  {"lat": 53.27247, "lng": -9.05336, "name": "Legend of the Claddagh Ring", 
  "information": `<b>Address</b>: 26 Shop St, Galway, H91 E653 <br> 
  <b>Phone</b>: +353 91 562 554 <br>
  <a href="http://claddaghlegend.com/" target=”_blank”>Website Here</a>`},

  {"lat": 53.27011, "lng": -9.05808, "name": "Galway's Westend", 
  "information": `<b>Address</b>: Galways Westend, Dominick St Lower, Galway <br> 
  <a href="https://thisisgalway.ie/galways-west-end/" target=”_blank”>Website Here</a>`},

  {"lat": 53.27774, "lng": -9.06245, "name": "Quadrangle Building - National University Of Ireland - Galway", 
  "information": `<b>Address</b>: National University of Ireland, Galway <br> 
  <b>Phone</b>: +353 91 524411 <br>
  <a href="https://www.nuigalway.ie/about-us/who-we-are/our-history.html" target=”_blank”>Website Here</a>`},
];

// INFO OBJECT THAT WILL STORE THE INFO DISPLAYED IN EACH INFO WINDOW
var InfoObj = [];

// LOOPS OVER MARKS
  for(let i = 0; i < galwayTouristAttractions.length; i++) {
    let contentString = '<h2>' + galwayTouristAttractions[i].name + '</h2>' +
    '<p>' + galwayTouristAttractions[i].information + '</p>';
    
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(galwayTouristAttractions[i].lat, galwayTouristAttractions[i].lng),
      map: map,
      title: galwayTouristAttractions[i].name,
      animation: google.maps.Animation.DROP,
      icon: touristAttractions,
    });

// DISPLAY TRAFFIC (MAY NOT USE THIS)
  // const trafficLayer = new google.maps.TrafficLayer();
  // trafficLayer.setMap(map);

// CREATE INFO WINDOW 
  const infoWindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400
  });

// EVENT LISTENER FOR CLICK ON ICON
  marker.addListener("click", function() {
    closeOtherInfo();
    infoWindow.open(map, marker);
    InfoObj[0] = infoWindow;
  });
}

// CLEARS OUT ANY OLD INFORMATION FUNCTION
  function closeOtherInfo(){
    if( InfoObj.length > 0 ){
      InfoObj[0].set("marker", null);
      InfoObj[0].close();
      InfoObj[0].length = 0;
    }
  }
}