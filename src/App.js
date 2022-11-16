import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Footer from './components/pages/Footer'
import AllOn4 from './components/pages/AllOn4';
import AllOn6 from './components/pages/AllOn6';
import Asesthetic from './components/pages/Asesthetic';
import Contact from './components/pages/Contact';
import GuidedSurgeries from './components/pages/GuidedSurgeries';
import MeetDrPrem from './components/pages/MeetDrPrem';
import NewPatients from './components/pages/NewPatients';
import OurSolution from './components/pages/OurSolution';
import ProsthesisTypes from './components/pages/ProsthesisTypes';
import SinusLifts from './components/pages/SinusLifts';
import Testimonials from './components/pages/Testimonials';
import TheTeam from './components/pages/TheTeam';
import ThoothOnDay from './components/pages/ThoothOnDay';
import WalkPatients from './components/pages/WalkPatients';
import Blog from './components/pages/Blog';
import TopNav from './components/pages/TopNav';
import './components/css/BlogContact.css'

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllOn4" element={<AllOn4 />} />
        <Route path="/AllOn6" element={<AllOn6 />} />
        <Route path="/Asesthetic" element={<Asesthetic />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/GuidedSurgeries" element={<GuidedSurgeries />} />
        <Route path="/MeetDrPrem" element={<MeetDrPrem />} />
        <Route path="/NewPatients" element={<NewPatients />} />
        <Route path="/OurSolution" element={<OurSolution />} />
        <Route path="/ProsthesisTypes" element={<ProsthesisTypes />} />
        <Route path="/SinusLifts" element={<SinusLifts />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/TheTeam" element={<TheTeam />} />
        <Route path="/ThoothOnDay" element={<ThoothOnDay />} />
        <Route path="/WalkPatients" element={<WalkPatients />} />


      </Routes>

      <Footer />

    </div>
  );
}

export default App;
