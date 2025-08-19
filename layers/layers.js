var wms_layers = [];


        var lyr_MAPABASE_0 = new ol.layer.Tile({
            'title': 'MAPA BASE',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_ZONASACTUALES_1 = new ol.format.GeoJSON();
var features_ZONASACTUALES_1 = format_ZONASACTUALES_1.readFeatures(json_ZONASACTUALES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONASACTUALES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONASACTUALES_1.addFeatures(features_ZONASACTUALES_1);
var lyr_ZONASACTUALES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONASACTUALES_1, 
                style: style_ZONASACTUALES_1,
                popuplayertitle: 'ZONAS ACTUALES',
                interactive: true,
                title: '<img src="styles/legend/ZONASACTUALES_1.png" /> ZONAS ACTUALES'
            });
var format_ZONAS_PROP2_2 = new ol.format.GeoJSON();
var features_ZONAS_PROP2_2 = format_ZONAS_PROP2_2.readFeatures(json_ZONAS_PROP2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAS_PROP2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAS_PROP2_2.addFeatures(features_ZONAS_PROP2_2);
var lyr_ZONAS_PROP2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAS_PROP2_2, 
                style: style_ZONAS_PROP2_2,
                popuplayertitle: 'ZONAS_PROP2',
                interactive: true,
                title: '<img src="styles/legend/ZONAS_PROP2_2.png" /> ZONAS_PROP2'
            });
var format_PUNTOS_PROPUESTA2_3 = new ol.format.GeoJSON();
var features_PUNTOS_PROPUESTA2_3 = format_PUNTOS_PROPUESTA2_3.readFeatures(json_PUNTOS_PROPUESTA2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTOS_PROPUESTA2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOS_PROPUESTA2_3.addFeatures(features_PUNTOS_PROPUESTA2_3);
var lyr_PUNTOS_PROPUESTA2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTOS_PROPUESTA2_3, 
                style: style_PUNTOS_PROPUESTA2_3,
                popuplayertitle: 'PUNTOS_PROPUESTA2',
                interactive: true,
    title: 'PUNTOS_PROPUESTA2<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA2_3_0.png" /> 1505 - CASTILLA OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA2_3_1.png" /> 1512 - REFUGIO OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA2_3_2.png" /> 1815 - SIMON BOLIVAR OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA2_3_3.png" /> 1904 - ALAMOS OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA2_3_4.png" /> 90899 - PATIO BONITO OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA2_3_5.png" /> 90926 - VILLAS DE GRANADA OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA2_3_6.png" /> 90936 - FONTI-CENTRO 1 OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA2_3_7.png" /> 9942 - LA ESPERANZA OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA2_3_8.png" /> <br />' });
var format_ZONAS_PROP1p1_4 = new ol.format.GeoJSON();
var features_ZONAS_PROP1p1_4 = format_ZONAS_PROP1p1_4.readFeatures(json_ZONAS_PROP1p1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAS_PROP1p1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAS_PROP1p1_4.addFeatures(features_ZONAS_PROP1p1_4);
var lyr_ZONAS_PROP1p1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAS_PROP1p1_4, 
                style: style_ZONAS_PROP1p1_4,
                popuplayertitle: 'ZONAS_PROP1 — p1',
                interactive: true,
                title: '<img src="styles/legend/ZONAS_PROP1p1_4.png" /> ZONAS_PROP1 — p1'
            });
var format_PUNTOS_PROPUESTA1_5 = new ol.format.GeoJSON();
var features_PUNTOS_PROPUESTA1_5 = format_PUNTOS_PROPUESTA1_5.readFeatures(json_PUNTOS_PROPUESTA1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUNTOS_PROPUESTA1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTOS_PROPUESTA1_5.addFeatures(features_PUNTOS_PROPUESTA1_5);
var lyr_PUNTOS_PROPUESTA1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTOS_PROPUESTA1_5, 
                style: style_PUNTOS_PROPUESTA1_5,
                popuplayertitle: 'PUNTOS_PROPUESTA1',
                interactive: true,
    title: 'PUNTOS_PROPUESTA1<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA1_5_0.png" /> 1505 - CASTILLA OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA1_5_1.png" /> 1512 - REFUGIO OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA1_5_2.png" /> 1904 - ALAMOS OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA1_5_3.png" /> 90899 - PATIO BONITO OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA1_5_4.png" /> 90922 - FERIAS OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA1_5_5.png" /> 90926 - VILLAS DE GRANADA OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA1_5_6.png" /> 90936 - FONTI-CENTRO 1 OF<br />\
    <img src="styles/legend/PUNTOS_PROPUESTA1_5_7.png" /> 9942 - LA ESPERANZA OF<br />' });

