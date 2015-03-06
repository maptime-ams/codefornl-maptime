# Tutorial: Gemeentekaart met Mapbox Studio

In deze tutorial maken we een eigen webkaart met [Mapbox Studio](https://www.mapbox.com/mapbox-studio/) en [CartoCSS](https://www.mapbox.com/guides/intro-to-studio/#what-is-cartocss), en voegen we gemeentegrenzen toe met [Leaflet](http://leafletjs.com/). Deze tutorial is gemaakt voor de Maptime-workshop tijdens het [beginevenement van Code for NL](http://waag.org/nl/event/code-nl-lancering), op 6 maart 2015.

Voor meer informatie over Maptime, zie:

- http://maptime.io/
- http://maptime-ams.github.io/

![](images/mapbox-studio-cartocss.png)

Voor deze tutorial heb je een paar dingen nodig:

- [Mapbox Studio](https://www.mapbox.com/mapbox-studio/), en een [Mapbox-account](https://www.mapbox.com/signup/).
- __Een moderne browser__, zoals Firefox, Safari, Chrome, of een recente versie van Internet Explorer.
- __Een goede texteditor__, bijvoorbeeld [Sublime Text](http://www.sublimetext.com/), [Textmate](http://macromates.com/) of [Notepad++](http://notepad-plus-plus.org/).

De tutorial bestaat uit twee onderdelen:

- __Deel 1__: We downloaden en installeren van Mapbox Studio, we maken een eigen kaartstijl met CartoCSS, en publiceren deze via Mapbox.com.
- __Deel 2__: We downloaden gemeentegrensdata van 't CBS, en we maken een simpele webpagina met HTML en Leaflet.

## Deel 1

#### Download Mapbox Studio

Ga naar https://www.mapbox.com/mapbox-studio/ en download Mapbox Studio. Mapbox Studio is beschikbaar voor Mac OS, Windows en Linux.

![](images/mapbox-studio-download.png)

#### Download Mapbox Studio

Om Mapbox Studio te gebruiken heb je een Mapbox-account nodig: https://www.mapbox.com/signup/.

![](images/mapbox-signup.png)

#### Download Mapbox Studio

Start Mapbox Studio, log in, en begin een nieuw project.

![](images/mapbox-studio-new-project.png)

#### Sla je nieuwe project op

Klik op _Save as_, en kies een locatie op je harde schijf.

![](images/mapbox-studio-save.png)

#### Maak een eigen kaartstijl!

Nu begint het echte werk! Met Mapbox Studio kun je je kaart vormgeven met behulp van [CartoCSS](https://www.mapbox.com/guides/intro-to-studio/#what-is-cartocss), een op CSS-gebaseerde stijltaal. Je kunt CartoCSS het beste leren door het gewoon te proberen: kijk naar de met Mapbox Studio meegeleverde voorbeeldkaartstijlen (via [github.com/mapbox](https://github.com/search?utf8=%E2%9C%93&q=user%3Amapbox+language%3Acartocss&type=Repositories&ref=searchresults) kun je er nog meer vinden) en __pas waardes aan en kijk wat er gebeurt__.

Ook staan er veel goede tutorials online, bijvoorbeeld:

- https://www.mapbox.com/guides/intro-to-studio/
- https://speakerdeck.com/almccon/advanced-cartocss-tricks-foss4g-2014

![](images/mapbox-studio-cartocss.png)

###### Simpele CartoCSS-voorbeelden

Geef de kaart een blauwe achtergrondkleur:

```cartocss
Map {
  background-color: #0000ff;
}
```

Teken snelwegen met een donkergrijze lijn:

```cartocss
#road {
  [class='motorway'] {
    line-color: #444;
    line-cap: round;
    line-width: 0.6;
  }
}
```

###### Documentatie

In Mapbox Studio kun je via de knop _Docs_ documentatie over CartoCSS bekijken.

![](images/mapbox-studio-docs.png)

###### Layers

Via de knop _Layers_ krijg je informatie over de beschikbaren datalagen.

![](images/mapbox-studio-layers.png)

#### Kies een titel, zoomniveau en startpositie

Via _Settings_ kun je de instellingen van je kaart aanpassen. Dit is niet nodig, maar het is handig als je je kaart een eigen startpositie geeft (klik op het slotje en beweeg de kaart op de huidige positie van de kaart over te nemen). Mapbox Studio centreert de kaart op deze positie als je je kaart later opnieuw opent.

![](images/mapbox-studio-center.png)

#### Upload je kaart naar Mapbox.com

Met een gratis Mapbox-account kun je één eigen kaartstijl via Mapbox.com publiceren. Dit is nodig als je je kaart via een webpagina wilt ontsluiten (dat doen we in deel 2 van deze tutorial). Sla de kaart op, daarna kun je met de knop _Upload to Mapbox_ uploaden naar Mapbox.com. Je kaart krijgt dan een eigen _Map ID_, deze heb je later nodig. Via https://www.mapbox.com/styles/ krijg je een overzicht van je eigen gepubliceerde kaartstijlen.

![](images/mapbox-styles.png)

## Deel 2

- [Gemeentegrenzen van CBS](http://www.cbs.nl/nl-NL/menu/themas/dossiers/nederland-regionaal/publicaties/geografische-data/archief/2014/2013-wijk-en-buurtkaart-art.htm)

![](images/shapefile.png)
![](images/qgis.png)
![](images/qgis-select.png)
![](images/qgis-export.png)
![](images/textmate.png)
![](images/leaflet.png)

- http://en.wikipedia.org/wiki/Shapefile
