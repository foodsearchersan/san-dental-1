import React from 'react'
import ALL1 from '../Assests/ALL1.png'
import on6two from '../Assests/on6two.jpeg'
import on6three from '../Assests/on6three.jpg'
import on6four from '../Assests/on6four.jpg'

import ALLtwo from '../Assests/ALLtwo.png'
import ALLthree from '../Assests/ALLthree.png'
import BGC from '../Assests/BGC.png'
import {TiTick} from 'react-icons/ti'

import '../css/AllOn6.css'
function AllOn6() {
    return (
        <div>
            <div className='on6_img_cont'>
                <img src={ALL1} />
                <div className='on6_img_sub_cont1'>
                    <div className='on6_img_sub_cont'>
                        {/* <h1 className='on6_title1'>All-on-6 Dental Implants</h1>
                        <h1 className='on6_title2'>Easily replace six or more missing teeth</h1> */}
                    </div>
                </div>
            </div>

            <div className='on6_div1_cont'>
                <div className='on6_div1_main_cont'>
                    
                    <div className='on6_div1_main_cont_1'>
                        <h1>What are All-On-6 Implants? </h1>
                        
                    </div>
                    <div className='on6_div1_main_cont_1'>
                        <img src={ALLthree} />
                        <p>The All-On-6 dental implants help replace all of a patient's teeth with dental implants. Similar to an All-On-4 implant procedure in many ways, an All-On-6 procedure is more time intensive and complex and provides high stability and greater strength for patients with few missing teeth. It is done with 6 surgical implants placed on the upper and lower jaw with a stable prosthetic dental arch. This procedure is ideal for patients with low bone density and completely decayed or damaged teeth.</p>
                        <p></p>
                    </div>
                </div>
            </div>


            <div className='on6_div2_cont'>
                <div className='on6_div2_main_cont'>
                    <div className='on6_div2_main_cont_2'>
                        <h1>What are All-On-6 Implants?</h1>
                        <p>The All-On-6 dental implants help replace all of a patient's teeth with dental implants. Similar to an All-On-4 implant procedure in many ways, an All-On-6 procedure is more time intensive and complex and provides high stability and greater strength for patients with few missing teeth. It is done with 6 surgical implants placed on the upper and lower jaw with a stable prosthetic dental arch. This procedure is ideal for patients with low bone density and completely decayed or damaged teeth.</p>

                    </div>
                    <div className='on6_div2_main_cont_1'>
                        <img src={ALLtwo} />
                    </div>
                </div>
            </div>


            <div className='on6_div3_cont'>
                <div className='on6_div3_main_cont'>
                    <div className='on6_div3_main_cont_1'>
                        <h1>Who needs an All-On-6 implant?</h1>
                        <img src={ALLtwo} />
                    </div>
                    <div className='on6_div3_main_cont_2'>
                        <p>If you are young, lose all your teeth and have adequate bone, with All-On-6 you can have your entire set of teeth again.</p>
                        <p>We prescribe All-On-6 implants for patients who have an entire arch of missing teeth or who have partial tooth loss. All patients will receive a complete arch dental implant to replace their missing teeth. The All-On-6 approach is recommended as a reliable, long-term replacement for conventional dentures.</p>
                    </div>
                </div>
            </div>

{/* <div className='on6_scroll'>
  <img src={on6three}/>
</div> */}


            <div className='on6_div4_cont'>
                <div className='on6_div4_main_cont'>
                    <div className='on6_div4_main_cont_1'>
                        <h1>How does the procedure work?</h1>
                    </div>
                    <div className='on6_div4_main_cont_2'>
                        <p></p>
                        <p>The surgery is completed in a single day and takes between 2-4 hours and will also depend on the patient's age, overall health and other faculties. We hope to restore your gorgeous smile completely and let you go back to work the following day thanks to our same-day surgery! </p>
                    </div>
                </div>
            </div>





            <div className='on6_div5_cont'>
                <div className='on6_div5_main_cont'>
                    <div className='on6_div5_main_cont_1'>
                        <h1>What are the benefits of a teeth-in-a-day procedure?</h1>
                    </div>
                    <div className='on6_div5_main_cont_2'>
                        
                        <ul>
                            <li><TiTick className="on6_div6_li"/><div> Rapid restoration. </div></li>
                            <li><TiTick className="on6_div6_li"/><div>The ability to eat and speakeasy like you used to</div></li>
                            <li><TiTick className="on6_div6_li"/><div>A bright smile.</div></li>
                            <li><TiTick className="on6_div6_li"/><div>There's no need for detachable dentures. </div></li>
                            <li><TiTick className="on6_div6_li"/><div>The closest thing to natural teeth that lets you bite and chew normally. </div></li>
                            <li><TiTick className="on6_div6_li"/><div>A permanent long term solution.</div></li>
                        </ul>
                    </div>
                </div>
            </div>












        </div>
    )
}

export default AllOn6