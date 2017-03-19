import React from 'react';
import Helmet from 'react-helmet';

class SpellPageHelmet extends React.Component{
  constructor(props){
    super(props);
  }

  // let unmanagedMarkup = '<title>Spell List</title>
  // <link rel = "shortcut icon" href = "images/favicon.ico">
  // <meta name="viewport" content="width=device-width, initial-scale=1">
  // <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
  // <link rel = "stylesheet" type = "text/css" href = "styles/style.css"/>
  // <script>window.__INITIAL_STORE__ = ' + JSON.stringify(store) + '; </script>';


  render(){
    return (
      <Helmet
        titleTemplate = 'Spell List %s'
        link = [
          {rel: "shortcut icon", href: "images/favicon.ico"},
          {rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css", integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u", crossorigin: "anonymous"},
          {rel: "stylesheet", href: "styles/style.css", type: "text/css"}
        ]
        meta = [
          {name: "viewport", content: "width=device-width, initial-scale=1"}
        ]
        script = [
          {}
        ]
      />
    );
  }
}

export default SpellPageHelmet;
