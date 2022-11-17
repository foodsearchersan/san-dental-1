import React, { useState } from 'react'
import '../css/Home.css';
 
import banner from '../Assests/banner.mp4'
import videobanner1 from '../Assests/videobanner1.mp4'
import spec1 from '../Assests/spec1.jpg'
import spec2 from '../Assests/spec2.jpg'
import spec3 from '../Assests/spec3.jpg'
import spec4 from '../Assests/spec4.jpg'

import hos3 from '../Assests/hos3.jpg'
import WhyChooseUsSquare from '../Assests/WhyChooseUsSquare.jpg'
import clients from '../Assests/clients.jpg'
import s_icons from '../Assests/s_icons.png'
import Aimplantsv2 from '../Assests/Aimplantsv2.png'
import Ptypesv2 from '../Assests/Ptypesv2.png'
import allon4v2 from '../Assests/allon4v2.png'
import allon6v2 from '../Assests/allon6v2.png'
import Sinusliftv3ai from '../Assests/Sinusliftv3ai.png'
import Toothonadayv6 from '../Assests/Toothonadayv6.png'
import one from '../Assests/one.png'
import two from '../Assests/two.png'
import three from '../Assests/three.png'
import Four from '../Assests/Four.png'
import five from '../Assests/five.png'
import six from '../Assests/six.png'
import seven from '../Assests/seven.png'
import eight from '../Assests/eight.png'
import P4 from '../Assests/P4.jpg'
import GuidedSurgeries from '../Assests/GuidedSurgeries.png'


import URL from './URL'


import CountUp from "react-countup";
import Carousel from 'react-bootstrap/Carousel';


// swiper js
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper";



// material UI 
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import TopNav from './TopNav';



function Home() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };




    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    return (
        <div>




            {/* slider */}
            <div class="banner_slider" >
                <video width="320" height="240" autoPlay loop muted>
                    <source src={videobanner1} type="video/mp4" />
                </video>
            </div>


            {/* countes */}
            <div className="counts_cont">
                <div className="counts_main_cont">

                    <div className="counts_1">
                        <p> <CountUp duration={7} className="counter" end="820" /></p>

                        <p>All-On-4 procedures<br></br>Performed</p>
                    </div>
                    <div className="counts_1">
                        <p> <CountUp duration={7} className="counter" end="6000" /></p>
                        <p>Implants Placed</p>
                    </div>
                    <div className="counts_1">
                        <p> <CountUp duration={7} className="counter" end="1000" /></p>
                        <p>Smiles Changed</p>
                    </div>


                </div>
            </div>






            {/* about us */}
            <div className='main_titile_cont'>
                <div className="specs_title chooseUs">
                    <h1 >Why Choose Us</h1>
                    <p></p>
                </div>
            </div>


            {/* 
            <div className="abt_cont">
                
                <div className="banner_img_slider">
                    <img src={one}/>
                </div>
                <div className="banner_img_slider">
                    <img src={two}/>
                </div>
                <div className="banner_img_slider">
                    <img src={three}/>
                </div>
                <div className="banner_img_slider">
                    <img src={Four}/>
                </div>
                <div className="banner_img_slider">
                    <img src={five}/>
                </div>
                
            </div> */}
          <div className='why_choose_cont'>
          <Carousel activeIndex={index} onSelect={handleSelect} className='why_choose_main_cont'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={one}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={two}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={three}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Four}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={five}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={six}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={seven}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={eight}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
          </div>



            {/* specilities stock imgages */}

            {/* <div className='spec_stock_img_cont'>
                <div className='spec_stock_img_main_cont'>
                    <img src={spec1} />
                  
                </div>
            </div> */}



            {/* vlog */}
            <div className='main_titile_cont'>
                <div className="specs_title vlog">
                    <h1>Know more</h1>
                    <p></p>
                </div>
            </div>

            <div className="vlog_slider_cont">
                <div className="vlog_main_slider_cont">
                    {/* <div className='vlog_1'>
                        <iframe className='main_y_m' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='vlog_1_main'>
                        <div className='vlog_2'>
                            <p>Latest video</p>
                            <div className='vlog_2_sub'>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>

                        <div className='vlog_2'>
                            <p>All video</p>
                            <div className='vlog_2_sub'>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <iframe className='y_videos' src="https://www.youtube.com/embed/BsCZYDCQHhg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
 */}


 
