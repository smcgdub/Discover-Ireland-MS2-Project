// VARIABLES
let map;
let marker;
let markers = [];
let infoWindow;
let position;

// CITY VARIABLES 
const galway = {
    lat: 53.2744122,
    lng: -9.0490632
};

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
        zoom: 14,
    };
    // CREATE THE MAP 
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // }

// MY MARKERS GALWAY HOTELS
var galwayHotels = [{
        "lat": 53.2710431999531, 
        "lng": -9.05432419355871, 
        "name": "The Residence Hotel", 
        "information": `<b>Address</b>: 14 Quay St, Galway, H91 P628 <br> 
                        <b>Phone</b>: +3535 91 569 600 <br>
                        <b>About</b>: The Residence Hotel Galway is a boutique townhouse located in cultural Latin Quarter of the vibrant Galway city 
                        <br><br>
                        <a href="https://www.theresidencehotel.ie/en/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27505655643179, 
        "lng": -9.04616004907515, 
        "name": "The Forster Court Hotel", 
        "information": `<b>Address</b>: Forster St, Galway, H91 PY7E <br> 
                        <b>Phone</b>: +3535 91 564 111 <br>
                        <b>About</b>: Galway's newest city centre hotel. The Forster Court Hotel is a stylish, boutique hotel in ideally situated for those exploring Galway 
                        <br><br>
                        <a href="https://www.theforstercourt.ie/en/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.2703762, 
        "lng": -9.0530298, 
        "name": "The House Hotel", 
        "information": `<b>Address</b>: Spanish Parade, Latin Quarter, Galway, H91 X309 <br> 
                        <b>Phone</b>: +3535 91 538 900 <br>
                        <b>About</b>: 4 Star Boutique Galway City Centre Hotel 
                        <br><br>
                        <a href="https://www.thehousehotel.ie/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.2745383, 
        "lng": -9.0469838, 
        "name": "Park House Hotel", 
        "information": `<b>Address</b>: 18 Forster St, Eyre Square, Galway, H91 PCF8 <br> 
                        <b>Phone</b>: +3535 91 564 924 <br>
                        <b>About</b>: upscale hotel in a grand Victorian-style stone building with a columned entrance is a 2-minute walk from Eyre Square 
                        <br><br>
                        <a href="https://www.parkhousehotel.ie/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27327719258493, 
        "lng": -9.048736893591606, 
        "name": "Kinlay Hostel Galway", 
        "information": `<b>Address</b>: Merchants Rd, Eyre Square, Galway, H91 F2KT <br> 
                        <b>Phone</b>: +3535 91 565 244 <br>
                        <b>About</b>: Located on the corner of Eyre Square the multi award-winning Kinlay Hostel is a great base for exploring the city 
                        <br><br>
                        <a href="https://www.kinlaygalway.ie/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27546, 
        "lng": -9.06235, 
        "name": "Ash Grove Guesthouse", 
        "information": `<b>Address</b>: 6 Ash Grove, Galway, H91 XK35 <br> 
                        <b>Phone</b>: +3535 91 581 291 <br>
                        <b>About</b>: Ash Grove House is a quality guest house ideally situated in the heart of Galway City 
                        <br><br>
                        <a href="http://www.ashgrovehousegalway.com/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27077, 
        "lng": -9.04749, 
        "name": "Harbour Hotel", 
        "information": `<b>Address</b>: New Dock St, Galway, H91 E9PR <br> 
                        <b>Phone</b>: +3535 91 894 800 <br>
                        <b>About</b>: This upscale waterfront hotel is a 7-minute walk from Eyre Square 
                        <br><br>
                        <a href="https://www.harbour.ie" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27614, 
        "lng": -9.05244, 
        "name": "Woodquay Hostel", 
        "information": `<b>Address</b>: 23/24 Woodquay, Galway, H91 P8RP <br> 
                        <b>Phone</b>: +3535 91 562 618 <br>
                        <b>About</b>: Woodquay Hostel is a friendly, laid back, home away from home kind of place <br><br>
                        <a href="http://woodquayhostel.ie/" target=”_blank”>Website Here</a>`
      },
];

// MY MARKERS GALWAY BARS
var galwayBars = [
      {
        "lat": 53.27110518648743, 
        "lng": -9.053919060465876, 
        "name": "The Quays Bar", 
        "information": `<b>Address</b>: 11 Quay Street, Galway <br> 
                        <b>Phone</b>: +3535 91 568 347 <br>
                        <b>About</b>: Bar with stained glass, inlaid woods, Gothic arches and church pews, for live music and pub grub 
                        <br><br>
                        <a href="https://quaysgalway.ie/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27461586482922, 
        "lng": -9.048351798774188, 
        "name": "O'Connell's Bar", 
        "information": `<b>Address</b>: 8 Eyre Square, Galway, H91 FT22 <br> 
                        <b>Phone</b>: +3535 91 563 634 <br>
                        <b>About</b>: Traditional Irish bar & beer garden in the heart of Galway 
                        <br><br>
                        <a href="https://www.facebook.com/oconnellsbar/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27174653413569, 
        "lng": -9.054156048461468, 
        "name": "The Front Door Pub", 
        "information": `<b>Address</b>: 8 Cross Street Upper, Galway, H91 YY06 <br> 
                        <b>Phone</b>: +3535 91 563 757 <br>
                        <b>About</b>: Located in the heart of Galway's social scene, with a late bar and live music daily 
                        <br><br>
                        <a href="http://www.frontdoorpub.com/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.270025372440855, 
        "lng": -9.05989094661011, 
        "name": "Massimo Bar Galway", 
        "information": `<b>Address</b>: 10 William St W, Galway, H91 C2X3 <br> 
                        <b>Phone</b>: +3535 91 582 239 <br>
                        <b>About</b>: Stylish pub serving a modern menu of brunch and locally sourced dishes, plus cask ales and TV sport 
                        <br><br>
                        <a href="https://massimogalway.com/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.2710706181891, 
        "lng": -9.054340458904251, 
        "name": "1520 Bar", 
        "information": `<b>Address</b>: 14 Quay St, Galway, H91 P628 <br> 
                        <b>Phone</b>: +3535 91 569 600 <br>
                        <b>About</b>: 1520 Bar in the heart of the Latin Quarter on Quay St, with great food and drink 
                        <br><br>
                        <a href="https://1520.ie/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27529, 
        "lng": -9.05279, 
        "name": "Barr An Chaladh", 
        "information": `<b>Address</b>: Daly's Place, 3 Woodquay, Galway, H91 Y90F <br> 
                        <b>Phone</b>: +3535 91 895 762 <br>
                        <b>About</b>: This Bar is one of Galway's oldest establishments and its name "Barr an Chaladh" is the Irish for "Top of The Quay" 
                        <br><br>
                        <a href="https://barr-an-chaladh.business.site/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.26989, 
        "lng": -9.05700, 
        "name": "The Salt House", 
        "information": `<b>Address</b>: 4 Raven Terrace, Galway, H91 D9Y2 <br> 
                        <b>Phone</b>: +3535 91 441 550 <br>
                        <b>About</b>: A rare find in a major city. With over 120 bottled/ canned craft beers from right around the world 
                        <br><br>
                        <a href="http://www.galwaybaybrewery.com/salthouse/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.26988, 
        "lng": -9.05293, 
        "name": "Pálás Kitchen & Bar", 
        "information": `<b>Address</b>: 15 Merchants Rd Lower, Galway, H91 WK6P <br> 
                        <b>Phone</b>: +3535 91 394 076 <br>
                        <b>About</b>: Pálás Cinema has its very own in-house kitchen, open seven days a week, serving a range of food to appeal to everyone 
                        <br><br>
                        <a href="https://palas.ie/eat-drink/cinema-eat-drink/" target=”_blank”>Website Here</a>`
      },
];

