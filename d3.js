const data = [
  { name: "Cocoa-Cola", sugar: 39 },
  { name: "Sprite", sugar: 38 },
  { name: "Fanta", sugar: 28 },
  { name: "Mountain Dew", sugar: 46 },
  { name: "Pepsi", sugar: 41 },
  { name: "7 Up", sugar: 38 },
];

//Data from https://www.popsugar.com/fitness/How-Much-Sugar-Soda-43838864

const width = 800;
const height = 400;
const margin = { top: 50, bottom: 50, left: 50, right: 50 };

const svg = d3.select("#d3-container");
.append('svg')
.attr('height',height-margin.top-margin.bottom)
.attr('width',width-margin.left-margin.right)
.attr('viewBox',[0,0,width,height])
