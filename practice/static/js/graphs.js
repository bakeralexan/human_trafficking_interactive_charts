// // //made a call to the json file.
// const file = "ht_2013_2020.json";

// const dataPromise = d3.json(file);

// console.log("Data Promise:", dataPromise);


// const jsonFile = async () => {
//     const data = await d3.json(file)
//     console.log("Data", data);
// }

// jsonFile()

// decided to retrieve using the shorthand way. making sure this works
d3.json("ht_2013_2020.json").then(data => console.log(data))


// now to populate dropdown with the year data
function init() {
    let dropDownMenu = d3.select("#selDataset"); 
//using => to call json file
    d3.json("ht_2013_2020.json").then(data => {
        let datesYear = data.dates;
        datesYear.forEach(years => {dropDownMenu.append("option").text(years).property("value", years)
     });
 // Assign the value of the dropdown menu option to a variable
     let yearsID = dropDownMenu.property("value");
     console.log(yearsID);
     barChart(yearsID);
     bubbleChart(yearsID);
    //  metaData(yearsID);
    });
};

// //create bar chart from locations
function barChart (yearLoc){
    d3.json('ht_2013_2020.json').then((data)=>{
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
                     title: "Human Trafficking Count by Location",
                    height: 500,
                     width: 900,    
                 };
                 Plotly.newPlot("bar", data1, layout);
         });
     };

function bubbleChart (yearLoc){
d3.json('ht_2013_2020.json').then((data)=>{
    let htLoc = data.metadata;
    let htArray = htLoc.filter(object => object.year == yearLoc);
    // let htResult = htArray;
    console.log(htArray);
//rename variables
    // let ht_years = htResult.year;
    // let ht_location = htResult.location;
    // let ht_count = htResult.count;

    
// trace was created for bubble chart
        let trace2 = {
            x: htArray.location,
            y: htArray.count,
        // text: ht_location,
        mode: 'markers',
        marker: {
            color: htArray.location,
            size: htArray.count,
        }
                };
                //array was created in order to plot bar chart
                let data2 = [trace2];
                console.log(location)
                let layout = {
                    title: "Human Trafficking Count by Location",
                height: 500,
                width: 1500,    
                };
                Plotly.newPlot("bubble", data2, layout);
        });
    };
    

// // display the data
function optionChanged(yearsID) {
    console.log(yearsID);
    barChart(yearsID);
    bubbleChart(yearsID);
    // metaData(namesID);
};
init();