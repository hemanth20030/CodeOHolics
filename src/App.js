import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Events from "./Components/Events";
import Team from "./Components/Team";
import Announcements from "./Components/Announcements";
import Particles from "./Components/Particles.jsx";
import Typewriter from "typewriter-effect";
import 'jquery/dist/jquery.min.js'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Particles />
          <div className="container">
            <div className="my-5">
              <span className='text-3xl font-bold text-[#03ab03]' >
                <Typewriter
                  options={{
                    strings: [
                      "Hello Everyone , We are CodeoHolics Club.",
                      "Web and Coding Club of CMR Technical Campus.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </div>
        </>
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/announcements" element={<Announcements />} />
      </Routes>
      
    </>
  );
}
export default App;