//Data from https://www.popsugar.com/fitness/How-Much-Sugar-Soda-43838864
const sugarData = [
  { name: "Cocoa-Cola", sugar: 39 },
  { name: "Sprite", sugar: 38 },
  { name: "Fanta", sugar: 28 },
  { name: "Mountain Dew", sugar: 46 },
  { name: "Pepsi", sugar: 41 },
  { name: "7 Up", sugar: 38 },
];

// set the dimensions and margins of the graph
var margin = { top: 30, right: 30, bottom: 70, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3
  .select("#d3-container-1")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Initialize the X axis
var x = d3.scaleBand().range([0, width]).padding(0.2);
var xAxis = svg.append("g").attr("transform", "translate(0," + height + ")");

// Initialize the Y axis
var y = d3.scaleLinear().range([height, 0]);
var yAxis = svg.append("g").attr("class", "myYaxis");

// SVG align center
d3.select("#d3-container-1").attr("align", "center");
