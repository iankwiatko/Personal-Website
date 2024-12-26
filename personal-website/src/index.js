import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Experience from './Experience';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path="/Experience" element={<Experience/>}/>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
