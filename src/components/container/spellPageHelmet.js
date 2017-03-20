import React from 'react';
import Helmet from 'react-helmet';

class SpellPageHelmet extends Helmet{
  constructor(props){
    super(props);
  }



  render(){
    return (
      <Helmet
        titleTemplate = 'Spell List %s'
        link = {[
          {rel: "shortcut icon", href: "images/favicon.ico"},
          {rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css", integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u", crossorigin: "anonymous"},
          {rel: "stylesheet", href: "styles/style.css", type: "text/css"}
        ]}
        meta = {[
          {name: "viewport", content: "width=device-width, initial-scale=1"}
        ]}
        script = {[
          {type: "text/javascript", content: "window.__INITIAL_STORE__ = ' + JSON.stringify(store) + '; "}
        ]}
      />
    );
  }
}

export default SpellPageHelmet;
