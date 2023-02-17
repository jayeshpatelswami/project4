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
          <Route exact path="/technology">   <News key={"technology"}    contry = "in"  category = "technology"     pagesize = "5"/>   </Route>
          <Route exact path="/sports">       <News key={"sports"}        contry = "in"  category = "sports"         pagesize = "5"/>   </Route>
          <Route exact path="/science">      <News key={"science"}       contry = "in"  category = "science"        pagesize = "5"/>   </Route>
          <Route exact path="/business">     <News key={"business"}      contry = "in"  category = "business"       pagesize = "5"/>   </Route>
          <Route exact path="/entertainment"><News key={"entertainment"} contry = "in"  category = "entertainment"  pagesize = "5"/>   </Route>
          <Route exact path="/general">      <News key={"general"}       contry = "in"  category = "general"        pagesize = "5"/>   </Route>
          <Route exact path="/health">       <News key={"health"}        contry = "in"  category = "health"         pagesize = "5"/>    </Route>
          <Route exact path="/">             <News key={"general"}       contry = "in"  category = "general"        pagesize = "5"/>    </Route>
        </Switch>

        </Router>
      </div>
    )
  }
}
