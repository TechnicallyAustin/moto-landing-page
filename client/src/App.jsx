import { useState } from 'react'
import Layout from "./components/layouts/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app" className='w-full h-full flex flex-wrap  gap-6' >
      <Header />
        <Home />
        <Layout><About /></Layout>
        <Layout><Services /></Layout>
        <Layout><Team /></Layout>
        <Layout><Contact /></Layout>
      <Footer />
    </div>
  );
}

export default App
