
// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import AnimalList from './components/AnimalList';
import AnimalDetailPage from './components/AnimalDetailPage';
import AnimalForm from './components/AnimalForm';
// import AnimalCard from './components/AnimalCard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<AnimalList />} />
          <Route path="/animals/:id" element={<AnimalDetailPage />} />
          <Route path="/add" element={<AnimalForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;