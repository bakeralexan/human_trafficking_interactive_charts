d3.json("ht_2013_2020_v3.json").then(data => console.log(data))


// now to populate dropdown with the year data
function init() {
    let dropDownMenu = d3.select("#selDataset"); 
//using => to call json file
    d3.json("ht_2013_2020_v3.json").then(data => {
        let datesYear = data.dates;
        datesYear.forEach(years => {dropDownMenu.append("option").text(years).property("value", years)
     });
 // Assign the value of the dropdown menu option to a variable
     let yearsID = dropDownMenu.property("value");
     console.log(yearsID);
     barChart(yearsID);
     pieFunc(yearsID);
    //  mapFunc(yearsID);
    });
};

// //create bar chart from locations
function barChart (yearLoc){
    d3.json('ht_2013_2020_v3.json').then((data)=>{
        let htLoc = data.metadata;
        let htArray = htLoc.filter(object => object.year == yearLoc);
        let htResult = htArray[0]
        console.log(htResult.location);
        console.log(htResult.count);
    
        //rename variables
        // let ht_years = htResult.year;
        let ht_location = htResult.location;
        let ht_count = htResult.count;

        
        // trace was created for the bar chart
            let trace1 = {
             x: ht_location,
             y: ht_count,
            // text: ht_location,
            type: "bar",
            orientation: "v"
                 };
                 //array was created in order to plot bar chart
                 let data1 = [trace1];
                 let layout = {
                     title: "Human Trafficking Count by County in the United States 2013-2020",
                     height: 600,
                     width: 800, 
                     xaxis: {
                         automargin: true
                     }   
                 };
                 Plotly.newPlot("bar", data1, layout);
        });
    };

function pieFunc(yearLoc) {
    d3.json('ht_2013_2020_v3.json').then((data)=>{
        let offenseData = data.offense_data;
        let offenseArray = offenseData.filter(object => object.Year == yearLoc);
        let offenseResult = offenseArray[0];
        let subCount = offenseResult.count_1;

        let pieTrace = [{
            values: subCount,
            labels: ["Commercial Sex Acts", "Involuntary Servitude"],
            type:"pie"
        }];
        let layout = {
            height: 600,
            width: 800
        };
        Plotly.newPlot("pie", pieTrace, layout);
    });
};

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

// let countyData = L.layerGroup([]);

// const myMap = L.map("map", {
//     center: [35.0902, -105.7129],
//     zoom: 4,
//     layers: [satellite, countyData]
// });

// function mapFunc(yearLoc) {
//     d3.json('ht_2013_2020_v3.json').then((response)=>{

//         let metadata1 = response.metadata1;
//         console.log(metadata1);
//         let mapArray = metadata1.filter(object => object.year == yearLoc);
//         console.log(mapArray);
//         let mapResult = mapArray[0];
//         console.log(mapResult);


//         for (let i = 0; i < mapResult.length; i++) {
//             let datum = mapResult[i];
//             console.log(datum);
//             let mapYear = datum.year;
//             let location = datum.location;
//             let count = datum.count;
//             let Latitude = datum.Latitude;
//             let Longitude = datum.Longitude;

//             function markerSize(count) {
//                 if (count != 0 || count != "NaN") {
//                     return count * 1000;
//                 } else{
//                     count = 0;
//                 }
//             };
//             function colorChange(count) {
//                 if (count < 5) return "#98ee00";
//                 else if (count < 10) return "#d4ee00";
//                 else if (count < 15) return "#eecc00";
//                 else if (count < 20) return "#ee9c00";
//                 else if (count < 25) return "#ea822c";
//                 else return " #ea2c2c";
    
//             }; 

//             let county = L.circle([Latitude, Longitude], {
//                 color: colorChange(count),
//                 fillColor: colorChange(count),
//                 fillOpacity: 0.75,
//                 radius: markerSize(count)
//             }).bindPopup(`<h1>${location}</h1><hr><h3>Year: ${mapYear}<br>Count: ${count}</h3>`);
//             county.addTo(countyData);
            
//         };
//         let legend = L.control({position: "bottomright"});
//         // Then add all the details for the legend
//         legend.onAdd = function() {
//         let div = L.DomUtil.create("div", "info legend");
        
//         const counts = [0, 5, 10, 15, 20, 25];
//         const colors = [
//           "#98ee00",
//           "#d4ee00",
//           "#eecc00",
//           "#ee9c00",
//           "#ea822c",
//           "#ea2c2c"
//         ];
//         for (let i = 0; i < counts.length; i++) {
//             // console.log(colors[i]);
//             div.innerHTML +=
//                 "<i style='background: " + colors[i] + "'></i> " +
//                 counts[i] + (counts[i + 1] ? "&ndash;" + counts[i + 1] + "<br>" : "+");
//             }
//             return div;
//         };
//         legend.addTo(myMap);
//     });
// };

// // display the data
function optionChanged(yearsID) {
    console.log(yearsID);
    barChart(yearsID);
    pieFunc(yearsID);
    // mapFunc(yearsID);
};
init();