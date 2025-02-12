
// // import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import NavigationBar from './components/NavigationBar';
// import AnimalList from './components/AnimalList';
// import AnimalDetailPage from './components/AnimalDetailPage';
// import AnimalForm from './components/AnimalForm';
// // import AnimalCard from './components/AnimalCard';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Router>
//       <div>
//         <NavigationBar />
//         <Routes>
//           <Route path="/" element={<AnimalList />} />
//           <Route path="/animals/:id" element={<AnimalDetailPage />} />
//           <Route path="/add" element={<AnimalForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;





import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AnimalList from './components/AnimalList';
import AnimalForm from './components/AnimalForm';
import AnimalDetailPage from './components/AnimalDetailPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/animals")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  const addAnimal = (newAnimal) => {
    setAnimals([...animals, newAnimal]);
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<AnimalList animals={animals} />} />
        <Route path="/animals/:id" element={<AnimalDetailPage />} />
        <Route path="/add" element={<AnimalForm addAnimal={addAnimal} />} />
      </Routes>
    </Router>
  );
}

export default App;