// MY MARKERS GALWAY RESTAURANTS
var galwayRestaurants = [
      {
        "lat": 53.27121098114582, 
        "lng": -9.05703831389341, 
        "name": "BoTown Burger", 
        "information": `<b>Address</b>: 57 Dominick St Lower, Galway, H91 VP95 <br> 
                        <b>Phone</b>: +3535 91 534 834 <br>
                        <b>About</b>: the home of Craft Burgers & Beers in the heart of Galway's West End 
                        <br><br>
                        <a href="https://botown.ie/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27596460192951, 
        "lng": -9.049661671172132, 
        "name": "Apoema Bistro", 
        "information": `<b>Address</b>: Lydon Court, Bóthar Irwin, Galway, H91 AK09 <br> 
                        <b>Phone</b>: +3535 91 865 963 <br>
                        <b>About</b>: Apoema Bistro is an independent restaurant inspired, not only on the Portuguese and Brazilian cuisine 
                        <br><br>
                        <a href="https://www.apoemabistro.ie/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.26957125, 
        "lng": -9.05377675, 
        "name": "Ard Bia at Nimmos", 
        "information": `<b>Address</b>: Spanish Arch, The Long Walk, Galway, H91 E9XA <br> 
                        <b>Phone</b>: +3535 91 561 114 <br>
                        <b>About</b>: Festive cafe/restaurant with a quirky interior, serving creative Irish dishes with global pzazz 
                        <br><br>
                        <a href="http://www.ardbia.com/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.2715455, 
        "lng": -9.0533014, 
        "name": "Cava Bodega", 
        "information": `<b>Address</b>: 1 Middle St, Galway, H91 AK13 <br> 
                        <b>Phone</b>: +3535 91 539 884 <br>
                        <b>About</b>: Cava Bodega was established in 2008 by JP McMahon and Drigín Gaffey in order to bring something new to Galway and celebrate Spanish cooking 
                        <br><br>
                        <a href="https://www.cavarestaurant.ie/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.271036, 
        "lng": -9.057088, 
        "name": "Dela Restaurant", 
        "information": `<b>Address</b>: 51 Dominick St Lower, Galway, H91 E3F1 <br> 
                        <b>Phone</b>: +3535 91 449 252 <br>
                        <b>About</b>: The husband and wife team of Margaret and Joe Bohan specialise in plot to plate food at their Galway restaurant 
                        <br><br>
                        <a href="http://dela.ie/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27440, 
        "lng": -9.05178, 
        "name": "Zappis Restaurant", 
        "information": `<b>Address</b>: 16, 18 Eglinton St, Galway, H91 YX62 <br> 
                        <b>Phone</b>: +3535 91 565 425 <br>
                        <b>About</b>: Based in the heart of Galway city, we use local Irish ingredients & craft them with an authentic Italian twist 
                        <br><br>
                        <a href="https://zappisgalway.ie/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27209, 
        "lng": -9.05167, 
        "name": "Trieste Café & Wine Bar", 
        "information": `<b>Address</b>: 5 Buttermilk Walk, Middle St, Galway, H91 D2C4 <br> 
                        <b>Phone</b>: +3535 83 046 8241 <br>
                        <b>About</b>: Italian styled Café & Wine Bar, bringing a taste of gourmet Europe to Galway 
                        <br><br>
                        <a href="https://www.facebook.com/TriesteWineBar/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.26957, 
        "lng": -9.06119, 
        "name": "Kai Restaurant", 
        "information": `<b>Address</b>: 22 Sea Rd, Galway, H91 DX47 <br> 
                        <b>Phone</b>: +3535 91 526 003 <br>
                        <b>About</b>: Organic European dishes served in a bright setting with colorful chairs and rustic wooden tables 
                        <br><br>
                        <a href="http://www.kairestaurant.ie/" target=”_blank”>Website Here</a>`
      },
];

// MY MARKERS GALWAY TOURIST ATTRACTIONS
var galwayTouristAttractions = [
      {
        "lat": 52.9717877, 
        "lng": -9.4291244, 
        "name": "Cliffs Of Moher", 
        "information": `<b>Address</b>: Cliffs Of Moher, Lahinch, County Galway <br> 
                        <b>Phone</b>: +353 65 708 6141 <br>
                        <b>About</b>: Dramatic seaside cliffs featuring an 18-km. hiking path 
                        <br><br>
                        <a href="https://www.cliffsofmoher.ie/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.26001885, 
        "lng": -9.074074429225629, 
        "name": "National Aquarium of Ireland", 
        "information": `<b>Address</b>: Seapoint Promenade, Galway, H91 T2FD <br> 
                        <b>Phone</b>: +353 91 585 100 <br>
                        <b>About</b>: Aquarium featuring native Irish sealife, popular fish feeding sessions & touch pools 
                        <br><br>
                        <a href="https://www.nationalaquarium.ie/" target=”_blank”>Website Here</a>`},

      {
        "lat": 53.269770300000005, 
        "lng": -9.05342186303836, 
        "name": "Galway City Museum", 
        "information": `<b>Address</b>: Spanish Parade, Galway, H91 CX5P <br> 
                        <b>Phone</b>: +353 91 532 460 <br>
                        <b>About</b>: Galway City Museum collects, preserves and displays materials relating to the history of Galway City 
                        <br><br>
                        <a href="https://www.galwaycitymuseum.ie/?locale=en" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27155398168091, 
        "lng": -9.05370157445546, 
        "name": "The Latin Quarter", 
        "information": `<b>Address</b>: 22 High St, Galway, H91 VX4E <br> 
                        <b>Phone</b>: +353 91 530 000 <br>
                        <b>About</b>: Lots of evidence of Galway's medieval history within the Latin Quarter area which stretches from the city centre to the Spanish Arch 
                        <br><br>
                        <a href="https://www.facebook.com/latinquartergalway/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.2744475, 
        "lng": -9.049333276783623, 
        "name": "Eyre Square", 
        "information": `<b>Address</b>: Eyre Square, Galway <br> 
                        <b>About</b>: An ideal place for stretching out on the green with the sun on your face or just relaxing and people watching 
                        <br><br>
                        <a href="https://en.wikipedia.org/wiki/Eyre_Square" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27247, 
        "lng": -9.05336, 
        "name": "Legend of the Claddagh Ring", 
        "information": `<b>Address</b>: 26 Shop St, Galway, H91 E653 <br> 
                        <b>Phone</b>: +353 91 562 554 <br>
                        <b>About</b>: Claddagh Ring visitor center in the heart of Galway city. Watch the movie, see how a Claddagh ring is made 
                        <br><br>
                        <a href="http://claddaghlegend.com/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27011, 
        "lng": -9.05808, 
        "name": "Galway's Westend", 
        "information": `<b>Address</b>: Galways Westend, Dominick St Lower, Galway <br> 
                        <b>About</b>: Home to Ireland's best contemporary eateries, bar venues and of course live music as well as local independent store and people 
                        <br><br>
                        <a href="https://thisisgalway.ie/galways-west-end/" target=”_blank”>Website Here</a>`
      },

      {
        "lat": 53.27774, 
        "lng": -9.06245, 
        "name": "Quadrangle Building - National University Of Ireland", 
        "information": `<b>Address</b>: National University of Ireland, Galway <br> 
                        <b>Phone</b>: +353 91 524411 <br>
                        <b>About</b>: The Quadrangle building, built in local limestone in a Tudor Gothic architectural style, is modelled on Christ Church at the University of Oxford 
                        <br><br>
                        <a href="https://www.nuigalway.ie/about-us/who-we-are/our-history.html" target=”_blank”>Website Here</a>`
      },
];

