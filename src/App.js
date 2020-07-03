import React from 'react';
import logo from './logo.svg';
import './bootstrap/css/bootstrap.css';
import './App.css'
import Navbar from './navbar.js'
import Products from './products.js'

function App() {
  return (
    <div className="App">
     <Navbar />
            <div className="row">
              <div className="col-md-2">
                {
                 ['XS','S','M','ML','L','XL','XXL',].map(
                 size => <button className="button button5">{size}</button>
                 )
                }
                <p>Leave a star on Github if this repository was useful:)</p>
                <button type="button" className="btn btn-default btn-lg">
                  <span className="glyphicon glyphicon-star" aria-hidden="true"></span>Star
                </button>
                <button className="button1">848</button>
              </div>
              
              <Products />
    </div>
    </div>
  );
}

export default App;
