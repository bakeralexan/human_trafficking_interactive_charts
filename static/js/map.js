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
    layers: [satellite]
});

async function dataLoad() {
    const dataset = await d3.json("ht_2013_2020_v3.json").then(function (response) {

        let metadata1 = response.metadata1;

        for (let i = 0; i < metadata1.length; i++) {
            let datum = metadata1[i];
            let year = datum.year;
            let location = datum.location;
            let count = datum.count;
            let Latitude = datum.Latitude;
            let Longitude = datum.Longitude;

            function markerSize(count) {
                if (count != 0 || count != "NaN") {
                    return count * 1000;
                } else{
                    count = 0;
                }
            };
            function colorChange(count) {
                if (count < 5) return "#98ee00";
                else if (count < 10) return "#d4ee00";
                else if (count < 15) return "#eecc00";
                else if (count < 20) return "#ee9c00";
                else if (count < 25) return "#ea822c";
                else return " #ea2c2c";
    
            }; 

           let county = L.circle([Latitude, Longitude], {
                color: colorChange(count),
                fillColor: colorChange(count),
                fillOpacity: 0.75,
                radius: markerSize(count),
            }).bindPopup(`<h1>${location}</h1><hr><h3>Year: ${year}<br>Count: ${count}</h3>`);
            county.addTo(countyData);


        };
        let legend = L.control({position: "bottomright"});
        // Then add all the details for the legend
        legend.onAdd = function() {
        let div = L.DomUtil.create("div", "info legend");
        
        const counts = [0, 5, 10, 15, 20, 25];
        const colors = [
          "#98ee00",
          "#d4ee00",
          "#eecc00",
          "#ee9c00",
          "#ea822c",
          "#ea2c2c"
        ];
        for (let i = 0; i < counts.length; i++) {
            // console.log(colors[i]);
            div.innerHTML +=
                "<i style='background: " + colors[i] + "'></i> " +
                counts[i] + (counts[i + 1] ? "&ndash;" + counts[i + 1] + "<br>" : "+");
            }
            return div;
        };
        legend.addTo(myMap);
    });
 
};
dataLoad();


const baseMaps = {
    Satellite: satellite,
    Street: street
};
const overlayMaps = {
    "Human Trafficking Counts": countyData
};

// Pass our map layers into our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap); // We use the addTo() method to add objects to our map.
