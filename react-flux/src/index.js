import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Favorites from "./js/pages/Favorites";
import Todos from "./js/pages/Todos";
import Layout from "./js/pages/Layout";
import Settings from "./js/pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Todos}></IndexRoute>
      <Route path="favorites" component={Favorites}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
