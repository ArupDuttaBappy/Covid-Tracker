// $(function(){
//   $('#world-covid-map').vectorMap({map: 'world_merc'});
// });
// $(function(){
//
//   map = new jvm.Map({
//     map: 'world_merc',
//     container: $('#world-covid-map'),
//     series: {
//       regions: [{
//         attribute: 'fill'
//       }]
//     }
//   });
//
//   var palette = ['yellow', 'green', 'red'];
//
//   generateColors = function(){
//     var colors = {},
//     key;
//
//     for (key in map.regions) {
//       colors[key] = palette[Math.floor(Math.random()*palette.length)];
//     }
//     return colors;
//   },
//   map;
//
//
//   map.series.regions[0].setValues(generateColors());
// })

$('#world-covid-map').vectorMap({
  map: 'world_merc',
  series: {
    regions: [{
      scale: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial'
    }]
  },
  onRegionTipShow: function(e, el, code){
    el.html(el.html()+' (GDP - '+code+')');
  }
});
