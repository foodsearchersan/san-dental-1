import * as React from 'react';
// import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'


import './components/css/BlogContact.css'
import whatsapp from './components/Assests/whatsapp.png'
import './app.css'
import Help from './components/pages/Help';
import Spinner from './components/pages/Spinner';

const Home = React.lazy(() => import("./components/pages/Home"));
const Footer = React.lazy(() => import("./components/pages/Footer"));
const AllOn4 = React.lazy(() => import("./components/pages/AllOn4"));
const AllOn6 = React.lazy(() => import("./components/pages/AllOn6"));
const Asesthetic = React.lazy(() => import("./components/pages/Asesthetic"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const GuidedSurgeries = React.lazy(() => import("./components/pages/GuidedSurgeries"));
const MeetDrPrem = React.lazy(() => import("./components/pages/MeetDrPrem"));

const NewPatients = React.lazy(() => import("./components/pages/NewPatients"));
const OurSolution = React.lazy(() => import("./components/pages/OurSolution"));
const ProsthesisTypes = React.lazy(() => import("./components/pages/ProsthesisTypes"));
const SinusLifts = React.lazy(() => import("./components/pages/SinusLifts"));
const Testimonials = React.lazy(() => import("./components/pages/Testimonials"));
const TheTeam = React.lazy(() => import("./components/pages/TheTeam"));
const ThoothOnDay = React.lazy(() => import("./components/pages/ThoothOnDay"));
const InternationalPatient = React.lazy(() => import("./components/pages/InternationalPatient"));
const Blog = React.lazy(() => import("./components/pages/Blog"));
const BlogInfo = React.lazy(() => import("./components/pages/Blog/info"));
const TopNav = React.lazy(() => import("./components/pages/TopNav"));


function App() {

  const [spinner, setSpinner] = React.useState(true);
  React.useEffect(() => {
   setTimeout(()=>{
    setSpinner(false)
   }, 2500)
  },[])

  return (
    <div>

      <TopNav />

      {
        spinner ?
          (
            <Spinner />
          )
          :
          (

            <div>
              <Routes>

                <Route path="/" element={<React.Suspense fallback={<Spinner />}><Home />  </React.Suspense>} />
                <Route path="/AllOn4" element={<React.Suspense fallback={<Spinner />}><AllOn4 /></React.Suspense>} />
                <Route path="/AllOn6" element={<React.Suspense fallback={<Spinner />}><AllOn6 /></React.Suspense>} />
                <Route path="/Asesthetic" element={<React.Suspense fallback={<Spinner />}><Asesthetic /></React.Suspense>} />
                <Route exact path={`/blog/:id`} element={<React.Suspense fallback={<Spinner />}><BlogInfo /></React.Suspense>} />
                <Route path="/blog" element={<React.Suspense fallback={<Spinner />}><Blog /></React.Suspense>} />
                <Route path="/Contact" element={<React.Suspense fallback={<Spinner />}><Contact /></React.Suspense>} />
                <Route path="/GuidedSurgeries" element={<React.Suspense fallback={<Spinner />}><GuidedSurgeries /></React.Suspense>} />
                <Route path="/MeetDrPrem" element={<React.Suspense fallback={<Spinner />}><MeetDrPrem /></React.Suspense>} />
                <Route path="/NewPatients" element={<React.Suspense fallback={<Spinner />}><NewPatients /></React.Suspense>} />
                <Route path="/OurSolution" element={<React.Suspense fallback={<Spinner />}><OurSolution /></React.Suspense>} />
                <Route path="/ProsthesisTypes" element={<React.Suspense fallback={<Spinner />}><ProsthesisTypes /></React.Suspense>} />
                <Route path="/SinusLifts" element={<React.Suspense fallback={<Spinner />}><SinusLifts /></React.Suspense>} />
                <Route path="/Testimonials" element={<React.Suspense fallback={<Spinner />}><Testimonials /></React.Suspense>} />
                <Route path="/TheTeam" element={<React.Suspense fallback={<Spinner />}><TheTeam /></React.Suspense>} />
                <Route path="/ThoothOnDay" element={<React.Suspense fallback={<Spinner />}><ThoothOnDay /></React.Suspense>} />
                <Route path="/InternationalPatients" element={<React.Suspense fallback={<Spinner />}><InternationalPatient /></React.Suspense>} />
                <Route path="/Spinner" element={<Spinner />} />
              </Routes>

              <Footer />



              <a href='https://wa.me/918939111172?text=Hai' className='whatsapp_icon'><img src={whatsapp} /></a>
              {/* <Help /> */}

            </div>
          )
      }

    </div>
  );
}

export default App;
