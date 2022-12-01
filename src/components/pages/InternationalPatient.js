import React from 'react';
import Slider from "react-slick";
import { FaUserCircle } from 'react-icons/fa';
import TestimonialText from '../Json/TestimonialText.json';
import InternationalPatientsVideo from '../Assests/Tourism/International_Patients.mp4';
import PhaseInvolved from '../Assests/Tourism/Phases_involved.jpg';
import food_imgae from '../Assests/Tourism/Food_image.jpg';
import FebinRoy from '../Assests/Tourism/febin-roy-bJ__24dHcGE-unsplash.jpg';
import KishoreRagav from '../Assests/Tourism/kishore-ragav-ganesh-kumar-XrAUr_m9q80-unsplash.jpg';
import NoviRaj from '../Assests/Tourism/novi-raj-cWbrwDOGZJg-unsplash.jpg';
import ParthaNarasimhan from '../Assests/Tourism/partha-narasimhan-2VFz3jVy42s-unsplash.jpg';
import RaguClicksD from '../Assests/Tourism/ragu-clicks-D1-echCD6io-unsplash.jpg';
import RaguClicks from '../Assests/Tourism/ragu-clicks-IaVXvH_z2PY-unsplash.jpg';
import RhodaAlex from '../Assests/Tourism/rhoda-alex-2L2XCJbRgxc-unsplash.jpg';
import SyedAriff from '../Assests/Tourism/syed-ariff-tIQ5iyorXKg-unsplash.jpg';
import inter from '../Assests/inter.jpg'



import '../css/InternationalPatient.css';

function walkThroughContent() {
  return (
    <div data-aos="fade-up">
      <div className='intern_pat_cont1 intern_pat_cont1_videoT'>
        <div className='intern_pat_cont12'>
          <h1 className='text-center font-weight-bold primary'>International Patient Process: A Walk Through</h1>
          <p>We understand that coming to a foreign land and getting life saving care can be intimidating. We offer you premium dental treatments at moderate costs. To help our international patients have a streamlined and easy experience we have put together an easy patient process that will make their treatment and stay safe and pleasant. We provide end-to-end care from the time you contact us. </p>
          <p>Our dentists will call you and assess your teeth and gums using Zoom, Skype, and email. After that, we can develop a preliminary treatment plan, and you can arrange to come see us. When necessary, our staff will collect you up from the airport, shuttle you to your hotel, and then drop you at our dental clinic. After your arrival, we discuss your travel alternatives based on the treatment plan for you and your family members or guests that accompany you.</p>
        </div>
      </div>

      <h1 className='intern_pat_cont2_title'>Phases involved </h1>
      <div className='intern_pat_cont2'>

        <img src={inter} alt="patients" />
      </div>
    </div>
  )
}

function tourismContent() {
  const imageData = [food_imgae, FebinRoy, KishoreRagav, NoviRaj, ParthaNarasimhan, RaguClicksD, RaguClicks, RhodaAlex, SyedAriff]
  return (
    <div data-aos="fade-up">
      {/* <h2 className='mt-5 text-center font-weight-bold primary'>Tourism</h2>
      <h4 className=' mt-2 text-center font-weight-bold secondary'>As the saying goes 'Atithi Devo Bhava', guests are our Gods in India.</h4>
      <p>Chennai is the cultural hub of the west and is often considered as the gateway to the south of India. It houses the Tamil film industry, a scenic coastline with amazing tropical beaches, amazing foods and was even named the "hottest" city by the BBC. In 2017, UNESCO Creative Cities Network (UCCN) listed chennai for its diverse and rich musical tradition.</p>
      <p>Here are some amazing spots you can visit while you are here in Chennai.</p> */}
      <div className='intern_pat_cont1 tourism1'>
        <div className='intern_pat_cont12'>
          <h1 className='text-center font-weight-bold primary '>Tourism</h1>
          <p className='intern_pat_cont12_text1'>As the saying goes ‘Atithi Devo Bhava’, guests are our Gods in India.</p>
          <p>Chennai is the cultural hub of the west and is often considered as the gateway to the south of India. It houses the Tamil film industry, a scenic coastline with amazing tropical beaches, amazing foods and was even named the "hottest" city by the BBC. In 2017, UNESCO Creative Cities Network (UCCN) listed chennai for its diverse and rich musical tradition.</p>

          <p className='intern_pat_cont12_text2'>Here are some amazing spots you can visit while you are here in Chennai.</p>
          <li>Amazing Tourist Spots</li>
          <li>Diverse Foods</li>
          <li>Cultural Events</li>
        </div>
      </div>


      <div className='row no-gutters justify-content-center'>
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
    <div className='intern_pat_cont1 inter_pat_testimo' data-aos="fade-up">
      <div className='intern_pat_cont12'>
        <h2 className='mt-5 text-center font-weight-bold primary inter_pat_testimo_title'>Testimonials</h2>
        <div>
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
      </div>
    </div>
  )
}

function InternationalPatient() {
  return (
    <React.Fragment>
      <video src={InternationalPatientsVideo} style={{ width: "100%", height: "100%" }} autoPlay loop controls muted ></video>
      <div>
        <div>
          {walkThroughContent()}
          {tourismContent()}
          {testimonialContent()}
        </div>
      </div>
    </React.Fragment>
  )
}

export default InternationalPatient