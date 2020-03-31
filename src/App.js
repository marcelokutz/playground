import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CookieBar from "./components/cookie-bar";
import Header from "./components/header";
import Footer from "./components/footer";

import HomePage from "./pages/homepage";


function App() {
  return (
    <Router>
      <div className="App">
        <CookieBar />
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
