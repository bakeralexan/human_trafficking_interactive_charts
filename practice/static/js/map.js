// const street= L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// const satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// let countyLines = L.layerGroup([]);
// let countyData = [];
// Create a map object, and set the default layers.
// const myMap = L.map("map", {
//     center: [35.0902, -105.7129],
//     zoom: 4,
//     layers: [street]
// });
// d3.json(countyURL).then(function createCounty(response) {

//     for (let i = 0; i < features.length; i++) {
//         let feature = features[i];
//         let properties = feature.properties;
//         let countyFIP = properties.COUNTYFP10;
//         let countyName = properties.NAMELSAD10;
//         let lat = properties.INTPTLAT10;
//         let lng = properties.INTPTLON10;
//         feature.addTo(countyData);
//         properties.addTo(countyData);
//         countyFIP.addTo(countyData);
//         countyName.addTo(countyData);
//         lat.addTo(countyData);
//         lng.addTo(countyData);
//         // function countyColor(humanTrafficking) {
//         //     if (humanTrafficking < 1) return "#98ee00";
//         //     else if (humanTrafficking < 2) return "#d4ee00";
//         //     else if (humanTrafficking < 3) return "#eecc00";
//         //     else if (humanTrafficking < 4) return "#ee9c00";
//         //     else if (humanTrafficking < 5) return "#ea822c";
//         //     else return "#ea2c2c";
//         // };

//         // let count = L.choropleth
//     };
//     console.log(countyData);
//     // countyLine.addTo(myMap);
// }); 
// createCounty(response);
// let legend = L.control({position: "bottomright"});
// // Then add all the details for the legend
// legend.onAdd = function() {
// let div = L.DomUtil.create("div", "info legend");

// const traffickingCount = [0, 1, 2, 3, 4, 5];
// const colors = [
//   "#98ee00",
//   "#d4ee00",
//   "#eecc00",
//   "#ee9c00",
//   "#ea822c",
//   "#ea2c2c"
// ];
// for (let i = 0; i < traffickingCount.length; i++) {
//     console.log(colors[i]);
//     div.innerHTML +=
//         "<i style='background: " + colors[i] + "'></i> " +
//         magnitudes[i] + (traffickingCount[i + 1] ? "&ndash;" + traffickingCount[i + 1] + "<br>" : "+");
//     }
//     return div;
// };

// // Finally, we our legend to the map.
// legend.addTo(myMap);




// const baseMaps = {
//     Street: street,
//     Satellite: satellite
// };
// const overlayMaps = {
//     Human_Trafficking: countyLines
// };


// // Pass our map layers into our layer control.
// // Add the layer control to the map.
// L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
// }).addTo(myMap); // We use the addTo() method to add objects to our map.

