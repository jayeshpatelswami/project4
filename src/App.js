import React, { Component } from 'react'
import Nevbar from './component/Nevbar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Nevbar/>

        <Switch>
          <Route exact path="/business">     <News contry = "in"  category = "business" pagesize = "5"/>      </Route>
          <Route exact path="/entertainment"><News contry = "in"  category = "entertainment"  pagesize = "5"/></Route>
          <Route exact path="/general">      <News contry = "in"  category = "general"  pagesize = "5"/>      </Route>
          <Route exact path="/health">       <News contry = "in"  category = "health"  pagesize = "5"/>       </Route>
          <Route exact path="/science">      <News contry = "in"  category = "science"  pagesize = "5"/>      </Route>
          <Route exact path="/sports">       <News contry = "in"  category = "sports"  pagesize = "5"/>       </Route>
          <Route exact path="/technology">   <News contry = "in"  category = "technology"  pagesize = "5"/>   </Route>
          <Route exact path="/">             <News contry = "in"  category = "general"  pagesize = "5"/>      </Route>
        </Switch>

        </Router>
      </div>
    )
  }
}
