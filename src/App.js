import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const Product = lazy(() => import('./pages/Product'));
const About = lazy(() => import('./pages/About'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/notFound" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;