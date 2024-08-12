import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App () {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="page">
                    <Routes>
                        <Route 
                            path="/"
                            element={<Home />}
                        />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;