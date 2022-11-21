import React from 'react';
import Slider from "react-slick";
import { FaUserCircle } from 'react-icons/fa';
import TestimonialText from '../Json/TestimonialText.json';
import InternationalPatientsVideo from '../Assests/Tourism/International_Patients.mp4';
import PhaseInvolved from '../Assests/Tourism/Phases_involved.jpg';
import AjayMegalaya from '../Assests/Tourism/ajay-meganathan-bQ1-L3Iwulk-unsplash.jpg';
import FebinRoy from '../Assests/Tourism/febin-roy-bJ__24dHcGE-unsplash.jpg';
import KishoreRagav from '../Assests/Tourism/kishore-ragav-ganesh-kumar-XrAUr_m9q80-unsplash.jpg';
import NoviRaj from '../Assests/Tourism/novi-raj-cWbrwDOGZJg-unsplash.jpg';
import ParthaNarasimhan from '../Assests/Tourism/partha-narasimhan-2VFz3jVy42s-unsplash.jpg';
import RaguClicksD from '../Assests/Tourism/ragu-clicks-D1-echCD6io-unsplash.jpg';
import RaguClicks from '../Assests/Tourism/ragu-clicks-IaVXvH_z2PY-unsplash.jpg';
import RhodaAlex from '../Assests/Tourism/rhoda-alex-2L2XCJbRgxc-unsplash.jpg';
import SyedAriff from '../Assests/Tourism/syed-ariff-tIQ5iyorXKg-unsplash.jpg';

function walkThroughContent() {
  return (
    <div>
      <h1 className='text-center font-weight-bold primary'>International Patient Process: A Walk Through</h1>
      <p>We understand that coming to a foreign land and getting life saving care can be intimidating. We offer you premium dental treatments at moderate costs. To help our international patients have a streamlined and easy experience we have put together an easy patient process that will make their treatment and stay safe and pleasant. We provide end-to-end care from the time you contact us. </p>
      <p>Our dentists will call you and assess your teeth and gums using Zoom, Skype, and email. After that, we can develop a preliminary treatment plan, and you can arrange to come see us. When necessary, our staff will collect you up from the airport, shuttle you to your hotel, and then drop you at our dental clinic. After your arrival, we discuss your travel alternatives based on the treatment plan for you and your family members or guests that accompany you.</p>
      <h2 className='mt-5 text-center font-weight-bold primary'>Phases involved</h2>
      <div className='text-center'>
        <img src={PhaseInvolved} alt="" style={{ maxWidth: "100%" }} loading="lazy" />
      </div>
    </div>
  )
}

function tourismContent() {
  const imageData = [AjayMegalaya, FebinRoy, KishoreRagav, NoviRaj, ParthaNarasimhan, RaguClicksD, RaguClicks, RhodaAlex, SyedAriff]
  return (
    <div>
      <h2 className='mt-5 text-center font-weight-bold primary'>Tourism</h2>
      <h4 className=' mt-2 text-center font-weight-bold secondary'>As the saying goes 'Atithi Devo Bhava', guests are our Gods in India.</h4>
      <p>Chennai is the cultural hub of the west and is often considered as the gateway to the south of India. It houses the Tamil film industry, a scenic coastline with amazing tropical beaches, amazing foods and was even named the "hottest" city by the BBC. In 2017, UNESCO Creative Cities Network (UCCN) listed chennai for its diverse and rich musical tradition.</p>
      <p>Here are some amazing spots you can visit while you are here in Chennai.</p>
      <div className='py-3 row no-gutters justify-content-center'>
        {imageData.map((data, i) => {
          return (
            <div className="col-sm-6 col-lg-4" key={i}>
              <img
                src={data}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                alt={""}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function testimonialContent() {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className='px-3'>
      <h2 className='mt-5 text-center font-weight-bold primary'>Testimonials</h2>
      <Slider {...settings}>
        {TestimonialText.map((data, i) => {
          return (
            <div key={i}>
              <div className='p-3'>
                <div className='text-center'>
                  <FaUserCircle className="text-black " style={{ fontSize: "50px" }} />
                  <h4 className='secondary mt-2'>{data.name}</h4>
                </div>
                <div className='overflow-auto' style={{ maxHeight: "150px" }}>
                  <p>{data.text}</p>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

function WalkPatients() {
  return (
    <React.Fragment>
      <video src={InternationalPatientsVideo} style={{ width: "100%", height: "90vh" }} autoPlay muted playsInline loop></video>
      <div className="mt-3">
        <div className="page-container pb-5">
          {walkThroughContent()}
          {tourismContent()}
          {testimonialContent()}
        </div>
      </div>
    </React.Fragment>
  )
}

export default WalkPatients