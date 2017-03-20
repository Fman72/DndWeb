let getHTMLString = (head, content, store) =>{
  return `
    <!DOCTYPE html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel = "shortcut icon" href = "images/favicon.ico">
      <script>window.__INITIAL_STORE__ = ${JSON.stringify(store)}; </script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
      <link rel = "stylesheet" type = "text/css" href = "styles/style.css"/>
      ${head.title.toString()}
    </head>
    <body>
      <div id = "content" class = "full-height">${content}</div>
    </body>
  `;
};

export default getHTMLString;


// let unmanagedMarkup = '<title>Spell List</title>
// <link rel = "shortcut icon" href = "images/favicon.ico">
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
// <link rel = "stylesheet" type = "text/css" href = "styles/style.css"/>
// <script>window.__INITIAL_STORE__ = ' + JSON.stringify(store) + '; </script>'
