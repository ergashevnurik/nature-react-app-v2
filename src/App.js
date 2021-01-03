import {BrowserRouter as Router } from "react-router-dom";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Service from "./components/ServiceSection";
import { ServiceData, ServiceDataTwo } from "./Data/ServiceData";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Info />
        <Service {...ServiceData} />
        <Card />
        <Service {...ServiceDataTwo} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
