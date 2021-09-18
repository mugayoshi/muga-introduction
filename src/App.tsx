import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./layouts/default-layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <DefaultLayout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
