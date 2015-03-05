# Gemeentedata

[Gemeentegrenzen van CBS](http://www.cbs.nl/nl-NL/menu/themas/dossiers/nederland-regionaal/publicaties/geografische-data/archief/2014/2013-wijk-en-buurtkaart-art.htm):

- `gemeente.zip` bevat Shapefile,
- `gemeente.topojson` bevat [TopoJSON-bestand](https://github.com/mbostock/topojson),
- en met `shp2features.js` kan de Shapefile naar losse GeoJSON-bestanden worden geconverteerd, één per gemeente.

## `shp2features`

Vereist: Node.js.

Gebruik:

```
$ node shp2features.js
```

Het script opent `gemeente.zip`, en plaatst losse GeoJSON-bestanden in de directory `gemeente`.
