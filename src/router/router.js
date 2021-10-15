import React, { Component } from "react";
import { Route, Switch } from "react-router";

// import pages from pages folder
import Login from "../pages/login";
import AODCallLogForm from "../pages/aod_call_log_form";
import MonthlyCallLogs from "../pages/monthly_call_log";
import ManageAdmins from "../pages/manage_administrators";
import ManageUsers from "../pages/manage_users";
import NotFound from "../pages/404";

class Router extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/AODCallLogForm" component={AODCallLogForm} />
          <Route exact path="/MonthlyCallLogs" component={MonthlyCallLogs} />
          <Route exact path="/ManageAdmins" component={ManageAdmins} />
          <Route exact path="/ManageUsers" component={ManageUsers} />
          <Route exact path="/404" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Router;
