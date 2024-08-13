
import { Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <div>
      {/* Top Navigation visible only on medium and larger screens */}
      <div className='hidden md:block'>
        <TopNav />
      </div>
      
      {/* Main Menu */}
      <MainMenu />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
