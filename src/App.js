import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";

// Import css files
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//components
import Navbar from "./components/Navbar";
import NotificationBar from "./components/NotificationBar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NotificationBar />
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
        {/*<Switch> <Route path="/" component={} /> </Switch>*/}
      </div>
    </BrowserRouter>
  );
}

export default App;
