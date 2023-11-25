import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <div style={{backgroundColor: '#000'}}>
     <Skills/>
     <Work/>
     <Contact/>
     <Footer/>
     </div>
     <ToastContainer/>
    </>
  );
}

export default App;
