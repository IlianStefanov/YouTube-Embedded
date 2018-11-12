

import React from 'react';
import ReactDOM from 'react-dom';



import { BrowserRouter as Router, Switch ,Route, Link, IndexRoute} from "react-router-dom";


import App from "./components/App";
import Home from "./components/Home";
import YoutubeEmbed from "./components/YoutubeEmbed";
import createBrowserHistory from "history/createBrowserHistory";





const customHistory = createBrowserHistory()
const css = require("./app.css")
ReactDOM.render(
   <Router history={customHistory} >
         
        <App />
    </Router>
   ,
  
   document.getElementById('app')
);

