ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-10340323.792455, -2317236.124354, -6431639.914064, 314643.633561]);
var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_FRECUENCIADEOLASDECALORVERANO_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://idesep.senamhi.gob.pe:443/geoserver/g_01_06/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "01_06_001_03_001_512_0000_00_00",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'FRECUENCIA DE OLAS DE CALOR - VERANO',
                            popuplayertitle: 'FRECUENCIA DE OLAS DE CALOR - VERANO',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FRECUENCIADEOLASDECALORVERANO_3, 1]);
var lyr_FRECUENCIADEOLASDECALORPRIMAVERA_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://idesep.senamhi.gob.pe:443/geoserver/g_01_06/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "01_06_004_03_001_512_0000_00_00",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'FRECUENCIA DE OLAS DE CALOR - PRIMAVERA',
                            popuplayertitle: 'FRECUENCIA DE OLAS DE CALOR - PRIMAVERA',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FRECUENCIADEOLASDECALORPRIMAVERA_4, 1]);
var lyr_FRECUENCIADEOLASDECALOROTOO_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://idesep.senamhi.gob.pe:443/geoserver/g_01_06/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "01_06_002_03_001_512_0000_00_00",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'FRECUENCIA DE OLAS DE CALOR - OTOÑO',
                            popuplayertitle: 'FRECUENCIA DE OLAS DE CALOR - OTOÑO',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FRECUENCIADEOLASDECALOROTOO_5, 1]);
var lyr_FRECUENCIADEOLASDECALORINVIERNO_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://idesep.senamhi.gob.pe:443/geoserver/g_01_06/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "01_06_003_03_001_512_0000_00_00",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'FRECUENCIA DE OLAS DE CALOR - INVIERNO',
                            popuplayertitle: 'FRECUENCIA DE OLAS DE CALOR - INVIERNO',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FRECUENCIADEOLASDECALORINVIERNO_6, 1]);

lyr_OpenTopoMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_FRECUENCIADEOLASDECALORVERANO_3.setVisible(true);lyr_FRECUENCIADEOLASDECALORPRIMAVERA_4.setVisible(true);lyr_FRECUENCIADEOLASDECALOROTOO_5.setVisible(true);lyr_FRECUENCIADEOLASDECALORINVIERNO_6.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,lyr_FRECUENCIADEOLASDECALORVERANO_3,lyr_FRECUENCIADEOLASDECALORPRIMAVERA_4,lyr_FRECUENCIADEOLASDECALOROTOO_5,lyr_FRECUENCIADEOLASDECALORINVIERNO_6];
