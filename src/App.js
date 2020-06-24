import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';


const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
      <h1> Topic List Page</h1>
      <Link to={`${props.match.url}/13`}>To Topic 13</Link>
      <Link to={`${props.match.url}/14`}>To Topic 14</Link>
      <Link to={`${props.match.url}/15`}>To Topic 15</Link>
    </div>
  )
}
const TopicDetail = (props) => {
  return (
    <div>
      <button onClick={() => props.history.push('/topics') }>click</button>
      <h1> Topic Detail Page: {props.match.params.topicId}</h1>
    </div>
  )
}

function App() {
  return (
    <div className="wrapper">
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics" component={TopicsList} />
      <Route exact path="/topics/:topicId" component={TopicDetail} />
      <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
