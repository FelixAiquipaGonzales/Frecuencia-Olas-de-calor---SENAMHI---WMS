### Caracteristicas resaltante del proyecto

Permite visualizar, analizar y superponer información geoespacial hidrometeorológica y climática oficial, confiable y oportuna, facilitando el acceso a datos complejos y gran volumen fácilmente interpretable.

Al ser un visor interactivo, facilita la toma de decisiones en tiempo real para autoridades, sectores productivos y comunidades ante fenómenos extremos o variaciones climáticas, mejorando la respuesta y planificación.

Integra diferentes fuentes y formatos mediante estándares abiertos y servicios interoperables (WMS, WFS), lo que garantiza actualización constante y combinación con otros datos geográficos relevantes.

QGIS, al ser software libre y de código abierto, ofrece flexibilidad y accesibilidad para desarrollar geovisores personalizados que respondan a necesidades específicas del SENAMHI e IDESEP, sin costos altos.

Promueve la difusión del conocimiento científico climático y meteorológico al poner datos oficiales a disposición de usuarios técnicos y no técnicos, contribuyendo a la cultura de prevención y adaptación al cambio climático.

Apoya en la monitorización y estudio detallado del clima, patrones hidrológicos y eventos extremos, vitales para sectores como agricultura, recursos hídricos, salud pública y gestión ambiental.

# GEOVISOR INTERACTIVO DE WEB MAPPING - FRECUENCIA DE OLAS DE CALOR

![](https://www.gob.pe/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MTMzMTQsInB1ciI6ImJsb2JfaWQifX0=--6fb0c941e8723378a0e3759d7726f076093a3452/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fbGltaXQiOltudWxsLDQ4XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--830247c4bafe7cadca50817d8559bf1a09e3aa28/logo-Senamhi_gob_pe.png)


![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

###Información en Linea.

> Programacion de mapas en Web

Proyecto de carrera de Geomatica.
                    
> "Geovisor Publicado en WEB", [Link](https://frecuenciaolas-decalor-aiquipa.web.app/)。

####HTML code

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi mapa</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <link rel="stylesheet" href="http://idesep.senamhi.gob.pe/geoserver/openlayers3/ol.css" type="text/css">
    <script src="http://idesep.senamhi.gob.pe/geoserver/openlayers3/ol.js" type="text/javascript"></script>
    <script type="text/javascript" src="http://idesep.senamhi.gob.pe/geovisoridesep/assets/plugins/openlayer/src/proj4js/proj4.js"></script>
    <style>
        #map{
            width:100%; 
            height:100vh
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <script type="text/javascript">
        var format = "image/png";
        var proyeccion = "EPSG:4326";
        var boundary = [-81.3899688720703, -18.4412956237793, -68.5886001586914, 0.0298568718135357];
        
        proj4.defs(proyeccion, "+proj=longlat +datum=WGS84 +no_defs");
        
        var projection = new ol.proj.Projection({
            code: proyeccion,
            units: 'degrees',
            axisOrientation: 'neu'
        });
        
        var view = new ol.View({
            projection: projection,
            center: [(boundary[0] + boundary[2]) / 2, (boundary[1] + boundary[3]) / 2]
        });
        
        var osm = new ol.layer.Tile({source: new ol.source.OSM()});
        
        var current_wms = new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: 'https://idesep.senamhi.gob.pe:443/geoserver/g_01_06/wms',
                params: {LAYERS: 'g_01_06:01_06_001_03_001_512_0000_00_00',
                    'VERSION': '1.0.0',
                    'FORMAT': format,
                    'TILED': true
                },
                serverType: 'geoserver'
            })
        });
        
        var map = new ol.Map({
            target: 'map',
            layers: [osm, current_wms],
            view: view
        });
        
        map.addControl(new ol.control.ZoomSlider());
        
        map.getView().fit(boundary, map.getSize());
    </script>
</body>
</html>
```

###Empresa desarrolladora - XGEOESPACE.

Exploration of Geomatics in Space Technology.

> "Pagina de la empresa", [Link](https://felix-aiquipa-gonzales.web.app/)
Imagen: Logo de la empresa a cargo del desarrollo.

![](https://felix-aiquipa-gonzales.web.app/Imagenes/Aiquipa.jpg)
