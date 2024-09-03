import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Athletes from '../src/pages/Athletes';
import Services from '../src/pages/Services';
import Contact from '../src/pages/Contact';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import PrivacyPolicy from '../src/pages/PrivacyPolicy';

function App () {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="page">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/athletes" element={<Athletes />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;