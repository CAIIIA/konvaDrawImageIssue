import 'babel-polyfill';
// import * as React from "react";
// import * as ReactDOM from "react-dom";
var React = require('react');
  var ReactDOM = require('react-dom');


import { Parent} from "./components/Parent";

ReactDOM.render(
    <Parent/>,
    document.getElementById("example")
);