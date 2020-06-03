import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import StudentsPage from "./pages/StudentsPage";
import AxiosPage from "./pages/AxiosPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/students" component={StudentsPage} />
        <Route exact path="/axios" component={AxiosPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
