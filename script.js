/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Define marker path
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
var interfaceColors = new am4core.InterfaceColorSet();

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Mercator();

chart.legend = new am4maps.Legend();

// Add zoom control
chart.zoomControl = new am4maps.ZoomControl();

// Set initial zoom
chart.homeZoomLevel = 2.5;
chart.homeGeoPoint = {
  latitude: 51,
  longitude: -23
};

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.name = "World";
polygonSeries.fill=am4core.color("#fff")
polygonSeries.exclude = ["AQ"];
polygonSeries.useGeodata = true;
polygonSeries.mapPolygons.template.nonScalingStroke = true;


var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#cccccc");

// LINES FRANCE
var series5 = chart.series.push(new am4maps.MapArcSeries());
series5.name = "France";
series5.dataFields.multiGeoLine = "multiGeoLine";

var lineTemplate = series5.mapLines.template;
lineTemplate.nonScalingStroke = true;
lineTemplate.stroke=am4core.color("#A10E01");
lineTemplate.strokeWidth=1;
lineTemplate.line.strokeOpacity = 10;

var arrow = lineTemplate.arrow;
arrow.position = 1;
arrow.nonScaling = true;
arrow.fill=am4core.color("#A10E01");
arrow.width=5
arrow.height=5

var bullet = lineTemplate.lineObjects.create();
bullet.nonScaling = true;
bullet.position = 0;

var circle = bullet.createChild(am4core.Circle);
circle.radius = 5;
circle.fill = am4core.color("#fff");
circle.strokeWidth = 2;
circle.stroke = am4core.color("#A10E01");

series5.mapLines.template.line.controlPointDistance = 0.1;
series5.mapLines.template.line.controlPointPosition = 0.5;
series5.fill = am4core.color("#A10E01");

