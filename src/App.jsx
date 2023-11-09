import "./App.css";
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productos" element={<Products/>} />
        <Route path="/nosotros" element={<About/>} />
        <Route path="/contacto" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
