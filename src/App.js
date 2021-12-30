import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";
import LandingPage from "./LandingPage";
import { SnackbarProvider } from "notistack";
import Zoom from "@material-ui/core/Zoom";

function App() {
  return (
    <SnackbarProvider
      maxSnack={4}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      TransitionComponent={Zoom}
    >
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
    </SnackbarProvider>
  );
}

export default App;
