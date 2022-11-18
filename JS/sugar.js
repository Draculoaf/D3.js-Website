//Data from https://www.popsugar.com/fitness/How-Much-Sugar-Soda-43838864
const sugarData = [
  { name: "Cocoa-Cola", sugar: 39 },
  { name: "Sprite", sugar: 38 },
  { name: "Fanta", sugar: 28 },
  { name: "Mountain Dew", sugar: 46 },
  { name: "Pepsi", sugar: 41 },
  { name: "7 Up", sugar: 38 },
];

const height = 800;
const width = 800;

const chartContainer = d3
  .select("#d3-container-1")
  //.append("chartContainer")
  .attr("width", width)
  .attr("height", height);
//.attr("viewBox", [0, 0, width, height])

const chart = chartContainer.append("g");

const xScale = d3.scaleBand().rangeRound([0, width]).padding(0.1);
const yScale = d3.scaleLinear().range([height, 0]);

xScale.domain(sugarData.map((d) => d.name));
yScale.domain([0, d3.max(sugarData, (d) => d.price) + 1]);

chart
  .selectAll(".bar")
  .data(sugarData)
  .enter()
  .append("rect")
  .classed(".bar", true)
  .attr("height", (data) => height - yScale(data.price))
  .attr("width", xScale.bandwidth())
  .attr("x", (data) => xScale(data.name))
  .attr("y", (data) => yScale(data.sugar));

function xAxis(g) {
  g.attr("transform", "translate(0,{$height-margin.bottom})")
    .call(d3.axisBottom(xScale).tickFormat((i) => data[i].name))
    .append("g")
    .call(xAxis);
}

function yAxis(g) {
  g.attr("transform", "translate(${margin.left,0")
    .call(d3.axisLeft(yScale).ticks(null, sugarData.format))
    .append("g")
    .call(yAxis);
}
