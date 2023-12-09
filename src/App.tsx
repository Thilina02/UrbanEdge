import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserContextProvider } from './contex/userContex';
import { Home } from './pages/Home';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>

    </UserContextProvider>
  );
}

export default App;
