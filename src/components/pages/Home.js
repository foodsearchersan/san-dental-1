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

import DChoose1 from '../Assests/ChoosseUs/DChoose1.png'
import DChoose2 from '../Assests/ChoosseUs/DChoose2.png'
import DChoose3 from '../Assests/ChoosseUs/DChoose3.png'
import DChoose4 from '../Assests/ChoosseUs/DChoose4.png'
import DChoose5 from '../Assests/ChoosseUs/DChoose5.png'
import DChoose6 from '../Assests/ChoosseUs/DChoose6.png'
import DChoose7 from '../Assests/ChoosseUs/DChoose7.png'
import DChoose8 from '../Assests/ChoosseUs/DChoose8.png'
import P4 from '../Assests/P4.jpg'

import chooose1 from '../Assests/ChoosseUs/chooose1.png'
import chooose2 from '../Assests/ChoosseUs/chooose2.png'
import chooose3 from '../Assests/ChoosseUs/chooose3.png'
import chooose4 from '../Assests/ChoosseUs/chooose4.png'
import chooose5 from '../Assests/ChoosseUs/chooose5.png'
import chooose6 from '../Assests/ChoosseUs/chooose6.png'
import chooose7 from '../Assests/ChoosseUs/chooose7.png'
import chooose8 from '../Assests/ChoosseUs/chooose8.png'


