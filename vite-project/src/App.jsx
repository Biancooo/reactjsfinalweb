import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar"
import HomeView from './components/views/ContactView/ContactView'
import ProductView from './components/views/ProductView/ProductView'
import ContactView from './components/views/ContactView/ContactView'

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <h1>React Router Dom</h1></BrowserRouter> */}
    <NavBar />
    <Routes>
      <Route exact path="/Menu" element={<HomeView />} />
      <Route exact path="/Productos" element={<ProductView />} />
      <Route exact path="/Contacto" element={<ContactView />} />
      <Route exact path="/producto/:id" element={<ProductView />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
