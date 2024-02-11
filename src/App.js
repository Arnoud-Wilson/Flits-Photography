import React from "react";
import './App.css';
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";


function App() {
  return (
      <>
          <Navigation/>
          <section className="site-wrapper">
              <Home/>
          </section>
      </>
  );
}

export default App;
