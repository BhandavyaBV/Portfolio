import './App.css';
import Navbar from './Components/NavbarComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <header className="r">
       
        <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path="/" exact Component={Home}/>
            <Route path="/about" exact Component={About}/>
            <Route path="/projects" exact Component={Projects}/>
            <Route path="/contact" exact Component={Contact}/>
          </Routes>
          
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