<div class="elfsight-app-88e28f72-d80c-45a7-a7cf-084cb2e0e05c"></div>
                </div>
            </div>


            {/* Specialities */}
            <div className='main_titile_cont'>
                <div className="specs_title spc_ori_title">
                    <h1 >Specialties</h1>
                    <p></p>
                </div>
            </div>



            <div className="specs_cont" >
                <div className="specs_main_cont" >
                    <div className="s_icon_cont" data-aos="fade-up">
                      <a href="https://apollo.skynoveau.in/AllOn4">  <img src={allon4v2} /></a>
                        <p>All-On-4 Implant Treatment</p>
                    </div>

                    <div className="s_icon_cont" data-aos="fade-up">
                       <a href='https://apollo.skynoveau.in/AllOn6'> <img src={allon6v2} /></a>
                        <p>All-On-6 Implant Treatment</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                      <a href='https://apollo.skynoveau.in/GuidedSurgeries'>  <img src={GuidedSurgeries} /></a>
                        <p>Guided Surgeries</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                      <a href='https://apollo.skynoveau.in/Asesthetic'>  <img src={Aimplantsv2} /></a>
                        <p>Aesthetic Implants </p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                       <a href='https://apollo.skynoveau.in/SinusLifts' > <img src={Sinusliftv3ai} /></a>
                        <p>Sinus Lifts </p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                      <a href='https://apollo.skynoveau.in/ThoothOnDay'>  <img src={Toothonadayv6} /></a>
                        <p>Tooth-on-a-Day</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                       <a href='https://apollo.skynoveau.in/ProsthesisTypes'> <img src={Ptypesv2} /></a>
                        <p>Prosthesis Types </p>
                    </div>
                </div>
            </div>







            {/* hospital images */}

            <div className='scrol_img_cont'>
                <div className='scrol_img_main_cont'>
                    <img src={P4} />
                </div>
            </div>




            <div className='test_main_cont_bg'>
                <div className='main_titile_cont'>
                    <div className="specs_title tes1">
                        <h1 >Testimonials</h1>
                        <p></p>
                    </div>
                </div>

                {/* Testimonials */}

                <div className="testi_cont">

                    {/* <h1>Client <span style={{ color: "#00b8f1" }}>Speak</span></h1> */}

                    <div className="testi_main_cont">

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}

                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="testi_content">
                                    <div className='testi_img_cont'>
                                        <img src={clients} />
                                        <div>
                                            <p className="cli_name">Raj</p>
                                            <Box className='star_cont'>
                                                <Rating name="read-only" value={5} readOnly />
                                            </Box>
                                        </div>
                                    </div>
                                    <div className='testi_content_main_cont'>
                                        <div className='cli_reviewc_main_content'>
                                            <p className='cli_reviewc_content'>"Thank you so much Dr. Prem and team for your valuable service even during the pandemic when everyone had difficult times. It showed the level of care you have for your patients!"</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testi_content">
                                    <div className='testi_img_cont'>
                                        <img src={clients} />
                                        <div>
                                            <p className="cli_name">Bala</p>
                                            <Box className='star_cont'>
                                                <Rating name="read-only" value={5} readOnly />
                                            </Box>
                                        </div>
                                    </div>
                                    <div className='testi_content_main_cont'>
                                        <div className='cli_reviewc_main_content'>
                                            <p className='cli_reviewc_content'>"Dr Prem Alex is specialist in All-On-4 and All-On-6 implantation. Overall, my experience was very good with Apollo Dental OMR"</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>ssssssssss

                            <SwiperSlide>
                                <div className="testi_content">
                                    <div className='testi_img_cont'>
                                        <img src={clients} />
                                        <div>
                                            <p className="cli_name">Anu</p>
                                            <Box className='star_cont'>
                                                <Rating name="read-only" value={5} readOnly />
                                            </Box>
                                        </div>
                                    </div>
                                    <div className='testi_content_main_cont'>
                                        <div className='cli_reviewc_main_content'>
                                            <p className='cli_reviewc_content'>"My recent experience with Dr Prem at Apollo Dental OMR was wonderful. I went to the clinic based on the reviews online but wasn't sure until I got my broken braces fixed. Very grateful that I found them and would personally recommend them"</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testi_content">
                                    <div className='testi_img_cont'>
                                        <img src={clients} />
                                        <div>
                                            <p className="cli_name">Moganambal</p>
                                            <Box className='star_cont'>
                                                <Rating name="read-only" value={5} readOnly />
                                            </Box>
                                        </div>
                                    </div>
                                    <div className='testi_content_main_cont'>
                                        <div className='cli_reviewc_main_content'>
                                            <p className='cli_reviewc_content'>"I am very satisfied with the All-On-6 implants. All the staff here were very kind and caring to
                                                me. Dr. Prem Alex Lawrence was very skilled and handled my case very well"</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testi_content">
                                    <div className='testi_img_cont'>
                                        <img src={clients} />
                                        <div>
                                            <p className="cli_name">Raj</p>
                                            <Box className='star_cont'>
                                                <Rating name="read-only" value={5} readOnly />
                                            </Box>
                                        </div>
                                    </div>
                                    <div className='testi_content_main_cont'>
                                        <div className='cli_reviewc_main_content'>
                                            <p className='cli_reviewc_content'>"Thank you so much Dr. Prem and team for your valuable service even during the pandemic when everyone had difficult times. It showed the level of care you have for your patients!"</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="testi_content">
                                    <div className='testi_img_cont'>
                                        <img src={clients} />
                                        <div>
                                            <p className="cli_name">Nagalatha</p>
                                            <Box className='star_cont'>
                                                <Rating name="read-only" value={5} readOnly />
                                            </Box>
                                        </div>
                                    </div>
                                    <div className='testi_content_main_cont'>
                                        <div className='cli_reviewc_main_content'>
                                            <p className='cli_reviewc_content'>"I was looking to finalize a good Dentist for my implantation, through one of my friends' references I met Dr. Prem Alex from Apollo Dental OMR. His treatment for All-on-4 implantation was well planned and very comfortable."</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Home;