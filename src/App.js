import logo from './logo.svg';
import Navbar from './components/Navvbar'
import './App.css';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Burger from './components/Burger';
import Footer from './components/Footer';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const prices = {
    'lettuce': 10,
    'bacon': 30,
    'cheese': 40,
    'meat': 50
  };

  const [ingredients, setIngredients] = useState({
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Burger ingredients={ingredients} setIngredients={setIngredients} prices={prices} />
              <Footer ingredients={ingredients} setIngredients={setIngredients} prices={prices} />
            </>
          } />
          <Route path="/login" element={
            <>
              <Login />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
