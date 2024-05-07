var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_POLIGON_1 = new ol.format.GeoJSON();
var features_POLIGON_1 = format_POLIGON_1.readFeatures(json_POLIGON_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGON_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGON_1.addFeatures(features_POLIGON_1);
var lyr_POLIGON_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLIGON_1, 
                style: style_POLIGON_1,
                popuplayertitle: "POLIGON",
                interactive: true,
    title: 'POLIGON<br />\
    <img src="styles/legend/POLIGON_1_0.png" /> HGU - I<br />\
    <img src="styles/legend/POLIGON_1_1.png" /> HGU - II<br />\
    <img src="styles/legend/POLIGON_1_2.png" /> KASDASTRAL<br />\
    <img src="styles/legend/POLIGON_1_3.png" /> LAUT<br />\
    <img src="styles/legend/POLIGON_1_4.png" /> <br />'
        });
var format_POLILENE_2 = new ol.format.GeoJSON();
var features_POLILENE_2 = format_POLILENE_2.readFeatures(json_POLILENE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLILENE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLILENE_2.addFeatures(features_POLILENE_2);
var lyr_POLILENE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLILENE_2, 
                style: style_POLILENE_2,
                popuplayertitle: "POLILENE",
                interactive: true,
    title: 'POLILENE<br />\
    <img src="styles/legend/POLILENE_2_0.png" /> Batas Laut<br />\
    <img src="styles/legend/POLILENE_2_1.png" /> Jalan Lokal<br />\
    <img src="styles/legend/POLILENE_2_2.png" /> Jalan Provinsi<br />\
    <img src="styles/legend/POLILENE_2_3.png" /> Lokasi<br />\
    <img src="styles/legend/POLILENE_2_4.png" /> Sungai<br />\
    <img src="styles/legend/POLILENE_2_5.png" /> <br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_POLIGON_1.setVisible(true);lyr_POLILENE_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_POLIGON_1,lyr_POLILENE_2];
lyr_POLIGON_1.set('fieldAliases', {'fid': 'fid', 'FID_1': 'FID_1', 'Keterangan': 'Keterangan', });
lyr_POLILENE_2.set('fieldAliases', {'fid': 'fid', 'FID_1': 'FID_1', 'KETERANGAN': 'KETERANGAN', });
lyr_POLIGON_1.set('fieldImages', {'fid': 'TextEdit', 'FID_1': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_POLILENE_2.set('fieldImages', {'fid': '', 'FID_1': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_POLIGON_1.set('fieldLabels', {'fid': 'no label', 'FID_1': 'no label', 'Keterangan': 'no label', });
lyr_POLILENE_2.set('fieldLabels', {'fid': 'no label', 'FID_1': 'no label', 'KETERANGAN': 'no label', });
lyr_POLILENE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});