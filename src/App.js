import React from "react";
import HomePage from "./components/HomePage/HomePage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import { UserProvider } from "./ContextApi/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/:userId">
            <DetailsPage />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}
