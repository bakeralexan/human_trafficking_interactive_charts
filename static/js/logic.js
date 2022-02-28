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



// // display the data
function optionChanged(yearsID) {
    console.log(yearsID);
    barChart(yearsID);
    pieFunc(yearsID);

};
init();