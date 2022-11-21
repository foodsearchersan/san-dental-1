import React, { useEffect, useState } from 'react'
import '../css/Home.css';
import YouTubeData from './you-tube-data/YouTubeData'

import videobanner1 from '../Assests/videobanner1.mp4'

import clients from '../Assests/clients.jpg'
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

//react counter
import CountUp from "react-countup";

//boostrap
import Carousel from 'react-bootstrap/Carousel';

// swiper js
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// material UI 
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



function Home() {


    // why choose us 
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    //youtube videos data
   
   const [currentYouTubeVideo, setCurrentYouTubeVideo] =useState("fODTy_gvJ28");


//    useEffect(()=>{

//    },[currentYouTubeVideo])

   const youTubeVideoClicked=(e)=>{
    console.log("id is "+e.target.props)
    console.log("id is "+e.target)
    console.log("id is "+e )
    setCurrentYouTubeVideo(e)
   }
   YouTubeData.map((item)=>{
    console.log(item.image)
   })
// setYouTube()

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



            {/* why choose us */}
            <div className='main_titile_cont'>
                <div className="specs_title chooseUs">
                    <h1 >Why Choose Us</h1>
                    <p></p>
                </div>
            </div>

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

            {/* vlog */}
            <div className='main_titile_cont'>
                <div className="specs_title vlog">
                    <h1>Know more</h1>
                    <p></p>
                </div>
            </div>

            <div className="vlog_slider_cont">
                <div className="vlog_main_slider_cont">
                    <div className='you_main_slider1'>
                        <iframe width="100%" height="100%" id='ifram_video' src={`https://www.youtube.com/embed/${currentYouTubeVideo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='you_main_slider2'>
                        <div className='you_main_slider21'>
                          {
                            YouTubeData.map((item)=>{
                                let temp=item.id
                               return(
                                <img src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`} props={item.id} onClick={(temp)=>{setCurrentYouTubeVideo(temp)}}/>
                               )
                            })
                          }

                        </div>
                    </div>
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