// INFO OBJECT THAT WILL STORE THE INFO DISPLAYED IN EACH INFO WINDOW
    var InfoObj = [];

// REMOVE ALL MARKERS
    function deleteMarkers() {
        markers.forEach((marker) => {
            marker.setMap(null);
            marker = null;
        });
        markers = [];
    }

// ADD MARKER WITH DATA FROM EACH CATEGORY BEING CLICKED
    function addMarker(lat, lng, title, icon) {
        marker = new google.maps.Marker({
            position: {
                lat: lat,
                lng: lng
            },
            map: map,
            title: title,
            animation: google.maps.Animation.DROP,
            icon: icon,
        });
        markers.push(marker);
    }

// CLOSE ALL INFO WINDOWS
    function closeOtherInfo() {
        if (InfoObj.length > 0) {
            InfoObj[0].set("marker", null);
            InfoObj[0].close();
            InfoObj[0].length = 0;
        }
    }

// GALWAY HOTELS BUTTON CLICKED 
    $("#galway-hotels").click(function() {
        deleteMarkers();
        galwayHotels.forEach((galwayHotels) => {
            infoWindow = new google.maps.InfoWindow;
            context = '<h2>' + galwayHotels.name + '</h2>' + '<p>' + galwayHotels.information + '</p>';

            // CREATE MARKER
            addMarker(galwayHotels.lat, galwayHotels.lng, galwayHotels.name, hotel);

            // CREATE INFO WINDOW AND BIND TO EACH MARKER
            addInfoWindow(marker, map, infoWindow, context);
        });

        function addInfoWindow(marker, map, infoWindow, context) {
            google.maps.event.addListener(marker, "click", function() {
                closeOtherInfo();
                infoWindow.setContent(context);
                infoWindow.open(map, marker);
                InfoObj[0] = infoWindow;
            });
        }
    });

