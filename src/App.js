import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.module.scss';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import Works from './pages/Works/Works'
import Contact from './pages/Contact/Contact'


function App() {
  return (
		<div className="App">
			<Header/>
			<Container>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="projects" element={<Works />} />
					<Route path="contact" element={<Contact />} />
    			</Routes>
			</Container>
			<Footer/>
		</div>
  );
}

export default App;
