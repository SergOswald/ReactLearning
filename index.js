import React from 'react';
import ReactDOM from 'react-dom';

//import './index.css';
//import App from './App';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 //  <React.StrictMode>
 <>

</>
 //  </React.StrictMode>
);

*/


ReactDOM.render(
  React.createElement("button", {
    onClick: () => console.log("Click")
  }, "Push me"),
  document.getElementById("root")
);





