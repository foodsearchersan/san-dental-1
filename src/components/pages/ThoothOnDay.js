import React from 'react'
import TDone from '../Assests/TDone.png'
import TDtwo from '../Assests/TDtwo.png'
import on6three from '../Assests/on6three.jpg'
import on6four from '../Assests/on6four.jpg'
import { TiTick } from 'react-icons/ti'
import Toothonaday from '../Assests/Toothonaday.png'

import '../css/AllOn6.css'
function ThoothOnDay() {
  return (
    <div>
      <div className='on6_img_cont'>
        <img src={Toothonaday} />
        <div className='on6_img_sub_cont1'>
          <div className='on6_img_sub_cont'>
            {/* <h1 className='on6_title1'>Tooth-In-a-Day</h1>
            <h1 className='on6_title2'>Easily replace six or more missing teeth</h1> */}
          </div>
        </div>
      </div>

      <div className='on6_div1_cont'>
        <div className='on6_div1_main_cont'>
          <div className='on6_div1_main_cont_1'>
            <h1>What is Tooth-In-a-Day?</h1>
            <img src={TDone} />
          </div>
          <div className='on6_div1_main_cont_2'>
            <p>An innovative dental implant-supported denture procedure is called Teeth in a Day. Teeth in a Day streamlines the procedure rather than having to remove teeth, place dental implants, design the denture, and then attach the denture over the course of several months. We will immediately place a conventional removable denture or an immediate load implant-retained removable denture in place of placing implants and asking patients to go months without teeth. Before we permanently attach the denture, you'll typically need to have it adjusted or replaced after your smile has healed completely.</p>
          </div>
        </div>
      </div>


      <div className='on6_div4_cont'>
                <div className='on6_div4_main_cont'>
                    <div className='on6_div4_main_cont_1'>
                        <h1>Who can go for a ‘Tooth-in-a-day’?</h1>
                    </div>
                    <div className='on6_div4_main_cont_2'>
                        <p></p>
                        <p>Patients with a missing tooth or who had an extraction, can go for the Tooth-In-a-Day procedure.  </p>
                    </div>
                </div>
            </div>



      <div className='on6_div3_cont tooth_on6_div3_cont'>
        <div className='on6_div3_main_cont'>
          <div className='on6_div3_main_cont_1'>
            <h1>How does the procedure work?</h1>
            <img src={TDtwo} />
          </div>
          <div className='on6_div3_main_cont_2'>
            <p>Compared to the standard implant procedure, which can take anywhere between four and nine months to complete, ‘Tooth-in-a-Day’ can provide you with all of your dental needs by the time you're prepared to leave our clinic. To determine where to place the implants, our team will first take a high-resolution CT scan of your jawbone structure. After the implants are placed, a non-removable appliance is designed to cover them and provide reliable function. Actually, you'll get two restorations most of the time. We'll start the ‘Tooth-in-a-day’ procedure as soon as we receive your initial, temporary restoration. When you come to our office, we'll take out any teeth that are damaged. Following that, we position the temporary restoration and place the dental implant posts. as soon as your implants.</p>
          </div>
        </div>
      </div>

      {/* <div className='on6_scroll'>
  <img src={on6three}/>
</div> */}





<div className='on6_div5_cont prosthesis_on6_div5_cont'>
        <div className='on6_div5_main_cont prosthesis_on6_div5_main_cont'>
          <div className='on6_div5_main_cont_1'>
            <h1>What are the benefits of a ‘Tooth-In-a-Day’ procedure?</h1>
          </div>
          <div className='on6_div5_main_cont_2'>

            <ul>
              <li><TiTick className="on6_div6_li" /><div>No time spent without teeth, which retains the facial shape, chewing ability, and maintaining clear speech
              </div></li>
              <li><TiTick className="on6_div6_li" /><div>The temporary prosthetic gives extra support to the dental implants fused to the jawbone</div></li>
              <li><TiTick className="on6_div6_li" /><div>Patients are more comfortable with the procedure</div></li>
              <li><TiTick className="on6_div6_li" /><div>Lesser time spent on the dental chair</div></li>
              <li><TiTick className="on6_div6_li" /><div>Lesser visits to your dentist for the same treatment</div></li>                                              

            </ul>
          </div>
        </div>
      </div>


 




    </div>
  )
}

export default ThoothOnDay