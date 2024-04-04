import React from 'react';
import ReactDOM from 'react-dom';


//import './index.css';
import App from "./App";


ReactDOM.render(<App />, document.getElementById("root")); //Эта строчка необходима когда передаем код
//из App

/*

const sayHello = function() {
  console.log('The link was clicked.')
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 //  <React.StrictMode>

<>
<button onClick={sayHello}>Activate Lasers</button>
</>

 // </React.StrictMode>
);

/*

//Этот код альтернативен верхнему, но сложнее по восприятию
ReactDOM.render(
  React.createElement("button", {
    onClick: () => console.log("Click")
  }, "Push me"),
  document.getElementById("root")
);

*/



