import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import SamuraiJSApp from "./App";

// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello";
// document.querySelector("body")
//     .appendChild(h1);

ReactDOM.render(<SamuraiJSApp/>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//<React.StrictMode>