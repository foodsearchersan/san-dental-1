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
        <img src={PTypes} />
        <div className='on6_img_sub_cont1'>
          <div className='on6_img_sub_cont'>
            {/* <h1 className='on6_title1'>Prosthesis type </h1>
            <h1 className='on6_title2'>Easily replace six or more missing teeth</h1> */}
          </div>
        </div>
      </div>

      <div className='on6_div1_cont'>
        <div className='on6_div1_main_cont'>
          <div className='on6_div1_main_cont_1'>
            <h1>Dental prostheses: What Are They?</h1>
            <img src={DPtwo} />
          </div>
          <div className='on6_div1_main_cont_2 prosthesisType_cont1_txt'>
            <p>Dental prosthetics are dental appliances used to restore or replace missing or damaged teeth. Dental prostheses are capable of much more than just enhancing your smile; they can also lessen the risk of gum disease in the event of a missing tooth, facilitate chewing, and keep the jawbone from deteriorating.</p>

          </div>
        </div>
      </div>


      <div className='on6_div2_cont'>
        <div className='on6_div2_main_cont'>
          <div className='on6_div2_main_cont_2'>
            <h1>Types of Dental prostheses</h1>
            <h1>Ceramic Bridges:</h1>
            <p>For replacing one or more missing teeth, ceramic bridges are a popular alternative to dental implants because they don't require surgery. Due to advancements in dental technology, it is now possible to create very strong bridges out of ceramic rather than the metal that was once required to make them strong enough to span the space left by missing teeth. </p>

          </div>
          <div className='on6_div2_main_cont_1'>
            <img src={DPone} />
          </div>
        </div>
      </div>





      <div className='on6_div5_cont prosthesis_on6_div5_cont'>
        <div className='on6_div5_main_cont prosthesis_on6_div5_main_cont'>
          <div className='on6_div5_main_cont_1'>
            <h1>Benefits of a ceramic bridge</h1>
          </div>
          <div className='on6_div5_main_cont_2'>

            <ul>
              <li><TiTick className="on6_div6_li" /><div> Without the use of dental implants or a removable denture, bridges fill the gap
              </div></li>
              <li><TiTick className="on6_div6_li" /><div>Ceramic bridges can be matched to your teeth' colour and form which provides an aesthetic look</div></li>
              <li><TiTick className="on6_div6_li" /><div>If they are maintained and built properly, they can last for 10-15 years</div></li>

            </ul>
          </div>
        </div>
      </div>



      <div className='on6_div5_cont prosthesis_on6_div5_cont'>
        <div className='on6_div5_main_cont prosthesis_on6_div5_main_cont'>
          <div className='on6_div5_main_cont_1'>
            <h1>Fixed Bridge advantages:</h1>
          </div>
          <div className='on6_div5_main_cont_2'>

            <ul>
              <li><TiTick className="on6_div6_li" /><div> enough room for the bridge to fit and for the dentist to work
              </div></li>
              <li><TiTick className="on6_div6_li" /><div>Good oral hygiene because if you can't take care of your mouth before getting a bridge, you might struggle after</div></li>
              <li><TiTick className="on6_div6_li" /><div>Strong, healthy teeth to support a bridge and false teeth, strong teeth and good bone support is needed. A bridge might make the situation worse if there is inadequate bone support</div></li>

            </ul>
          </div>
        </div>
      </div>

















    </div>
  )
}

export default ProsthesisTypes