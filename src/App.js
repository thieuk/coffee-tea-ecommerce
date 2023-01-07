import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const Coffee = lazy(() => import('./pages/Coffee'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/coffee" element={<Coffee />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;