import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import BarChart from './components/barchart';
import Display0 from './components/Display0';
import Display1 from './components/Display1';


function App() {
  return (
    <div className="App">
      <div data-aos="fade-down">
      <Navbar />
      </div>
     <Display0/>
     
     <BarChart/>
     <br/>
     <br/>
     <br/>
     <Display1/>

    </div>
  );
}

export default App;