import banner1 from '../Assests/banner1.png'
import banner2 from '../Assests/banner2.png'
import banner3 from '../Assests/banner3.png'
import banner4 from '../Assests/banner4.png'
import banner5 from '../Assests/banner5.png'
import banner6 from '../Assests/banner3.png'
import banner7 from '../Assests/banner7.png'
import WYCU from '../Assests/WYCU.png'
import Drprem from '../Assests/Drprem.png'

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

    const [currentYouTubeVideo, setCurrentYouTubeVideo] = useState("U-oE2XElmvI");

    //    useEffect(()=>{

    //    },[currentYouTubeVideo])

    const youTubeVideoClicked = (e) => {
        console.log("id is " + e.target.props)
        console.log("id is " + e.target)
        console.log("id is " + e)
        setCurrentYouTubeVideo(e.target.getAttribute('data1'))
    }
    YouTubeData.map((item) => {
        console.log(item.image)
    })
    // setYouTube()

    return (
        <div>
            {/* slider */}
            <div class="banner_slider" >
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={false}
                    modules={[Autoplay]}
                    className="mySwiper"

                >
                    <SwiperSlide>
                        <img src={banner1} className='why_choose_img home_banner_img' />
                    </SwiperSlide>

                    <SwiperSlide> <img src={banner2} className='why_choose_img home_banner_img ' /></SwiperSlide>
                    <SwiperSlide> <img src={banner3} className='why_choose_img home_banner_img' /></SwiperSlide>
                    <SwiperSlide> <img src={banner4} className='why_choose_img home_banner_img' /></SwiperSlide>
                    <SwiperSlide> <img src={Drprem} className='why_choose_img home_banner_img ' /></SwiperSlide>
                    <SwiperSlide> <img src={banner6} className='why_choose_img home_banner_img' /></SwiperSlide>
                    <SwiperSlide> <img src={banner7} className='why_choose_img home_banner_img' /></SwiperSlide>

                </Swiper>
            </div>


            {/* countes */}
            <div className="counts_cont">
                <div className="counts_main_cont">


                    <div className="counts_1">
                        <p> <CountUp duration={7} className="counter" end="823" /></p>

                        <p>All-On-4 and All-On-6</p>
                    </div>
                    <div className="counts_1">
                        <p> <CountUp duration={7} className="counter" end="6000" /></p>
                        <p>Implants Placed</p>
                    </div>
                    <div className="counts_1">
                        <p> <CountUp duration={7} className="counter" end="6800" /></p>
                        <p>Happy Smiles</p>
                    </div>


                </div>
            </div>



            {/* why choose us */}
            <div className='main_titile_cont firsts_main_titile_cont choose_title_cont ' >
                <div className="specs_title chooseUs" data-aos="fade-up">
                    <h1>Why Choose Us</h1>
                    <p></p>
                </div>
            </div>

            <div className='why_choose_cont'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide className='chooseUs_cont_box'>
                        <img src={WYCU} className='why_choose_img Dwhy_choose_img' />
                        <img src={WYCU} className='why_choose_img Mwhy_choose_img' />
                        <p>The experience, technological expertise, and skill in All On 4 implants</p>
                    </SwiperSlide>
                    <SwiperSlide className='chooseUs_cont_box'>
                        <img src={DChoose2} className='why_choose_img Dwhy_choose_img' />
                        <img src={chooose2} className='why_choose_img Mwhy_choose_img' />
                        <p> Certified medical professionals and reliant clinics</p>
                    </SwiperSlide>
                    <SwiperSlide className='chooseUs_cont_box'>
                        <img src={DChoose3} className='why_choose_img Dwhy_choose_img' />
                        <img src={chooose3} className='why_choose_img Mwhy_choose_img' />
                        <p> Final teeth fixed in record time and with impeccable care</p>
                    </SwiperSlide>
                    <SwiperSlide className='chooseUs_cont_box'>
                        <img src={DChoose4} className='why_choose_img Dwhy_choose_img' />
                        <img src={chooose4} className='why_choose_img Mwhy_choose_img' />
                        <p>Your whole medical care and diagnostics at one location</p>
                    </SwiperSlide>
                    <SwiperSlide className='chooseUs_cont_box'>
                        <img src={DChoose5} className='why_choose_img Dwhy_choose_img' />
                        <img src={chooose5} className='why_choose_img Mwhy_choose_img' />
                        <p>Streamlined approach with backup plans built in</p>
                    </SwiperSlide>
                    <SwiperSlide className='chooseUs_cont_box'>
                        <img src={DChoose6} className='why_choose_img Dwhy_choose_img' />
                        <img src={chooose6} className='why_choose_img Mwhy_choose_img' />
                        <p>We recommend services even for weak or thin jawbones</p>
                    </SwiperSlide>
                    <SwiperSlide className='chooseUs_cont_box'>
                        <img src={DChoose7} className='why_choose_img Dwhy_choose_img' />
                        <img src={chooose7} className='why_choose_img Mwhy_choose_img' />
                        <p>Alternatives for durable Zirconia-Porcelain that are economical</p>
                    </SwiperSlide>
                    <SwiperSlide className='chooseUs_cont_box'>
                        <img src={DChoose8} className='why_choose_img Dwhy_choose_img' />
                        <img src={chooose8} className='why_choose_img Mwhy_choose_img' />
                        <p>Alternatives for durable Zirconia-Porcelain that are economical
                            Banner 8: Known outcomes and high reliability</p>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* vlog */}
            <div className='main_titile_cont'  >
                <div className="specs_title vlog" data-aos="fade-up">
                    <h1>Know more</h1>
                    <p></p>
                </div>
            </div>

            <div className="vlog_slider_cont">
                <div className="vlog_main_slider_cont">
                    <div className='you_main_slider1' >
                        <iframe width="100%" height="100%" id='ifram_video' src={`https://www.youtube.com/embed/${currentYouTubeVideo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='you_main_slider2' >
                        <div className='you_main_slider21'>
                            {
                                YouTubeData.map((item) => {
                                    let temp = item.id
                                    return (
                                        <img src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`} data1={item.id} onClick={youTubeVideoClicked} />
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>


            {/* Specialities */}
            <div className='main_titile_cont' data-aos="fade-up">
                <div className="specs_title spc_ori_title">
                    <h1>Specialities</h1>
                    <p></p>
                </div>
            </div>

            <div className="specs_cont" >
                <div className="specs_main_cont" >
                    <div className="s_icon_cont" data-aos="fade-up">
                        <a href="https:/apollodental.netlify.app/AllOn4">  <img src={allon4v2} /></a>
                        <p>All-On-4 Implant Treatment</p>
                    </div>

                    <div className="s_icon_cont" data-aos="fade-up">
                        <a href='https:/apollodental.netlify.app/AllOn6'> <img src={allon6v2} /></a>
                        <p>All-On-6 Implant Treatment</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <a href='https:/apollodental.netlify.app/GuidedSurgeries'>  <img src={GuidedSurgeries} /></a>
                        <p>Guided Surgeries</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <a href='https:/apollodental.netlify.app/Asesthetic'>  <img src={Aimplantsv2} /></a>
                        <p>Aesthetic Implants </p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <a href='https:/apollodental.netlify.app/SinusLifts' > <img src={Sinusliftv3ai} /></a>
                        <p>Sinus Lifts </p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <a href='https:/apollodental.netlify.app/ThoothOnDay'>  <img src={Toothonadayv6} /></a>
                        <p>Tooth-in-a-Day</p>
                    </div>
                    <div className="s_icon_cont" data-aos="fade-up">
                        <a href='https:/apollodental.netlify.app/ProsthesisTypes'> <img src={Ptypesv2} /></a>
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
                <div className='main_titile_cont' data-aos="fade-up">
                    <div className="specs_title tes1">
                        <h1>Testimonials</h1>
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
                                delay: 2500,
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
                            </SwiperSlide>

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