lyr_MAPABASE_0.setVisible(true);lyr_ZONASACTUALES_1.setVisible(true);lyr_ZONAS_PROP2_2.setVisible(true);lyr_PUNTOS_PROPUESTA2_3.setVisible(true);lyr_ZONAS_PROP1p1_4.setVisible(true);lyr_PUNTOS_PROPUESTA1_5.setVisible(true);
var layersList = [lyr_MAPABASE_0,lyr_ZONASACTUALES_1,lyr_ZONAS_PROP2_2,lyr_PUNTOS_PROPUESTA2_3,lyr_ZONAS_PROP1p1_4,lyr_PUNTOS_PROPUESTA1_5];
lyr_ZONASACTUALES_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ZONAS_PROP2_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PUNTOS_PROPUESTA2_3.set('fieldAliases', {'C�digo PDV': 'C�digo PDV', 'Geo_Longitud (CX)': 'Geo_Longitud (CX)', 'Geo_ Latitud (CY)': 'Geo_ Latitud (CY)', 'SPT': 'SPT', 'ZONA ACTUAL': 'ZONA ACTUAL', 'ZONA PROPUESTA 2': 'ZONA PROPUESTA 2', 'NOMBRE': 'NOMBRE', 'DIRECCION ACTUALIZADA': 'DIRECCION ACTUALIZADA', 'CHANCE JUNIO': 'CHANCE JUNIO', 'INGRESOS JUNIO': 'INGRESOS JUNIO', });
lyr_ZONAS_PROP1p1_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PUNTOS_PROPUESTA1_5.set('fieldAliases', {'C�digo PDV': 'C�digo PDV', 'Geo_Longitud (CX)': 'Geo_Longitud (CX)', 'Geo_ Latitud (CY)': 'Geo_ Latitud (CY)', 'C�digo DANE': 'C�digo DANE', 'ZONA ACTUAL': 'ZONA ACTUAL', 'ZONA PROPUESTA 1': 'ZONA PROPUESTA 1', 'NOMBRE': 'NOMBRE', 'DIRECCION ACTUALIZADA': 'DIRECCION ACTUALIZADA', 'CHANCE JUNIO': 'CHANCE JUNIO', 'INGRESOS JUNIO': 'INGRESOS JUNIO', });
lyr_ZONASACTUALES_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ZONAS_PROP2_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PUNTOS_PROPUESTA2_3.set('fieldImages', {'C�digo PDV': 'Range', 'Geo_Longitud (CX)': 'TextEdit', 'Geo_ Latitud (CY)': 'TextEdit', 'SPT': 'TextEdit', 'ZONA ACTUAL': 'TextEdit', 'ZONA PROPUESTA 2': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCION ACTUALIZADA': 'TextEdit', 'CHANCE JUNIO': 'TextEdit', 'INGRESOS JUNIO': 'TextEdit', });
lyr_ZONAS_PROP1p1_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PUNTOS_PROPUESTA1_5.set('fieldImages', {'C�digo PDV': 'Range', 'Geo_Longitud (CX)': 'TextEdit', 'Geo_ Latitud (CY)': 'TextEdit', 'C�digo DANE': 'Range', 'ZONA ACTUAL': 'TextEdit', 'ZONA PROPUESTA 1': 'TextEdit', 'NOMBRE': 'TextEdit', 'DIRECCION ACTUALIZADA': 'TextEdit', 'CHANCE JUNIO': 'TextEdit', 'INGRESOS JUNIO': 'TextEdit', });
lyr_ZONASACTUALES_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_ZONAS_PROP2_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PUNTOS_PROPUESTA2_3.set('fieldLabels', {'C�digo PDV': 'inline label - visible with data', 'Geo_Longitud (CX)': 'hidden field', 'Geo_ Latitud (CY)': 'hidden field', 'SPT': 'inline label - always visible', 'ZONA ACTUAL': 'inline label - always visible', 'ZONA PROPUESTA 2': 'inline label - always visible', 'NOMBRE': 'inline label - always visible', 'DIRECCION ACTUALIZADA': 'inline label - always visible', 'CHANCE JUNIO': 'inline label - always visible', 'INGRESOS JUNIO': 'inline label - always visible', });
lyr_ZONAS_PROP1p1_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'no label', });
lyr_PUNTOS_PROPUESTA1_5.set('fieldLabels', {'C�digo PDV': 'inline label - always visible', 'Geo_Longitud (CX)': 'hidden field', 'Geo_ Latitud (CY)': 'hidden field', 'C�digo DANE': 'hidden field', 'ZONA ACTUAL': 'inline label - always visible', 'ZONA PROPUESTA 1': 'inline label - always visible', 'NOMBRE': 'inline label - always visible', 'DIRECCION ACTUALIZADA': 'inline label - always visible', 'CHANCE JUNIO': 'inline label - always visible', 'INGRESOS JUNIO': 'inline label - always visible', });
lyr_PUNTOS_PROPUESTA1_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});