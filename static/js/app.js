const street= L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
const satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let countyData = L.layerGroup([]);

const myMap = L.map("map", {
    center: [35.0902, -105.7129],
    zoom: 4,
    layers: [street]
});
let countyLines = L.layerGroup([]);
async function dataLoad() {
    const dataset = await d3.json("Resources/county.geo.json").then(function (response) {
         L.geoJson(response).addTo(countyLines);
        // let features = response.features;

        // for (let i = 0; i < features.length; i++) {
        //     let feature = features[i];
        //     let geometry = feature.geometry;
        //     let properties = feature.properties;
        //     let countyFIP = properties.COUNTYFP10;
        //     let countyName = properties.NAMELSAD10;

        //     let county = L.circle([geometry.coordinates[1], geometry.coordinates[0]], {
        //         color: colorChange(magnitude),
        //         fillColor: colorChange(magnitude),
        //         fillOpacity: 0.75,
        //         radius: markerSize(magnitude)
        //     }).bindPopup(`<h1> Magnitude: ${magnitude}</h1><hr><h3>Location: ${property.place}</h3>`);
        //     earthquakeMarker.addTo(earthquakeMarkers);
            
        // };

    });
    console.log(countyLines); 
};
dataLoad();


const baseMaps = {
    Street: street,
    Satellite: satellite
};
const overlayMaps = {
    Human_Trafficking: countyLines 
};

// Pass our map layers into our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap); // We use the addTo() method to add objects to our map.