series5.data = [{
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 },
      {"latitude": 36.75, "longitude": 3.050000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 },
     {"latitude": -8.833333333333334, "longitude": 13.216667}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": -35.266666666666666, "longitude": 149.133333}

]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 },
      {"latitude": 23.716666666666665, "longitude": 90.400000}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 53.9, "longitude": 27.566667}


    ]
  ]
},{
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 50.833333333333336, "longitude": 4.333333}


    ]
]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 6.483333333333333, "longitude": 2.616667}


    ]
  ]
},{
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": -16.5, "longitude": -68.150000}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": -15.783333333333333, "longitude": -47.916667}

    ]
  ]
},{
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": -3.3666666666666667, "longitude": 29.350000}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 14.916666666666666, "longitude": -23.516667}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 11.55, "longitude": 104.916667}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 },
      {"latitude": -33.45, "longitude": -70.666667}


    ]
  ]
},{
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 4.6, "longitude": -74.083333}

    ]
  ]
},{
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": -21.2, "longitude": -159.766667}

    ]
  ]
},{
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 },
      {"latitude": 9.933333333333334, "longitude": -84.083333}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 },
      {"latitude": 45.8, "longitude": 16.000000}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 23.116666666666667, "longitude": -82.350000}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 50.083333333333336, "longitude": 14.466667}

]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": -4.316666666666666, "longitude": 15.300000}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 13.7, "longitude": -89.200000}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 59.43333333333333, "longitude": 24.716667}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 },
      {"latitude": 9.033333333333333, "longitude": 38.700000}


    ]
  ]
},{
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 60.166666666666664, "longitude": 24.933333}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 41.68333333333333, "longitude": 44.833333}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 5.55, "longitude": -0.216667}


    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 },
      {"latitude": 37.983333333333334, "longitude": 23.733333}


    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 18.533333333333335, "longitude": -72.333333}

    ]
  ]
},  {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 14.1, "longitude": -87.216667}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 28.6, "longitude": 77.200000}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 },
      {"latitude": 35.68333333333333, "longitude": 139.750000}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 31.95, "longitude": 35.933333}


    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 51.166666666666664, "longitude": 71.416667}


    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 42.666666666666664, "longitude": 21.166667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 56.95, "longitude": 24.100000}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 32.88333333333333, "longitude": 13.166667}


    ]
  ]
}, {
  "multiGeoLine": [
    [

      { "latitude": 48.866,  "longitude": 2.3333 },
      {"latitude": 54.68333333333333, "longitude": 25.316667}


    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 49.6, "longitude": 6.116667}


    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": -18.916666666666668, "longitude": 47.516667}


    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 3.1666666666666665, "longitude": 101.700000}


    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 },
     {"latitude": 35.88333333333333, "longitude": 14.500000}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, {"latitude": 43.733333333333334, "longitude": 7.416667}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 42.43333333333333, "longitude": 19.266667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": -41.3, "longitude": 174.783333}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 13.516666666666667, "longitude": 2.116667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": -25.266666666666666, "longitude": -57.666667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 48.866,  "longitude": 2.3333 }, {"latitude": -12.05, "longitude": -77.050000}
    ]
  ]
}, {
  "multiGeoLine": [
    [
   { "latitude": 48.866,  "longitude": 2.3333 }, {"latitude": 14.6, "longitude": 120.966667}
    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 52.25, "longitude": 21.000000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 },
      {"latitude": 44.43333333333333, "longitude": 26.100000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 55.75, "longitude": 37.600000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
 { "latitude": 48.866,  "longitude": 2.3333 },
      {"latitude": -1.95, "longitude": 30.050000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 24.65, "longitude": 46.700000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 1.2833333333333332, "longitude": 103.850000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 48.15, "longitude": 17.116667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 2.066666666666667, "longitude": 45.333333}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 },
     {"latitude": 59.333333333333336, "longitude": 18.050000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 13.75, "longitude": 100.516667}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 },
      {"latitude": 36.8, "longitude": 10.183333}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 24.466666666666665, "longitude": 54.366667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 },
     {"latitude": -34.85, "longitude": -56.166667}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 38.883333, "longitude": -77.000000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 41.31666666666667, "longitude": 69.250000}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": -17.733333333333334, "longitude": 168.316667}


    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 10.483333333333333, "longitude": -66.866667}


    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": 21.033333333333335, "longitude": 105.850000}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 48.866,  "longitude": 2.3333 },
      {"latitude": 15.35, "longitude": 44.200000}


    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 48.866,  "longitude": 2.3333 }, 
      {"latitude": -17.816666666666666, "longitude": 31.033333}


    ]
  ]
}];


// LINES USA

var series1 = chart.series.push(new am4maps.MapArcSeries());
series1.name = "United States";
series1.dataFields.multiGeoLine = "multiGeoLine";
series1.fill = am4core.color("#F91601");

var lineTemplate = series1.mapLines.template;
lineTemplate.nonScalingStroke = true;
lineTemplate.stroke=am4core.color("#F91601");
lineTemplate.strokeWidth=1;
lineTemplate.line.strokeOpacity = 10;

var arrow = lineTemplate.arrow;
arrow.position = 1;
arrow.nonScaling = true;
arrow.fill=am4core.color("#F91601");
arrow.width=5
arrow.height=5

var bullet = lineTemplate.lineObjects.create();
bullet.nonScaling = true;
bullet.position = 0;

var circle = bullet.createChild(am4core.Circle);
circle.radius = 5;
circle.fill = am4core.color("#fff");
circle.strokeWidth = 2;
circle.stroke = am4core.color("#F91601");

series1.mapLines.template.line.controlPointDistance = 0.1;
series1.mapLines.template.line.controlPointPosition = 0.5;

