d3.json("ht_2013_2020_v3.json").then(data => console.log(data))
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
     bubbleChart(yearsID);
    });
};
function bubbleChart (yearLoc){
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
                    width: 1000,    
                    plot_bgcolor:"lightgray"
                 };
                 Plotly.newPlot("bubble", bubbleArray, layout4);
    });
}
function optionChanged(yearsID) {
    console.log(yearsID);
    bubbleChart(yearsID);
};
init();d3.json("Resources/median_income_state.json").then(data => console.log(data))