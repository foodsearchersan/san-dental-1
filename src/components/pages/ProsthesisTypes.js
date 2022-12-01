import React from 'react'
import DPone from '../Assests/DPone.png'
import DPtwo from '../Assests/DPtwo.png'
import on6three from '../Assests/on6three.jpg'
import on6four from '../Assests/on6four.jpg'
import PTypes from '../Assests/PTypes.png'
import { TiTick } from 'react-icons/ti'


import '../css/AllOn6.css'
function ProsthesisTypes() {
  return (
    <div>
      <div className='on6_img_cont'>
        <img data-aos="fade-up" src={PTypes} />
        <div className='on6_img_sub_cont1'>
          <div className='on6_img_sub_cont'>
            {/* <h1 className='on6_title1'>Prosthesis type </h1>
            <h1 className='on6_title2'>Easily replace six or more missing teeth</h1> */}
          </div>
        </div>
      </div>


      <div className='on6_div11_cont pros_1_on6_div11_cont'>
        <div className='on6_div1_cont'>

          <div className="all_on_6_des_title" data-aos="fade-up">
            <h1>Dental prostheses: What Are They?</h1>
            <p></p>
          </div>

          <div className='on6_div1_main_cont'>
            <div className='on6_div1_main_cont_1'>
              <img data-aos="fade-up" src={DPtwo} />
            </div>
            <div className='on6_div1_main_cont_2'>
              <p data-aos="fade-up">Dental prosthetics are dental appliances used to restore or replace missing or damaged teeth. Dental prostheses are capable of much more than just enhancing your smile; they can also lessen the risk of gum disease in the event of a missing tooth, facilitate chewing, and keep the jawbone from deteriorating.</p>
            </div>
          </div>
        </div>
      </div>



      <div className='on6_div22_cont pros_2_on6_div22_cont'>
        <div className='on6_div2_cont'>

          <div className="all_on_6_des_title" data-aos="fade-up">
            <h1>Types of Dental prostheses</h1>
            <p></p>
          </div>

          <div className='on6_div2_main_cont'>

            <div className='on6_div2_main_cont_2'>
              <h1 data-aos="fade-up">Ceramic Bridges:</h1>
              <p data-aos="fade-up">The All-On-6 dental implants help replace all of a patient's teeth with dental implants. Similar to an All-On-4 implant procedure in many ways, an All-On-6 procedure is more time intensive and complex and provides high stability and greater strength for patients with few missing teeth. It is done with 6 surgical implants placed on the upper and lower jaw with a stable prosthetic dental arch. This procedure is ideal for patients with low bone density and completely decayed or damaged teeth.</p>
            </div>
            <div className='on6_div2_main_cont_1'>
              <img data-aos="fade-up" src={DPone} />
            </div>
          </div>

        </div>
      </div>




      <div className='on6_div33_cont pros_3_on6_div33_cont'>
        <div className='on6_div3_cont'>

          <div className="all_on_6_des_title" data-aos="fade-up">
            <h1>Benefits of a ceramic bridge</h1>
            <p></p>
          </div>

          <div className='on6_div3_main_cont'>
            <div className='on6_div3_main_cont_2'>
              <ul>
                <li data-aos="fade-up">
                  <TiTick className="on6_tick_icon" />
                  <div>
                    Without the use of dental implants or a removable denture, bridges fill the gap
                  </div>
                </li>
                <li data-aos="fade-up">
                  <TiTick className="on6_tick_icon" />
                  <div>
                    Ceramic bridges can be matched to your teeth' colour and form which provides an aesthetic look
                  </div>
                </li>
                <li data-aos="fade-up">
                  <TiTick className="on6_tick_icon" />
                  <div>
                    If they are maintained and built properly, they can last for 10-15 years
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>


      <div className='on6_div33_cont on6_footer'>
        <div className='on6_div3_cont'>

          <div className="all_on_6_des_title" data-aos="fade-up">
            <h1>Fixed Bridge advantages</h1>
            <p></p>
          </div>

          <div className='on6_div3_main_cont'>
            <div className='on6_div3_main_cont_2'>
              <ul>
                <li data-aos="fade-up">
                  <TiTick className="on6_tick_icon" />
                  <div>
                    enough room for the bridge to fit and for the dentist to work
                  </div>
                </li>
                <li data-aos="fade-up">
                  <TiTick className="on6_tick_icon" />
                  <div>
                    Good oral hygiene because if you can't take care of your mouth before getting a bridge, you might struggle after
                  </div>
                </li>
                <li data-aos="fade-up">
                  <TiTick className="on6_tick_icon" />
                  <div>
                    Strong, healthy teeth to support a bridge and false teeth, strong teeth and good bone support is needed. A bridge might make the situation worse if there is inadequate bone support
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

export default ProsthesisTypes