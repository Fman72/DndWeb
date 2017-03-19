let getHTMLString = (head, content) =>{
  return `
    <!doctype html>
    <head>
      ${head.title.toString()}
    </head>
    <body>
      <div id = "content">
        ${content}
      </div>
    </body>
  `;
};

export default getHTMLString;
