import React from 'react'
import clients from '../Assests/clients.jpg'
import Pic3 from '../Assests/Pic3.jpg'

function MeetDrPrem() {
  return (
    <div>
      <div className='on6_img_cont'>
                <img src={Pic3} />
                <div className='on6_img_sub_cont1'>
                    <div className='on6_img_sub_cont'>
                        <h1 className='on6_title1'>MeetDrPrem</h1>
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
                        <img src={clients} />
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
                        <img src={clients} />
                    </div>
                </div>
            </div>


            <div className='on6_div3_cont'>
                <div className='on6_div3_main_cont'>
                    <div className='on6_div3_main_cont_1'>
                        <h1>Who needs an All-On-6 implant?</h1>
                        <img src={clients} />
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

export default MeetDrPrem