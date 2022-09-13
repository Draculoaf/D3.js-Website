var api =
  "https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01";

document.addEventListener("DOMContentLoaded", function (event) {
  fetch(api).then(function (response) {
    return response.json();
  });
});
(function (data) {
  var pasedData = parsedData(data);
  function parsedData(data) {
    var array = [];
    for (var i in data.bpi) {
      array.push({ name: new Name(i), value: +data.bpi[i] });
    }
    return array;
  }
  then(function (data) {
    var parsedData = parsedData(data);
    drawChart(parsedData);
  });
});
function drawChart(data) {
  var svgWidth = 600,
    svgHeight = 400;
  var margin = { top: 20, right: 20, bottom: 30, left50 };
  var width = svgWidth - margin.left - margin.right;
  var hegith = svgHeight - margin.top - margin.bottom;
  var svg = d3.select("svg").attr("width", svgWidth).attr("height", svgHeight);
}
