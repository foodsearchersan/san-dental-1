import React from 'react'
import GSone from '../Assests/GSone.png'
import on6two from '../Assests/on6two.jpeg'
import GStwo from '../Assests/GStwo.png'
import on6four from '../Assests/on6four.jpg'
import BGC from '../Assests/BGC.png'
import { TiTick } from 'react-icons/ti'


import '../css/AllOn6.css'
function GuidedSurgeries() {
    return (
        <div>
            <div className='on6_img_cont'>
                <img data-aos="fade-up" src={GStwo} />
                <div className='on6_img_sub_cont1'>
                    <div className='on6_img_sub_cont'>
                        {/* <h1 className='on6_title1'>Guided Surgeries </h1>
                        <h1 className='on6_title2'>Easily replace six or more missing teeth</h1> */}
                    </div>
                </div>
            </div>




            <div className='on6_div11_cont guide_on6_div11_cont'>
                <div className='on6_div1_cont'>

                    <div className="all_on_6_des_title" data-aos="fade-up">
                        <h1>Guided Surgeries </h1>
                        <p></p>
                    </div>

                    <div className='on6_div1_main_cont'>
                        <div className='on6_div1_main_cont_1'>
                            <img data-aos="fade-up" src={GSone} />
                        </div>
                        <div className='on6_div1_main_cont_2'>
                            <p data-aos="fade-up">Three-dimensional (3D) imaging, computerized tomography (CT) scans, CAD and CAM computer imaging, and digital x-rays are among the technologies frequently used in computer-guided dental implant surgery.</p>
                            <p data-aos="fade-up">The dentist and his or her assistant create a customized surgery treatment plan specifically for that patient after taking a CT scan of the patient. The implant was then put in place by the dentist using cutting-edge computer technology. The dentist will then create models of the crowns to be inserted using 3D imaging technology and CAD digital design software. Based on the models, CAM software can be used to digitally design the restorations. The new crowns are then attached to the implants by the dentist. The last step is to take digital x-rays to confirm</p>
                        </div>
                    </div>

                </div>
            </div>



            <div className='on6_div33_cont on6_footer'>
                <div className='on6_div3_cont'>

                    <div className="all_on_6_des_title" data-aos="fade-up">
                        <h1>How does the procedure work?</h1>
                        <p></p>
                    </div>

                    <div className='on6_div3_main_cont'>

                        <div className='on6_div3_main_cont_2'>
                            <ul>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                    The amount of time the patient spends in the office can also be reduced during guided implant surgery. The procedure is reputed to be accurate and secure. Smaller incisions that typically cause less bleeding and discomfort can be made by dentists. In addition, there won't be much of a bone graft, which involves transplanting bone tissue.
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                    Patients who undergo guided surgery will experience new dental implants as the final product, which will result in replacement teeth that look and feel healthy and natural. This makes it a very alluring alternative for people who are experiencing tooth loss as a result of dental decay or damage.
                                    </div>
                                </li>
                                <li data-aos="fade-up">
                                    <TiTick className="on6_tick_icon" />
                                    <div>
                                    Guided surgery results in tooth replacements that resemble natural teeth almost perfectly. The patient is now able to behave normally in terms of eating, drinking, and speaking. The absence of teeth causes the jawbone to deteriorate, so the implants will also stop that from happening. Dental implants will aid in maintaining the stability of the neighboring teeth if you have not lost all of your teeth. The major benefit of dental implants is the prevention of gum disease. 
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>














        </div>
    )
}

export default GuidedSurgeries