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
    layers: [satellite, countyData]
});

async function dataLoad() {
    const dataset = await d3.json("Resources/ht_2013_2020v3.json").then(function (response) {

        let metadata = response.metadata1;



        for (let i = 0; i < metadata.length; i++) {
            let datum = metadata[i];
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
                radius: markerSize(count)
            }).bindPopup(`<h1>${location}</h1><hr><h3>Year: ${year}<br>Count: ${count}</h3>`);
            county.addTo(countyData);

            // function filterBYear(response, y) {
            //     f = response.filter(function(d) {
            //         return d.year == y;
            //     });
            //     return f;
            // }
            // filterByYear(k, 2013);
            // filterByYear(k, 2014);
            // filterByYear(k, 2015);
            // filterByYear(k, 2016);
            // filterByYear(k, 2017);
            // filterByYear(k, 2018);
            // filterByYear(k, 2019);
            // filterByYear(k, 2020);

            
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

        function init() {
            let trace1 = [{
                values: response.offense_data.count_1,
                labels:Offense_Subcategory,
                type:"pie"
            }];
            let layout = {
                height: 600,
                width: 800
            };
            Plotly.newPlot("pie", trace1, layout);
        })
        d3.selectAll("#selDataset").on("change", getData);
        function getData() {
            let dropdownMenu = d3.select("#selDataset");
            // Assign the value of the dropdown menu option to a variable
            let datasetMenu = dropdownMenu.property("value");
            // Initialize an empty array for the country's data
            let subYear = [];
            let subYear = response.offense_data.year
            if (datasetMenu == '2013') {
                subYear = 2013;
            }
            else if (datasetMenu == '2014') {
                subYear = 2014;
            }
            else if (datasetMenu == '2015') {
                subYear = 2015;
            }
            else if (datasetMenu == '2016') {
                subYear = 2016;
            }
            else if (datasetMenu == '2017') {
                subYear = 2017;
            }
            else if (datasetMenu == '2018') {
                subYear = 2018;
            }
            else if (datasetMenu == '2019') {
                subYear = 2019;
            }
            else if (datasetMenu == '2020') {
                subYear = 2020;
            }
            // Call function to update the chart
            updatePlotly(subYear);
          }
    });
 
};
dataLoad();


const baseMaps = {
    Satellite: satellite,
    Street: street
};
const overlayMaps = {
    Human_Trafficking: countyData
};

// Pass our map layers into our layer control.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap); // We use the addTo() method to add objects to our map.

  // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }