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
        console.log(beahtResult.population);

        let beaht_income = beahtResult.income;
        let beaht_population = beahtResult.population;
        let beaht_ht = beahtResult.ht
        let state_name_abb = beahtResult.state_abb

            // data for bubble chart was created
            var bubbleData = {
                x: beaht_income,
                y: beaht_ht,
                //text: state_name_abb ,
                mode: 'markers',
                marker: {
                    // color: state_name_abb,
                    size: beaht_population/10,
                    sizemode: 'area',
                    sizeref : 2*Math.max(beaht_population)/(10**2),
                    // sizemin : 4
                    }
            };
                var bubbleArray = [bubbleData];
                //  console.log(state_name_abb);
                 var layout4 = {
                    title: "Human Trafficking Count and State Income Per Capita",
                    xaxis: {title: "Income Per Capita $"},
                    yaxis:{title: "Human Trafficking Count"},
                    height: 600,
                    width: 1500,    
                 };
                 Plotly.newPlot("bubble", bubbleArray, layout4);

    });

}
function optionChanged(yearsID) {
    console.log(yearsID);
    bubbleChart(yearsID);

};
init();