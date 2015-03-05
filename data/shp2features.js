var fs = require('fs'),
    mkdirp = require('mkdirp'),
    toJSON = require('shp2json'),
    JSONStream = require('JSONStream'),
    es = require('event-stream'),
    readStream = fs.createReadStream("gemeente.zip"),
    nameField = 'GM_NAAM';

String.prototype.replaceAll = function (find, replace) {
  var str = this;
  return str.replace(new RegExp(find, 'g'), replace);
}

toJSON(readStream)
  .pipe(JSONStream.parse('features.*'))
  .pipe(es.mapSync(function (data) {
    if (data.properties[nameField]) {
      var name = data.properties[nameField]
          .toLowerCase()
          .replaceAll("'", "")
          .replaceAll("\"", "")
          .replaceAll(" ", "-");

      var path = "gemeente/" + name.charAt(0);
      mkdirp(path, function (err) {
        console.log(data.properties[nameField] + "!");
        fs.writeFileSync(path + '/' + name + ".geojson", JSON.stringify(data, null, 2));
      });
    }
  }));
