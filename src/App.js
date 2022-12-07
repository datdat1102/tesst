import React from "react";
import './App.css';
import { Route, Switch, Router } from "react-router-dom";
import TheLayout from "./containers/TheLayout"
import { history } from "./history";
import '@shopify/polaris/build/esm/styles.css';

function App() {
  return (
    <Router history={history} >
      <React.Suspense fallback={[]}>
        <Switch>
          <Route
            path="/"
            name="Home"
            render={(props) => <TheLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
