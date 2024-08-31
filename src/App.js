import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Works from './pages/Works/Works';
import {Context} from './Context'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <Context.Provider value={{
      isMobile,
      setIsMobile
    }}>
      <div className='App'>
        <Header />


        <Container>
          <div className='mt-[100px]'>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='projects'
                element={<Works />}
              />
              <Route
                path='contact'
                element={<Contact />}
              />
            </Routes>
          </div>
        </Container>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
