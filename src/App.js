import './app.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
import Projects from "./components/Projects/Project";
import AboutMe from "./components/About Me/AboutMe";
import { useSelector } from "react-redux";

const App = () => {

    const theme = useSelector(state => state.theme);
    
    return (
        <div className="App" style={theme}>
            <Navbar />
            <Home />
            <Education />
            <Projects />
            <AboutMe />
            <Footer />
        </div>
    )
}

export default App;