series1.data = [{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 7.4833333, "longitude": 134.63333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 28.6, "longitude": 77.2}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 42.683333, "longitude": 23.31666667}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 45.41666666666, "longitude": -75.700000}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 23.116666666, "longitude": -82.3500}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 64.15, "longitude": -21.9500}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 35.683333333, "longitude": 139.750000}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 52.25, "longitude": 21.00000}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 52.35, "longitude": 4.916667}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": -34.58333333, "longitude": -58.66666}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 48.8666666666, "longitude": 2.333333}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 32.88333333333, "longitude": 13.166667}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 14.6166666666666, "longitude": -90.516667}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 3.166666666666, "longitude": 101.7000}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 19.4333333333333, "longitude": -99.133333}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 44.433333333333, "longitude": 26.10000}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 51.5, "longitude": -0.083333}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 36.75, "longitude": 3.050000}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 53.9, "longitude": 27.566667}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 17.25, "longitude": -88.766667}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 6.48333333333333, "longitude": 2.616667}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": -16.5, "longitude": -68.150000}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": -15.783333333, "longitude": -47.916667}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 6.816666666666, "longitude": -5.266667}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 35.1666666666, "longitude": 33.366667}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 50.08333333333, "longitude": 14.466667}
    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 3.75, "longitude": 8.783333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 60.166666666666, "longitude": 24.933333}
    ]
  ]
},  {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 41.683333333333, "longitude": 44.833333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 52.516666666666, "longitude":13.4000}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 37.9833333333333, "longitude": 23.733333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 64.1833333333333, "longitude": -51.750000}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 14.1, "longitude": -87.216667}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 47.5, "longitude": 19.083333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 31.95, "longitude": 35.933333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": -1.2833333333333, "longitude": 36.816667}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 37.55, "longitude": 126.983333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 42.666666666666, "longitude": 21.166667}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 54.6833333333333, "longitude": 25.316667}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 42, "longitude": 21.433333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 12.65, "longitude": -8.00000}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 42.433333333333, "longitude": 19.266667}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 34.016666666666666, "longitude": -6.816667}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": -41.3, "longitude": 174.783333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 13.516666666666667, "longitude": 2.116667}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 33.6833333333333, "longitude": 73.05000}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": -12.05, "longitude": -77.05000}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 38.71666666666, "longitude": -9.133333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 55.75, "longitude": 37.600000}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 24.65, "longitude": 46.700000}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 48.15, "longitude": 17.116667}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 46.05, "longitude": 14.516667}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 6.916666666666667, "longitude": 79.833333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": -34.85, "longitude": -56.166667}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 59.3333333333333, "longitude": 18.0500}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 38.883333, "longitude": -77 },
      { "latitude": 50.43333333333333, "longitude": 30.516667}
    ]
  ]
}];


// LINES GERMANY

var series4 = chart.series.push(new am4maps.MapArcSeries());
series4.name = "Germany";
series4.dataFields.multiGeoLine = "multiGeoLine";
series4.fill = am4core.color("#FF5747");

var lineTemplate = series4.mapLines.template;
lineTemplate.nonScalingStroke = true;
lineTemplate.stroke=am4core.color("#FF5747");
lineTemplate.strokeWidth=1;
lineTemplate.line.strokeOpacity = 10;

var arrow = lineTemplate.arrow;
arrow.position = 1;
arrow.nonScaling = true;
arrow.fill=am4core.color("#FF5747");
arrow.width=5
arrow.height=5

var bullet = lineTemplate.lineObjects.create();
bullet.nonScaling = true;
bullet.position = 0;

var circle = bullet.createChild(am4core.Circle);
circle.radius = 5;
circle.fill = am4core.color("#fff");
circle.strokeWidth = 2;
circle.stroke = am4core.color("#FF5747");

series4.mapLines.template.line.controlPointDistance = 0.1;
series4.mapLines.template.line.controlPointPosition = 0.5;

