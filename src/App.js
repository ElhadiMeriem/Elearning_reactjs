import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Courses';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import {Route ,Routes  , BrowserRouter as Router} from 'react-router-dom';
import Error404 from './pages/Error404';
import Contact from './pages/Contact';
function App() {
  return (
      <Router> 
        <Routes>
          <Route  path="/" element={<Home />} ></Route> 
          <Route  path="/about" element={<About />} ></Route> 
          <Route  path="/contact" element={<Contact />} ></Route> 
          <Route  path="/course" element={<Course />} ></Route> 
          <Route  path="/team" element={<Team />} ></Route> 
          <Route  path="/testimonial" element={<Testimonial />} ></Route> 
          <Route  path="/404" element={<Error404 />} ></Route> 
        </Routes>
    </Router>
  );
}

export default App;