// GALWAY BARS BUTTON CLICKED 
    $("#galway-bars").click(function() {
        deleteMarkers();
        galwayBars.forEach((galwayBars) => {
            infoWindow = new google.maps.InfoWindow;
            context = '<h2>' + galwayBars.name + '</h2>' + '<p>' + galwayBars.information + '</p>';

            // CREATE MARKER
            addMarker(galwayBars.lat, galwayBars.lng, galwayBars.name, bars);

            // CREATE INFO WINDOW AND BIND TO EACH MARKER
            addInfoWindow(marker, map, infoWindow, context);
        });

        function addInfoWindow(marker, map, infoWindow, context) {
            google.maps.event.addListener(marker, "click", function() {
                closeOtherInfo();
                infoWindow.setContent(context);
                infoWindow.open(map, marker);
                InfoObj[0] = infoWindow;
            });
        }
    });

// GALWAY RESTAURANTS BUTTON CLICKED 
    $("#galway-restaurants").click(function() {
        deleteMarkers();
        galwayRestaurants.forEach((galwayRestaurants) => {
            infoWindow = new google.maps.InfoWindow;
            context = '<h2>' + galwayRestaurants.name + '</h2>' + '<p>' + galwayRestaurants.information + '</p>';

            // CREATE MARKER
            addMarker(galwayRestaurants.lat, galwayRestaurants.lng, galwayRestaurants.name, restaurant);

            // CREATE INFO WINDOW AND BIND TO EACH MARKER
            addInfoWindow(marker, map, infoWindow, context);
        });

        function addInfoWindow(marker, map, infoWindow, context) {
            google.maps.event.addListener(marker, "click", function() {
                closeOtherInfo();
                infoWindow.setContent(context);
                infoWindow.open(map, marker);
                InfoObj[0] = infoWindow;
            });
        }
    });

// GALWAY TOURIST ATTRACTIONS BUTTON CLICKED
    $("#galway-tourist-attractions").click(function() {
        deleteMarkers();
        galwayTouristAttractions.forEach((galwayTouristAttractions) => {
            infoWindow = new google.maps.InfoWindow;
            context = '<h2>' + galwayTouristAttractions.name + '</h2>' + '<p>' + galwayTouristAttractions.information + '</p>';

            // CREATE MARKER
            addMarker(galwayTouristAttractions.lat, galwayTouristAttractions.lng, galwayTouristAttractions.name, touristAttractions);

            // CREATE INFO WINDOW AND BIND TO EACH MARKER
            addInfoWindow(marker, map, infoWindow, context);
        });

        function addInfoWindow(marker, map, infoWindow, context) {
            google.maps.event.addListener(marker, "click", function() {
                closeOtherInfo();
                infoWindow.setContent(context);
                infoWindow.open(map, marker);
                InfoObj[0] = infoWindow;
            });
        }
    });
  }