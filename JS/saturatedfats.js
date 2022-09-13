//Data from https://www.eatthis.com/best-worst-chips-ranked/

const fatData = [
  { name: "Doritos", fat: 1 },
  { name: "Cheetos", fat: 1.5 },
  { name: "Fritos", fat: 1.5 },
  { name: "Lay's", fat: 1.5 },
  { name: "Pringles", fat: 2.5 },
  { name: "Cape Cod", fat: 0.5 },
];

const height = 800;
const width = 800;

const chartContainer = d3
  .select("#fat")
  .attr("width", width)
  .attr("height", height);
const chart = chartContainer.append("g");

const xScale = d3.scaleBand().rangeRound([0, width]).padding(0.1);
const yScale = d3.scaleLinear().range([height, 0]);

xScale.domain(fatData.map((d) => d.name));
yScale.domain([0, d3.max(fatData, (d) => d.price) + 1]);

chart
  .selectAll(".bar")
  .data(fatData)
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
    .call(d3.axisLeft(yScale).ticks(null, fatData.format))
    .append("g")
    .call(yAxis);
}
