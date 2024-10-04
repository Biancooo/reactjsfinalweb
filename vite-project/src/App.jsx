import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import HomeView from './components/views/HomeView/HomeView'
import ProductView from './components/views/ProductView/ProductView'
import ContactView from './components/views/ContactView/ContactView'
import ProductsList from './components/ProductsList'

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <h1>React Router Dom</h1></BrowserRouter> */}
    <NavBar />
    <Routes>
      <Route exact path="/Menu" element={<ProductsList />} />
      <Route exact path="/Productos/:category" element={<ProductsList />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
