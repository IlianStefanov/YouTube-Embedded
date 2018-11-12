import React from 'react';
import {Router, Route, Switch, Link} from 'react-router-dom';




import YoutubeEmbed from './YoutubeEmbed';
import Home from './Home';
import NotFound from './NotFound';




var img = require('../images/Heart.png');
var App = ({match}) => (
    
    <div className="App">
       
        
        <div className="App-header">
          
          
        </div>
           
        <div className="App-intro">
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/:id' component={ YoutubeEmbed } />
        <Route component={NotFound} />
          
         
        </Switch>
        
        
        </div>
      </div>
)

  


export default App;