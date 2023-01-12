import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const Product = lazy(() => import('./pages/Product'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;