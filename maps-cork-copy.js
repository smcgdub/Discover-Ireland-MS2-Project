// VARIABLES
  let map;

// CITY VARIABLES 
  // const dublin = { lat: 53.34664, lng: -6.271798 }
  const cork = { lat: 51.898627, lng: -8.4705942 };
  // const galway = { lat: 53.2744122, lng: -9.0490632 }

// ICON VARIABLES 
  const hotel = 'http://maps.google.com/mapfiles/kml/pal2/icon20.png';
  const bars = 'http://maps.google.com/mapfiles/kml/pal2/icon19.png';
  const restaurant = 'http://maps.google.com/mapfiles/kml/pal2/icon63.png';
  const touristAttractions = 'http://maps.google.com/mapfiles/kml/pal4/icon46.png';

// MAP FUNCTION START
  function initMap() {

    // MAP OPTIONS 
    const mapOptions = {
      center: cork,
      zoom: 15,
    };

// CREATE THE MAP 
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

// MY MARKERS CORK HOTELS
var corkHotels = [
  {"lat": 51.89372772495677, "lng": -8.508285803093425, "name": "The Kingsley Hotel", 
  "information": `<b>Address</b>:  Carrigrohane Rd, Sunday's Well, Cork, T12 P680 <br> 
  <b>Phone</b>: +353 21 480 0500 <br>
  <a href="https://www.thekingsley.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.89594355, "lng": -8.484916825126787, "name": "The River Lee Hotel", 
  "information": `<b>Address</b>:  Western Rd, Cork, T12 X2AH <br> 
  <b>Phone</b>: +353 21 425 2700 <br>
  <a href="https://www.doylecollection.com/hotels/the-river-lee-hotel" target=”_blank”>Website Here</a>`},

  {"lat": 51.89722398977573, "lng": -8.470026128540667, "name": "The Imperial Hotel", 
  "information": `<b>Address</b>:  76 S Mall, Street, Cork, T12 A2YT, <br> 
  <b>Phone</b>: +353 21 427 4040 <br>
  <a href="https://www.imperialhotelcork.com/" target=”_blank”>Website Here</a>`},

  {"lat": 51.90179755, "lng": -8.460283401499794, "name": "The Dean Hotel", 
  "information": `<b>Address</b>:  Horgan's Quay, Railway St, Northern Quarter, Cork, <br> 
  <b>Phone</b>: +353 21 234 1200 <br>
  <a href="https://thedean.ie/cork" target=”_blank”>Website Here</a>`},

  {"lat": 51.90102715, "lng": -8.467816564578431, "name": "The Metropole Hotel", 
  "information": `<b>Address</b>:  MacCurtain Street, Victorian Quarter, Cork, <br> 
  <b>Phone</b>: +353 21 464 3700 <br>
  <a href="https://www.themetropolehotel.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.90303, "lng": -8.47326, "name": "Maldron Hotel Cork City", 
  "information": `<b>Address</b>:  John Redmond St, Shandon, Cork, T23 A9TF, <br> 
  <b>Phone</b>: +353 21 452 9200 <br>
  <a href="https://www.maldronhotelshandoncorkcity.com/" target=”_blank”>Website Here</a>`},

  {"lat": 51.89121, "lng": -8.49000, "name": "Hayfield Manor Hotel", 
  "information": `<b>Address</b>:  Perrott Ave, College Rd, Centre, Cork, T12 HT97, <br> 
  <b>Phone</b>: +353 21 484 5900 <br>
  <a href="https://www.hayfieldmanor.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.89552, "lng": -8.49171, "name": "Killarney Guest House  ", 
  "information": `<b>Address</b>:  59 Western Rd, Mardyke, Cork, <br> 
  <b>Phone</b>: +353 21 427 0290 <br>
  <a href="http://killarneyhouse.com/" target=”_blank”>Website Here</a>`},
];

// MY MARKERS CORK BARS
var corkBars = [
  {"lat": 51.8973519, "lng": -8.4801828, "name": "Costigans Pub", 
  "information": `<b>Address</b>:  11 Washington Street West, Centre, Cork, T12 N768, <br> 
  <b>Phone</b>: +3535 21 427 3350 <br>
  <a href="http://costiganspub.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.90145, "lng": -8.46859, "name": "The Shelbourne Bar", 
  "information": `<b>Address</b>:  17 MacCurtain Street, Centre, Cork, T23 DE79, <br> 
  <b>Phone</b>: +3535 21 450 9615 <br>
  <a href="https://www.theshelbournecork.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.8980228, "lng": -8.47389, "name": "Mutton Lane Inn", 
  "information": `<b>Address</b>:  3 St Patrick's St, Mutton Ln, Centre, Cork, T12 RV07, <br> 
  <b>Phone</b>: +3535 21 427 3471 <br>
  <a href="https://www.facebook.com/mutton.lane/" target=”_blank”>Website Here</a>`},

  {"lat": 51.8981887, "lng": -8.4705669, "name": "The Long Valley Bar", 
  "information": `<b>Address</b>:  10 Winthrop St, Centre, Cork, T12 NW64, <br> 
  <b>Phone</b>: +3535 21 427 2144 <br>
  <a href="https://www.thelongvalleybar.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.896781, "lng": -8.4766931, "name": "The Oval", 
  "information": `<b>Address</b>:  25 S Main St, Centre, Cork, T12 Y15D, <br> 
  <b>Phone</b>: +3535 21 427 8952 <br>
  <a href="https://www.facebook.com/oval.bar.9/" target=”_blank”>Website Here</a>`},

  {"lat": 51.90424, "lng": -8.48878, "name": "Templeacre Tavern", 
  "information": `<b>Address</b>: 10 Gurranebraher Rd, Cork, T23 TC59, <br> 
  <b>Phone</b>: +3535 21 430 3028 <br>
  <a href="https://www.facebook.com/pages/Templeacre-Tavern/103835209693977" target=”_blank”>Website Here</a>`},

  {"lat": 51.89823, "lng": -8.46740, "name": "The Poor Relation", 
  "information": `<b>Address</b>: 19 Parnell Pl, Centre, Cork, <br> 
  <b>Phone</b>: +3535 21 494 9049 <br>
  <a href="https://www.facebook.com/poorrelationcork/" target=”_blank”>Website Here</a>`},

  {"lat": 51.89390, "lng": -8.48991, "name": "The New Bar", 
  "information": `<b>Address</b>: Student Centre, College Rd, University College, Cork <br> 
  <b>Phone</b>: +3535 21 4903036 <br>
  <a href="https://www.facebook.com/uccnewbar/”>Website Here</a>`},
];

// MY MARKERS CORK RESTAURANTS
var corkRestaurants = [
  {"lat": 51.9017396885161, "lng": -8.477328253986713, "name": "Nala’s Sri Lankan Curry Pot", 
  "information": `<b>Address</b>:  20 Popes Quay, Shandon, Cork, T23 X568, <br> 
  <b>Phone</b>: +3535 21 241 2053 <br>
  <a href="https://srilankancurrypotonline.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.8990873, "lng": -8.4765409, "name": "The Cornstore Restaurant", 
  "information": `<b>Address</b>:  41-43 Cornmarket St, Centre, Cork, T12 R886, <br> 
  <b>Phone</b>: +3535 21 427 4777 <br>
  <a href="https://cornstore.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.90159367318691, "lng": -8.468208235370792, "name": "Greenes Restaurant", 
  "information": `<b>Address</b>:  48 MacCurtain Street, Victorian Quarter, Cork, T23 F6EK, <br> 
  <b>Phone</b>: +3535 21 455 2279 <br>
  <a href="https://greenesrestaurant.com/" target=”_blank”>Website Here</a>`},

  {"lat": 51.8977774, "lng": -8.4778516, "name": "Liberty Grill", 
  "information": `<b>Address</b>:  32 Washington St, Centre, Cork, T12 T880, <br> 
  <b>Phone</b>: +3535 21 427 1049 <br>
  <a href="https://www.libertygrill.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.89717002371763, "lng": -8.473044869356851, "name": "Quinlans Seafood Bar Cork", 
  "information": `<b>Address</b>:  14 Princes St, Centre, Cork, T12 K2HW, <br> 
  <b>Phone</b>: +3535 21 241 8222 <br>
  <a href="https://www.kerryfish.com/seafoodbar/cork-city/" target=”_blank”>Website Here</a>`},

  {"lat": 51.89597, "lng": -8.48452, "name": "The River Club", 
  "information": `<b>Address</b>: Western Rd, The Lough, Cork, T12 X2AH, <br> 
  <b>Phone</b>: +3535 21 493 7772 <br>
  <a href="https://theriverclubcork.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.89879, "lng": -8.46415, "name": "Dockland", 
  "information": `<b>Address</b>: City Quarter, Lapp's Quay, Centre, Cork, <br> 
  <b>Phone</b>: +3535 21 427 3987 <br>
  <a href="http://www.dockland.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.89638, "lng": -8.47214, "name": "Jacobs on the Mall", 
  "information": `<b>Address</b>: 30 S Mall, Centre, Cork, T12 NY22, <br> 
  <b>Phone</b>: +3535 21 425 1530 <br>
  <a href="http://www.jacobsonthemall.com/" target=”_blank”>Website Here</a>`},
];

// MY MARKERS CORK TOURIST ATTRACTIONS
var corkTouristAttractions = [
  {"lat": 51.89763485, "lng": -8.474458553060941, "name": "The English Market", 
  "information": `<b>Address</b>:  Princes St, Centre, Cork, T12 YFV0, <br> 
  <b>Phone</b>: +3535 21 427 4407 <br>
  <a href="https://www.corkcity.ie/en/english-market/" target=”_blank”>Website Here</a>`},

  {"lat": 51.92906105, "lng": -8.570844312491802, "name": "Blarney Castle", 
  "information": `<b>Address</b>:  Monacnapa, Blarney, County Cork, T23 Y598, <br> 
  <b>Phone</b>: +3535 21 438 5252 <br>
  <a href="https://www.blarneycastle.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.8994775, "lng": -8.498986199989403, "name": "Cork City Gaol", 
  "information": `<b>Address</b>:  Convent Ave, Sunday's Well, Cork, T23 VX25 <br> 
  <b>Phone</b>: +3535 21 430 5022 <br>
  <a href="https://corkcitygaol.com/" target=”_blank”>Website Here</a>`},

  {"lat": 51.90014337765131, "lng": -8.472508158905393, "name": "Cork Ghost Tour", 
  "information": `<b>Address</b>: Emmett Pl, Centre, Cork <br> 
  <b>E-mail</b>: corkghosttour@gmail.com <br>
  <a href="https://corkghosttour.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.8998258, "lng": -8.473290418651, "name": "Crawford Art Gallery", 
  "information": `<b>Address</b>: Emmett Pl, Centre, Cork <br> 
  <b>Phone</b>: +353 21 480 5042 <br>
  <a href="https://crawfordartgallery.ie/" target=”_blank”>Website Here</a>`},

  {"lat": 51.90699, "lng": -8.46224, "name": "Collins Barracks Military Museum", 
  "information": `<b>Address</b>: Collins Barracks Old Gate, Old Youghal Rd, Montenotte, Cork <br> 
  <b>Phone</b>: +353 21 451 4252 <br>
  <a href="https://www.military.ie/en/public-information/defence-forces-museums/collins-barracks-museum/" target=”_blank”>Website Here</a>`},

  {"lat": 51.89629, "lng": -8.49435, "name": "Cork Public Museum", 
  "information": `<b>Address</b>: Fitzgerald Park, Cork <br> 
  <b>Phone</b>: +353 21 427 0679 <br>
  <a href="https://www.corkcity.ie/en/cork-public-museum/”>Website Here</a>`},

  {"lat": 51.89452, "lng": -8.47810, "name": "Elizabeth Fort", 
  "information": `<b>Address</b>: Barrack St, The Lough, Cork <br> 
  <b>Phone</b>: +353 21 497 5947 <br>
  <a href="http://elizabethfort.ie/”>Website Here</a>`},
];

// INFO OBJECT THAT WILL STORE THE INFO DISPLAYED IN EACH INFO WINDOW
var InfoObj = [];

// LOOPS OVER MARKS
  for(let i = 0; i < corkHotels.length; i++) {
    let contentString = '<h2>' + corkHotels[i].name + '</h2>' +
    '<p>' + corkHotels[i].information + '</p>';
  
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(corkHotels[i].lat, corkHotels[i].lng),
      map: map,
      title: corkHotels[i].name,
      animation: google.maps.Animation.DROP,
      icon: hotel,
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