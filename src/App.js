import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Routes from './router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="row">
          <Sidebar />
          <div className={"main"}>
            <Routes />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
