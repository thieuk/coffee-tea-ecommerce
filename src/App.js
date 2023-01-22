import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const Product = lazy(() => import('./pages/Product'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Account = lazy(() => import('./pages/Account'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;