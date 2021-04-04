// VARIABLES
let map;
let marker;
let markers = [];
let infoWindow;
let position;

// CITY VARIABLES 
const dublin = {
    lat: 53.34664,
    lng: -6.271798
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
        center: dublin,
        zoom: 13,
    };
    // CREATE THE MAP 
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // }

    // MY MARKERS DUBLIN HOTELS
    var dublinHotels = [{
            "lat": 53.33897089760341,
            "lng": -6.256107687950135,
            "name": "The Shelbourne Hotel",
            "information": `<b>Address</b>: 27 St Stephen's Green, Dublin, D02 K224, <br> 
                        <b>Phone</b>: +3535 1 663 4500 <br>
                        <b>About</b>: Dublin's best 5 Star hotel located right on St Stephen Green 
                        <br><br>  
                        <a href="https://www.theshelbourne.com/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.35161855,
            "lng": -6.260316065714047,
            "name": "The Gresham Hotel",
            "information": `<b>Address</b>: 23 O'Connell Street Upper, Dublin, D01 C3W7, <br>
                        <b>Phone</b>: +353 1 874 6881 <br>
                        <b>About</b>: Stately 4 star hotel in a grand Georgian building overlooking the city center's main street 
                        <br><br>
                        <a href="https://www.gresham-hotels-dublin.com/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.339953550000004,
            "lng": -6.264855223428146,
            "name": "The Marlin Hotel",
            "information": `<b>Address</b>: 11 Bow Ln E, St Stephen's Green, Dublin, D02 AY81, <br>
                        <b>Phone</b>: +353 1 522 2000 <br>
                        <b>About</b>: Swish, intelligently designed, and with a definite added note of style 
                        <br><br>
                        <a href="https://www.marlinhotel.ie/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.3483874,
            "lng": -6.277675,
            "name": "Generator Hostel Smithfield",
            "information": `<b>Address</b>: Generator Hostel, Smithfield, Dublin, D07 F2VF, <br>
                        <b>Phone</b>: +353 1 901 0222 <br>
                        <b>About</b>: Award winning modern hostel located right next to the Jameson Distillery 
                        <br><br>
                        <a href="https://staygenerator.com/hostels/dublin?lang=en-GB&gclid=CjwKCAjwxuuCBhATEiwAIIIz0YWGaDpOxXDMo51eGQunYbMZkRj5MIJNbG0m5wi5prManHf_bGNBiBoCSXsQAvD_BwE&gclsrc=aw.ds" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.345388799999995,
            "lng": -6.241403637369489,
            "name": "The Clayton Hotel",
            "information": `<b>Address</b>: Sir John Rogerson's Quay, Docklands, Dublin, D02 YT21 <br>
                        <b>Phone</b>: +353 1 643 9500 <br>
                        <b>About</b>: Modern hotel in a seven storey, contemporary landmark building 
                        <br><br>
                        <a href="https://www.claytonhotelcardifflane.com/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34834,
            "lng": -6.25869,
            "name": "Wynn's Hotel Dublin",
            "information": `<b>Address</b>: 35-39 Abbey Street Lower, North City, D01 C9F8, <br>
                        <b>Phone</b>: +353 1 874 5131 <br>
                        <b>About</b>: Historic must-stay hotel in the heart of the city built in 1845 
                        <br><br>
                        <a href="https://www.wynnshotel.ie/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34307,
            "lng": -6.27042,
            "name": "Jurys Inn Christchurch Hotel",
            "information": `<b>Address</b>: 8 Christchurch Pl, Dublin 8, D08 REK7, <br>
                        <b>Phone</b>: +353 1 454 0000 <br>
                        <b>About</b>: Perfect city centre location to explore everything Dublin has to offer 
                        <br><br>
                        <a href="https://www.jurysinns.com/hotels/dublin/christchurch" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34673,
            "lng": -6.26577,
            "name": "The Morrison Hotel",
            "information": `<b>Address</b>: 15 - 19 Ormond Quay Lower, North City, Dublin, D01 K5X5, <br>
                        <b>Phone</b>: +353 1 887 2400 <br>
                        <b>About</b>: 4 star boutique hotel located in Dublin city Centre 
                        <br><br>
                        <a href="https://www.morrisonhotel.ie/" target=”_blank”>Website Here</a>`
        },
    ];

    // MY MARKERS DUBLIN BARS
    var dublinBars = [{
            "lat": 53.33815205,
            "lng": -6.254183518684092,
            "name": "O Donoghue's Bar",
            "information": `<b>Address</b>:  15 Merrion Row, Dublin, D02 PF50, <br> 
                        <b>Phone</b>: +3535 1 660 7194 <br>
                        <b>About</b>: Rustic lively pub with traditional irish music most nights 
                        <br><br>
                        <a href="https://www.odonoghues.ie/bar.htm" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.3407499,
            "lng": -6.25907377754813,
            "name": "Cafe En Sein",
            "information": `<b>Address</b>: 40 Dawson St, Dublin, D02 PX20 <br> 
                        <b>Phone</b>: +3535 1 677 4567 <br>
                        <b>About</b>: Elegant art nouveau bar spread over 3 floors 
                        <br><br>
                        <a href="https://www.cafeenseine.ie/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.3365559,
            "lng": -6.265921784893308,
            "name": "Whelans",
            "information": `<b>Address</b>: 25 Wexford St, Portobello, Dublin 2, D02 H527 <br> 
                        <b>Phone</b>: +3535 1 478 0766 <br>
                        <b>About</b>: Whelan's is Dublin's original live music venue & best indie nightclub 
                        <br><br>
                        <a href="http://www.whelanslive.com/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34865,
            "lng": -6.26670,
            "name": "The Church Late Bar",
            "information": `<b>Address</b>: Jervis St, Dublin, D01 YX64 <br> 
                        <b>Phone</b>: +3535 1 828 0102 <br>
                        <b>About</b>: Imposing church with cafe/bar and Irish restaurant surrounded by terraces 
                        <br><br>
                        <a href="https://www.thechurch.ie/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34846,
            "lng": -6.26033,
            "name": "The Oval Bar",
            "information": `<b>Address</b>: 78 Middle Abbey St, North City, D01 RW24 <br> 
                        <b>Phone</b>: +3535 1 872 1264 <br>
                        <b>About</b>: Authentic Irish Pub situated idyllically in the heart of Dublin City 
                        <br><br>
                        <a href="http://theovalbar.com/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34508,
            "lng": -6.26742,
            "name": "Porterhouse Temple Bar",
            "information": `<b>Address</b>: 16-18 Parliament St, Temple Bar, D02 VR94 <br> 
                        <b>Phone</b>: +3535 1 679 8847 <br>
                        <b>About</b>: Menu of own ales, lagers and stouts with an Irish menu and folksy atmosphere 
                        <br><br>
                        <a href="https://porterhousebrewco.ie/temple-bar/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34890,
            "lng": -6.27860,
            "name": "Oscars Cafe Bar",
            "information": `<b>Address</b>: 6 Smithfield, Dublin, D07 A034 <br> 
                        <b>Phone</b>: +3535 1 699 1999 <br>
                        <b>About</b>: Funky bar/restaurant with vintage furnishings, craft beers and world wines 
                        <br><br>
                        <a href="https://www.oscarscafebar.com/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34138,
            "lng": -6.26525,
            "name": "Capitol Lounge",
            "information": `<b>Address</b>: 1 Aungier St, Dublin 2, D02 HF72, <br> 
                        <b>Phone</b>: +3535 1 475 7166 <br>
                        <b>About</b>: Serving up a mix of excellent cocktails, great music and sophisticated surroundings since 1999 
                        <br><br>
                        <a href="https://www.capitol.ie/" target=”_blank”>Website Here</a>`
        },
    ];

    // MY MARKERS DUBLIN RESTAURANTS
    var dublinRestaurants = [{
            "lat": 53.3475713,
            "lng": -6.280232546861777,
            "name": "Token",
            "information": `<b>Address</b>:  72-74 Queen Street, Smithfield, Dublin, D07 T4CN, <br> 
                        <b>Phone</b>: +353 1 532 2699 <br>
                        <b>About</b>: Gourmet fast food, 3 bars, an event space and over 30 original arcade and pinball machines <br><br>
                        <a href="https://www.facebook.com/TokenDublin/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.3488762,
            "lng": -6.2788256,
            "name": "My Meat Wagon",
            "information": `<b>Address</b>:  Unit 7A, Block A, Smithfield Market, Dublin, D07 H977<br> 
                        <b>Phone</b>: +353 1 874 8172 <br>
                        <b>About</b>: BBQ Smoke joint, Serving up Smoked Meats done in a Texas style with an Irish twist 
                        <br><br>
                        <a href="http://mymeatwagon.ie/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.3431027,
            "lng": -6.2614859,
            "name": "Cornucopia",
            "information": `<b>Address</b>:  19-20 Wicklow St, Dublin, D02 FK27 <br> 
                          <b>Phone</b>: +353 1 677 7583 <br>
                          <b>About</b>: Vegetarian restaurant catering to various restricted diets 
                          <br><br>
                          <a href="https://cornucopia.ie/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.3473991,
            "lng": -6.2630623,
            "name": "Fusion Brazilian Grill",
            "information": `<b>Address</b>:  1 N Lotts, Northside, Dublin, D01 K8N3 <br> 
                        <b>Phone</b>: +353 89 493 0571 <br>
                        <b>About</b>: Brazilian All-You-Can-Eat Buffet 
                        <br><br>
                        <a href="https://www.facebook.com/FusionBrazilianRestaurant/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.3459765,
            "lng": -6.2626275,
            "name": "EatTokyo Sushi",
            "information": `<b>Address</b>:  Wellington Quay Wellington Quay, Temple Bar, Dublin 2, D02 NH04 <br> 
                        <b>Phone</b>: +353 1 534 8576 <br>
                        <b>About</b>: Japanese Noodle & Sushi Bar with a cosy ambience 
                        <br><br>
                        <a href="https://eatokyo.ie/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34871,
            "lng": -6.26874,
            "name": "Hilan Chinese and Korean Restaurant",
            "information": `<b>Address</b>: 45 Capel St, North City, Dublin, D01 E3E5 <br> 
                        <b>Phone</b>: +353 1 874 8677 <br>
                        <b>About</b>: Korean restaurant with great selection of options 
                        <br><br>
                        <a href="https://www.facebook.com/Hailanrestaurant/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.33482,
            "lng": -6.25449,
            "name": "Dax Restaurant",
            "information": `<b>Address</b>: Pembroke Street Upper Pembroke Street Upper, Dublin, D02 AK20 <br> 
                        <b>Phone</b>: +353 1 676 1494 <br>
                        <b>About</b>: Award winning Dax Restaurant is one of Ireland's premier places to dine 
                        <br><br>
                        <a href="https://www.dax.ie/restaurant/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34130,
            "lng": -6.26558,
            "name": "Darwins Restaurant",
            "information": `<b>Address</b>: 80 Aungier St, Dublin, D02 E286 <br> 
                        <b>Phone</b>: +353 1 475 7511 <br>
                        <b>About</b>: Contemporary international cuisine with an extensive menu catering for 'carnivorous, coeliac and vegetarian' diners 
                        <br><br>
                        <a href="https://www.darwins.ie/" target=”_blank”>Website Here</a>`
        },
    ];

    // MY MARKERS DUBLIN TOURIST ATTRACTIONS
    var dublinTouristAttractions = [{
            "lat": 53.34316685,
            "lng": -6.26843027418557,
            "name": "Dublin Castle",
            "information": `<b>Address</b>: Castle Street, Dublin, D02 XN27 <br> 
                        <b>Phone</b>: +353 1 645 8800 <br>
                        <b>About</b>: One of the most important buildings in Irish history built in 1204 
                        <br><br>
                        <a href="https://www.dublincastle.ie/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.358941099999996,
            "lng": -6.308561146481148,
            "name": "Dublin Zoo",
            "information": `<b>Address</b>: Saint James, Phoenix Park, Dublin, D08 WF88 <br> 
                        <b>Phone</b>: +353 1 474 8900 <br>
                        <b>About</b>: A must-see experience and the perfect day out for families, friends, couples and those visiting Dublin 
                        <br><br>
                        <a href="https://www.dublinzoo.ie/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.3588491,
            "lng": -6.330646672352769,
            "name": "Phoenix Park",
            "information": `<b>Address</b>: Phoenix Park, Dublin, D8 <br> 
                        <b>Phone</b>: +353 1 820 5800 <br>
                        <b>About</b>: The largest enclosed public park in in Europe 
                        <br><br>
                        <a href="http://phoenixpark.ie/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34193275,
            "lng": -6.286729742986431,
            "name": "Guinness Store House",
            "information": `<b>Address</b>: St. James's Gate, Dublin 8, D08 VF8H <br> 
                        <b>Phone</b>: +353 1 408 4800 <br>
                        <b>About</b>: Brewery experience telling the tale of Ireland's famous beer 
                        <br><br>
                        <a href="https://www.guinness-storehouse.com/en" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.3389828,
            "lng": -6.2573559,
            "name": "Viking Splash Tours",
            "information": `<b>Address</b>: St Stephens Green North, Dublin 2 <br> 
                        <b>Phone</b>: +353 1 707 6000 <br>
                        <b>About</b>: A great way to see the sights of Dublin via amphibious vehicle on both land and water 
                        <br><br>
                        <a href="https://www.facebook.com/VikingSplashDublin/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34397,
            "lng": -6.25674,
            "name": "The Book of Kells",
            "information": `<b>Address</b>: Trinity College, College Green, Dublin, D02 PN40 <br> 
                        <b>Phone</b>: +353 1 896 1000 <br>
                        <b>About</b>: The Book of Kells, Ireland's greatest cultural treasure, and marvel at the Long Room, one of the world's most beautiful libraries 
                        <br><br>
                        <a href="https://www.tcd.ie/visitors/book-of-kells/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34304,
            "lng": -6.27204,
            "name": "Dublinia Viking Museum",
            "information": `<b>Address</b>: St Michaels Hill Christ Church, Dublin 8 <br> 
                        <b>Phone</b>: +353 1 679 4611 <br>
                        <b>About</b>: Historical recreation museum focusing on the Viking and Medieval history of the city 
                        <br><br>
                        <a href="https://www.dublinia.ie/" target=”_blank”>Website Here</a>`
        },

        {
            "lat": 53.34838,
            "lng": -6.27735,
            "name": "Jameson Distillery",
            "information": `<b>Address</b>: Bow St, Smithfield, Dublin 7, D07 N9VH <br> 
                        <b>Phone</b>: +353 1 807 2355 <br>
                        <b>About</b>: The original site where Jameson Irish Whiskey was distilled until 1971 
                        <br><br>
                        <a href="https://www.jamesonwhiskey.com/en-IE/visit-us/jameson-distillery-bow-st" target=”_blank”>Website Here</a>`
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

    // DUBLIN HOTELS BUTTON CLICKED 
    $("#dublin-hotels").click(function() {
        deleteMarkers();
        dublinHotels.forEach((dubHotel) => {
            infoWindow = new google.maps.InfoWindow;
            context = '<h2>' + dubHotel.name + '</h2>' + '<p>' + dubHotel.information + '</p>';

            // CREATE MARKER
            addMarker(dubHotel.lat, dubHotel.lng, dubHotel.name, hotel);

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

    // DUBLIN BARS BUTTON CLICKED 
    $("#dublin-bars").click(function() {
        deleteMarkers();
        dublinBars.forEach((dublinBars) => {
            infoWindow = new google.maps.InfoWindow;
            context = '<h2>' + dublinBars.name + '</h2>' + '<p>' + dublinBars.information + '</p>';

            // CREATE MARKER
            addMarker(dublinBars.lat, dublinBars.lng, dublinBars.name, bars);

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

    // DUBLIN RESTAURANTS BUTTON CLICKED 
    $("#dublin-restaurants").click(function() {
        deleteMarkers();
        dublinRestaurants.forEach((dublinRestaurants) => {
            infoWindow = new google.maps.InfoWindow;
            context = '<h2>' + dublinRestaurants.name + '</h2>' + '<p>' + dublinRestaurants.information + '</p>';

            // CREATE MARKER
            addMarker(dublinRestaurants.lat, dublinRestaurants.lng, dublinRestaurants.name, restaurant);

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

    // DUBLIN TOURIST ATTRACTIONS BUTTON CLICKED
    $("#dublin-tourist-attractions").click(function() {
        deleteMarkers();
        dublinTouristAttractions.forEach((dublinTouristAttractions) => {
            infoWindow = new google.maps.InfoWindow;
            context = '<h2>' + dublinTouristAttractions.name + '</h2>' + '<p>' + dublinTouristAttractions.information + '</p>';

            // CREATE MARKER
            addMarker(dublinTouristAttractions.lat, dublinTouristAttractions.lng, dublinTouristAttractions.name, touristAttractions);

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