(function(){
    var baseLayer = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
        })
    });
    var map = new ol.Map({
        target: 'map',
        view: new ol.View({
            projection: 'EPSG:4326',
            center: [114, 36],
            zoom: 6
        }),
        layers: [baseLayer]
    })

    var drawControl = new ol.control.DrawControl();
    map.addControl(drawControl);
})()