// VARIABLES
  let map;

  // CITY VARIABLES 
  const dublin = { lat: 53.34664, lng: -6.271798 }
  // const cork = { lat: 51.898627, lng: -8.4705942 }
  // const galway = { lat: 53.2744122, lng: -9.0490632 }

  // ICON VARIABLES 
  const hotel = 'http://maps.google.com/mapfiles/kml/pal2/icon20.png'
  const bars = 'http://maps.google.com/mapfiles/kml/pal2/icon19.png'
  const restaurant = 'http://maps.google.com/mapfiles/kml/pal2/icon63.png'
  const touristAttractions = 'http://maps.google.com/mapfiles/kml/pal4/icon46.png'

// MAP FUNCTION START
  function initMap() {

    // MAP OPTIONS 
    const mapProp = {
      center: dublin,
      zoom: 15,
    };

// CREATE THE MAP 
    map = new google.maps.Map(document.getElementById("map"), mapProp);
