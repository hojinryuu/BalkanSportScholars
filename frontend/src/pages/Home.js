// components
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Service';
import Players from '../components/Players';
import Contact from '../components/Contact';
import '../styles/global.css';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Players />
            <Contact />
        </>
    )
}

export default Home;