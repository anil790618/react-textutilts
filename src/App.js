import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
pagesize = 6;
apikey ="b26c1da59847437495117f60d82035a8"
// apikey=process.env.REACT_APP_NEWS_API;
state={
  progress : 0
}
setProgress = (progress)=>{
  this.setState({progress:progress})
}
  render() {
    return (
      <div>
          <Router>
             <NavBar/>
             <LoadingBar
             height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
        <Switch> 
          <Route exact path="/"><News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pagesize} country="in" category="general"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pagesize} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pagesize} country="in" category="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={this.pagesize} country="in" category="health"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pagesize} country="in" category="science"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} apikey={this.apikey} key="sports" pageSize={this.pagesize} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pagesize} country="in" category="technology"/></Route>
        </Switch>
          
       
        
        </Router>
      </div>
    )
  }
}
