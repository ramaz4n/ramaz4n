import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import Works from './pages/Works/Works'
import Contact from './pages/Contact/Contact'
import Menu from './components/Menu/Menu';


function App() {

  return (
		<div className="App">
			<div>
				<Header/>
				<Container>
					<Menu/>
				</Container>
			</div>
			
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
