var map = L.map('map').setView([0, 0], 0);

//override the default
L.TileLayer.MyCustomLayer = L.TileLayer.extend({
    getTileUrl: function(coords) {

      console.log(coords)

      let chunk = {
        x: Math.floor(coords.x/32),
        y: Math.floor(coords.y/32)
      }

      let chunkG = {
        x: Math.floor(coords.x/32),
        y: Math.floor(coords.y/32)
      }

      let zzz = ""

      for (var i = 8; i > coords.z; i--) {
        zzz += "z";
      }

      if (zzz.length != "") zzz += "_";

      let url = `https://dynmap.minecartrapidtransit.net/tiles/new/flat/${chunkG.x}_${chunkG.y}/${zzz}${chunk.x*32}_${chunk.y*32}.png`
      console.log(url)
      return url;

      // return L.TileLayer.prototype.getTileUrl.call(this, coords);
    }
});

// static factory as recommended by http://leafletjs.com/reference-1.0.3.html#class
L.tileLayer.myCustomLayer = function(templateUrl, options) {
    return new L.TileLayer.MyCustomLayer(templateUrl, options);
}

function f(t, n) {
    return t.replace(d, function(t, i) {
        var e = n[i];
        if (void 0 === e)
            throw new Error("No value provided for variable " + t);
        return "function" == typeof e && (e = e(n)),
        e
    })
}

L.tileLayer.myCustomLayer("https://dynmap.minecartrapidtransit.net/tiles/new/flat/{x}_{y}/{xm}_{ym}.png", {
    maxZoom: 8,
    id: 'map',
    tileSize: 128,
    zoomOffset: 0,
}).addTo(map)

var marker = L.marker([0, 0]).addTo(map);