series4.data = [{
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 30.05, "longitude": 31.250000}
    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 28.6, "longitude": 77.200000}

    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 9.033333333333333, "longitude": 38.700000}
]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
    {"latitude": 15.6, "longitude": 32.533333}

    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 23.716666666666665, "longitude": 90.400000}

    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 37.983333333333334, "longitude": 23.733333}

    ]
]
},{
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 35.7, "longitude": 51.416667}

    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 32.88333333333333, "longitude": 13.166667}

    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": -13.966666666666667, "longitude": 33.783333}

    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 33.68333333333333, "longitude": 73.050000}

    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 50.43333333333333, "longitude": 30.516667}

    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 41.31666666666667, "longitude": 69.250000}

    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 34.516666666666666, "longitude": 69.183333}

    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 41.31666666666667, "longitude": 19.816667}

    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 },
    {"latitude": -34.583333333333336, "longitude": -58.666667}

    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 40.166666666666664, "longitude": 44.500000}

    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 53.9, "longitude": 27.566667}

    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": -33.45, "longitude": -70.666667}

    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 39.916666666666664, "longitude": 116.383333}
]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
        {"latitude": 45.8, "longitude": 16.000000}

    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": -0.21666666666666667, "longitude": -78.500000}

    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 48.86666666666667, "longitude": 2.333333}

    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 41.68333333333333, "longitude": 44.833333}

    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 5.55, "longitude": -0.216667}

    ]
  ]
},{
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": -6.166666666666667, "longitude": 106.816667}

    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 33.333333333333336, "longitude": 44.400000}

    ]
  ]
},{
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 31.766666666666666, "longitude": 35.233333}

    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 31.95, "longitude": 35.933333}

    ]
  ]
},  {
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 42.666666666666664, "longitude": 21.166667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 29.366666666666667, "longitude": 47.966667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 35.88333333333333, "longitude": 14.500000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 47, "longitude": 28.850000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 47.916666666666664, "longitude": 106.916667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 34.016666666666666, "longitude": -6.816667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": -1.95, "longitude": 30.050000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 14.733333333333333, "longitude": -17.633333}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 44.833333333333336, "longitude": 20.500000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 40.4, "longitude": -3.683333}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 6.916666666666667, "longitude": 79.833333}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": -6.8, "longitude": 39.283333}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 }, 
      {"latitude": 0.31666666666666665, "longitude": 32.550000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 38.883333, "longitude": -77.000000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 52.5166,  "longitude": 13.4 },
      {"latitude": 21.033333333333335, "longitude": 105.850000}
    ]
  ]
}];


// Lines Great Britain
var series2 = chart.series.push(new am4maps.MapArcSeries());
series2.name = "United Kingdom";
series2.dataFields.multiGeoLine = "multiGeoLine";
series2.fill = am4core.color("#c7d3e5");

var lineTemplate = series2.mapLines.template;
lineTemplate.nonScalingStroke = true;
lineTemplate.stroke=am4core.color("#c7d3e5");
lineTemplate.strokeWidth=1;
lineTemplate.line.strokeOpacity = 10;

var arrow = lineTemplate.arrow;
arrow.position = 1;
arrow.nonScaling = true;
arrow.fill=am4core.color("#c7d3e5");
arrow.width=5
arrow.height=5

var bullet = lineTemplate.lineObjects.create();
bullet.nonScaling = true;
bullet.position = 0;

var circle = bullet.createChild(am4core.Circle);
circle.radius = 5;
circle.fill = am4core.color("#fff");
circle.strokeWidth = 2;
circle.stroke = am4core.color("#c7d3e5");

series2.mapLines.template.line.controlPointDistance = 0.1;
series2.mapLines.template.line.controlPointPosition = 0.5;

