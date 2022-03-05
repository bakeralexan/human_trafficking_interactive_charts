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
     bubbleChart(yearsID)

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
        let layoutPie = {
            height: 600,
            width: 800,
            title: "Human Trafficking Subcategory By Year in the United States 2013-2020"
        };
        Plotly.newPlot("pie", pieTrace, layoutPie);
    });
};

function bubbleChart(yearLoc){
    d3.json('ht_2013_2020_v3.json').then((data)=>{
        let beaHt = data.metadata2;
        let beahtArray = beaHt.filter(object => object.year == yearLoc);
        let beahtResult = beahtArray[0]
        console.log(beahtResult.income);
        console.log( beahtResult.population);
    
        let beaht_income = beahtResult.income;
        let beaht_population = beahtResult.population;
        let beaht_ht = beahtResult.ht;
        let state_name_abb = beahtResult.state_abb;
 
        //scaling down the population data for size of the bubbles and creating color list for states
        var state_size = [];
        var state_color =[];
        var scale = 600000;
        for (var i = 0; i < beaht_population.length; i++){
            var currentSize = beaht_population[i]/scale;
            var currentColor = i*10;
            state_size.push(currentSize);
            state_color.push(currentColor);
        }
            // data for bubble chart is created
            let bubbleData = {
                x: beaht_income,
                y: beaht_ht,
                text: state_name_abb ,
                mode: 'markers',
                marker: {
                    color: state_color,
                    colorscale: 'Jet',
                    size: state_size,
                    line: {
                        color: 'black',
                        width: 2
                    }
                    
                }
            };
                let bubbleArray = [bubbleData];
                 console.log(state_name_abb);
                 let layout4 = {
                    title: "Human Trafficking Count and State Income Per Capita",
                    xaxis: {
                        title: "Income Per Capita $",
                        tick0: 0,
                        ticks: 'outside',
                        rangemode: 'tozero',
                        autorange: true
                    },
                    yaxis:{
                        title: "Human Trafficking Count",
                        tick0: 0,
                        ticks: 'outside'
                    },
                    height: 600,
                    width: 800,    
                    plot_bgcolor:"lightgray"
                 };
                 Plotly.newPlot("bubble", bubbleArray, layout4);
    });
}



// // display the data
function optionChanged(yearsID) {
    console.log(yearsID);
    barChart(yearsID);
    pieFunc(yearsID);
    bubbleChart(yearsID)


};
init();