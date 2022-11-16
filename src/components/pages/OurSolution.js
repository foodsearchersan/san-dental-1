import React from 'react'

import on6one from '../Assests/on6one.jpg'
import on6two from '../Assests/on6two.jpeg'
import on6three from '../Assests/on6three.jpg'
import on6four from '../Assests/on6four.jpg'
import {TiTick} from 'react-icons/ti'

function OurSolution() {
  return (
    <div>
      <div className='on6_img_cont'>
                <img src={on6one} />
                <div className='on6_img_sub_cont1'>
                    <div className='on6_img_sub_cont'>
                        <h1 className='on6_title1'>Our Solution</h1>
                        <h1 className='on6_title2'></h1>
                    </div>
                </div>
            </div>

            <div className='on6_div1_cont'>
                <div className='on6_div1_main_cont'>
                    
                    <div className='on6_div1_main_cont_1'>
                        <h1>What are All-On-6 Implants? </h1>
                        
                    </div>
                    <div className='on6_div1_main_cont_1'>
                        <img src={on6two} />
                        <p>Our Apollo Dental clinics in Chennai and Hyderabad, aim to provide the world's best dental care and treatment for patients across India and overseas. They are dedicated to successful patient outcomes and creating confident smiles by providing patients with chronic dental problems cutting edge permanent solutions. Our expert dental professionals provide personalised individually tailored treatments in implantology, general dentistry, and cosmetology and have more than 50+ years of combined experience in transforming patient smiles.

                        .</p>
                        <p>Our specialised implant treatments include All-on-4 and All-on-6 dental implants, various dental fillings, sinus lifts, Invisalign treatments, periodontal care, and all types of cosmetic dental procedures.  Our goal is to provide our patients with the highest standards of quality at affordable cost  with a long term purview. </p>
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
                        <img src={on6three} />
                    </div>
                </div>
            </div>


            <div className='on6_div3_cont'>
                <div className='on6_div3_main_cont'>
                    <div className='on6_div3_main_cont_1'>
                        <h1>Who needs an All-On-6 implant?</h1>
                        <img src={on6four} />
                    </div>
                    <div className='on6_div3_main_cont_2'>
                        <p>If you are young, lose all your teeth and have adequate bone, with All-On-6 you can have your entire set of teeth again.</p>
                        <p>We prescribe All-On-6 implants for patients who have an entire arch of missing teeth or who have partial tooth loss. All patients will receive a complete arch dental implant to replace their missing teeth. The All-On-6 approach is recommended as a reliable, long-term replacement for conventional dentures.</p>
                    </div>
                </div>
            </div>
    </div>

    

  )
}

export default OurSolution