series2.data = [{
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 46.8131873, "longitude": 8.22421}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 54.251186, "longitude": -4.463196 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": -35.266666, "longitude": 149.133333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 39.9166666, "longitude": 116.383333 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 48.86666666, "longitude": 2.33333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 41.683333333, "longitude": 44.8333 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": -6.166666, "longitude": 106.81666 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 41.9, "longitude": 12.45 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 49.6, "longitude": 6.116667 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 34.0166666, "longitude": -6.816667 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 52.35, "longitude": 4.916667 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 8.9666666, "longitude": -79.533333 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": -12.05, "longitude": -77.05 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 52.25, "longitude": 21}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 388.716666, "longitude": -9.13333 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": -25.7, "longitude": 28.216667 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 40.4, "longitude": -3.683333 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 39.93333, "longitude": 32.866667 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 38.883333, "longitude": -77 }
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 51.5002, "longitude": -0.1262 },
      { "latitude": 41.316666, "longitude": 69.25 }
    ]
  ]
}];


// LINES Italy
var series7 = chart.series.push(new am4maps.MapArcSeries());
series7.name = "Italy"
series7.dataFields.multiGeoLine = "multiGeoLine";
series7.fill = am4core.color("#99a6ba");

var lineTemplate = series7.mapLines.template;
lineTemplate.nonScalingStroke = true;
lineTemplate.stroke=am4core.color("#99a6ba");
lineTemplate.strokeWidth=1;
lineTemplate.line.strokeOpacity = 10;

var arrow = lineTemplate.arrow;
arrow.position = 1;
arrow.nonScaling = true;
arrow.fill=am4core.color("#99a6ba");
arrow.width=5
arrow.height=5

var bullet = lineTemplate.lineObjects.create();
bullet.nonScaling = true;
bullet.position = 0;

var circle = bullet.createChild(am4core.Circle);
circle.radius = 5;
circle.fill = am4core.color("#fff");
circle.strokeWidth = 2;
circle.stroke = am4core.color("#99a6ba");

series7.mapLines.template.line.controlPointDistance = 0.1;
series7.mapLines.template.line.controlPointPosition = 0.5;

series7.data = [{
  "multiGeoLine": [
    [
     { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 34.516666666666666, "longitude": 69.183333}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 41.31666666666667, "longitude": 19.816667}


    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 43.86666666666667, "longitude": 18.416667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 12.366666666666667, "longitude": -1.516667}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 45.8, "longitude": 16.000000}


    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 13.7, "longitude": -89.200000}


    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 9.033333333333333, "longitude": 38.700000}


    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 48.86666666666667, "longitude": 2.333333}



    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 28.6, "longitude": 77.200000}



    ]
  ]
}, {
  "multiGeoLine": [
    [
   { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 31.95, "longitude": 35.933333}



    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 33.86666666666667, "longitude": 35.500000}


    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 41.12,  "longitude": 12.48 },
      {"latitude": 12.65, "longitude": -8.000000}


    ]
  ]
}, {
  "multiGeoLine": [
    [
   { "latitude": 41.12,  "longitude": 12.48 },
      {"latitude": -25.95, "longitude": 32.583333}



    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 16.8, "longitude": 96.150000}



    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 13.516666666666667, "longitude": 2.116667}


    ]
  ]
}, {
  "multiGeoLine": [
    [
  { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 31.766666666666666, "longitude": 35.233333}



    ]
  ]
}, {
  "multiGeoLine": [
    [
    { "latitude": 41.12,  "longitude": 12.48 },
      {"latitude": 41.9, "longitude": 12.450000}



    ]
  ]
}, {
  "multiGeoLine": [
    [
  { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 36.8, "longitude": 10.183333}



    ]
  ]
}, {
  "multiGeoLine": [
    [
   { "latitude": 41.12,  "longitude": 12.48 }, 
      {"latitude": 21.033333333333335, "longitude": 105.850000}


    ]
  ]
}];

// LINES CANADA
var series3 = chart.series.push(new am4maps.MapArcSeries());
series3.name = "Canada";
series3.dataFields.multiGeoLine = "multiGeoLine";
series3.fill = am4core.color("#324e75");

