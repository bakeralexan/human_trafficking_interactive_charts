let year = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

let count = [9, 78, 90, 325, 330, 277, 568, 778]

let trace1 = {
    x: year,
    y: count,
    type: 'bar'
  };
  
  let data = [trace1];
  
  let layout = {
    title: "Human Trafficking Count Per Year"
  };
  
  Plotly.newPlot("bar", data, layout);
