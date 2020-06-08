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
import DashboardCRUD from "./user CRUD/DashboardCRUD";
import GetUser from "./user CRUD/GetUser";
import AddUser from "./user CRUD/AddUser";
import UserAction from "./user CRUD/UserAction";
import AxioDashboard from "./Axio Crud/AxioDashboard";
import GetAllData from "./Axio Crud/GetAllData";
import PostAxios from "./Axio Crud/PostAxios";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/students" component={StudentsPage} />
        <Route exact path="/axios" component={AxiosPage} />

        <Route exact path="/dashboardcrud" component={DashboardCRUD} />
        <Route exact path="/getuser" component={GetUser} />
        <Route exact path="/adduser" component={AddUser} />
        <Route exact path="/useraction" component={UserAction} />

        <Route exact path="/axiodashboard" component={AxioDashboard} />
        <Route exact path="/getalldata" component={GetAllData} />
        <Route exact path="/postaxios" component={PostAxios} />
        <Route exact path="/postaxios/:id" component={PostAxios} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