var lineTemplate = series3.mapLines.template;
lineTemplate.nonScalingStroke = true;
lineTemplate.stroke=am4core.color("#324e75");
lineTemplate.strokeWidth=1;
lineTemplate.line.strokeOpacity = 10;

var arrow = lineTemplate.arrow;
arrow.position = 1;
arrow.nonScaling = true;
arrow.fill=am4core.color("#324e75");
arrow.width=5
arrow.height=5

var bullet = lineTemplate.lineObjects.create();
bullet.nonScaling = true;
bullet.position = 0;

var circle = bullet.createChild(am4core.Circle);
circle.radius = 5;
circle.fill = am4core.color("#fff");
circle.strokeWidth = 2;
circle.stroke = am4core.color("#324e75");

series3.mapLines.template.line.controlPointDistance = 0.1;
series3.mapLines.template.line.controlPointPosition = 0.5;

series3.data = [{
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": 39.91666, "longitude": 116.383333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": 48.86666, "longitude": 2.33333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": 41.9, "longitude": 12.483333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": 31.95, "longitude": 35.93333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": -34.58333, "longitude": -58.666667}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": -33.45, "longitude": -70.66667}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": -12.05, "longitude": -77.05}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": -41.3, "longitude": 174.78333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": 64.15, "longitude": -21.95}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": 60.1666, "longitude": 24.93333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": 55.66666, "longitude": 12.58333}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": 59.3333, "longitude": 18.05}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": 55.75, "longitude": 37.6}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": 38.883333, "longitude": -77}
    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 45.416666, "longitude": -75.7 },
      { "latitude": 37.55, "longitude": 126.98333}
    ]
  ]
}];



// LINES JAPAN
var series6 = chart.series.push(new am4maps.MapArcSeries());
series6.name = "Japan";
series6.dataFields.multiGeoLine = "multiGeoLine";
series6.fill = am4core.color("#000000");

var lineTemplate = series6.mapLines.template;
lineTemplate.nonScalingStroke = true;
lineTemplate.stroke=am4core.color("#000000");
lineTemplate.strokeWidth=1;
lineTemplate.line.strokeOpacity = 10;

var arrow = lineTemplate.arrow;
arrow.position = 1;
arrow.nonScaling = true;
arrow.fill=am4core.color("#000000");
arrow.width=5
arrow.height=5

var bullet = lineTemplate.lineObjects.create();
bullet.nonScaling = true;
bullet.position = 0;

var circle = bullet.createChild(am4core.Circle);
circle.radius = 5;
circle.fill = am4core.color("#fff");
circle.strokeWidth = 2;
circle.stroke = am4core.color("#000000");

series6.mapLines.template.line.controlPointDistance = 0.1;
series6.mapLines.template.line.controlPointPosition = 0.5;

series6.data = [{
  "multiGeoLine": [
    [
      { "latitude": 35.168,  "longitude": 169.75 }, 
      {"latitude": 39.916666666666664, "longitude": 116.383333}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 35.168,  "longitude": 169.75 }, 
      {"latitude": 50.083333333333336, "longitude": 14.466667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 35.168,  "longitude": 169.75 }, 
      {"latitude": 60.166666666666664, "longitude": 24.933333}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 35.168,  "longitude": 169.75 }, 
      {"latitude": 0, "longitude": 0.000000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
      { "latitude": 35.168,  "longitude": 169.75 }, 
      {"latitude": 34.016666666666666, "longitude": -6.816667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 35.168,  "longitude": 169.75 }, 
      {"latitude": 48.15, "longitude": 17.116667}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 35.168,  "longitude": 169.75 }, 
      {"latitude": 59.333333333333336, "longitude": 18.050000}

    ]
  ]
}, {
  "multiGeoLine": [
    [
     { "latitude": 35.168,  "longitude": 169.75 }, 
      {"latitude": 51.5, "longitude": -0.083333}


    ]
  ]
}];