"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getHTMLString = function getHTMLString(head, content, store) {
  return "\n    <!DOCTYPE html>\n    <head>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n      <link rel = \"shortcut icon\" href = \"images/favicon.ico\">\n      <script>window.__INITIAL_STORE__ = " + JSON.stringify(store) + "; </script>\n      <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\"/>\n      <link rel = \"stylesheet\" type = \"text/css\" href = \"styles/style.css\"/>\n      " + head.title.toString() + "\n    </head>\n    <body>\n      <div id = \"content\" class = \"full-height\">" + content + "</div>\n    </body>\n  ";
};

exports.default = getHTMLString;

// let unmanagedMarkup = '<title>Spell List</title>
// <link rel = "shortcut icon" href = "images/favicon.ico">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
// <link rel = "stylesheet" type = "text/css" href = "styles/style.css"/>
// <script>window.__INITIAL_STORE__ = ' + JSON.stringify(store) + '; </script>'