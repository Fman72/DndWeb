import React from 'react';

let StartPage = (props) => {
  return (
    <div id = "start-div">
      <h1 id = "start-heading">What is your name?</h1>
      <input className = "styled-input" id = "start-input" type = "text"/>
      <script src = "bundle.js"></script>
    </div>
  );
}

export default StartPage;
