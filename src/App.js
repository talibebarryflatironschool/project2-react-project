// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import AnimalList from './components/AnimalList';
import AnimalDetailPage from './components/AnimalDetailPage';
import AnimalForm from './components/AnimalForm';
import AnimalCard from './components/AnimalCard';

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