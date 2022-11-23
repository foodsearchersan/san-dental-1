import React from 'react'
import on6one from '../Assests/on6one.jpg'
import sinus1 from '../Assests/sinus1.png'
import sinus2 from '../Assests/sinus2.png'
import sinus3 from '../Assests/sinus3.png'
import TL from '../Assests/TL.png'
import sinuslift1 from '../Assests/sinuslift1.png'
import { TiTick } from 'react-icons/ti'


import '../css/AllOn6.css'
function SinusLifts() {
    return (
        <div>
            <div className='on6_img_cont SinusLifts_banner_img'>
                <img src={sinuslift1} />
                <div className='on6_img_sub_cont1'>
                    <div className='on6_img_sub_cont'>
                        {/* <h1 className='on6_title1'>Sinus Lifts </h1>
                        <h1 className='on6_title2'>Easily replace six or more missing teeth</h1> */}
                    </div>
                </div>
            </div>

            <div className='on6_div1_cont'>
                <div className='on6_div1_main_cont'>
                    <div className='on6_div1_main_cont_1'>
                        <h1>What are sinus lifts?</h1>
                        <img src={sinus1} />
                    </div>
                    <div className='on6_div1_main_cont_2'>
                        <p>A sinus lift is a surgical procedure used to prepare the upper jaw area for the placement of dental implants. A standard dental implant requires 5mm of bone to be placed into the top jawline. The bone needs to be built up if this isn't the case due to bone degradation or poor quality. A maxillary sinus can frequently occupy the area where the top jaw's significant bone loss once was. In order to meet the 5mm requirement and prepare for implants, the sinus must therefore be raised back into position.
                        </p>

                    </div>
                </div>
            </div>

            
            <div className='on6_div4_cont sinus_on6_div4_con'>
                <div className='on6_div4_main_cont'>
                    <div className='on6_div4_main_cont_1'>
                        <h1>Precautions after the sinus lift </h1>
                    </div>
                    <div className='on6_div4_main_cont_2'>
                        <p></p>
                        <p>It's common to feel some swelling in the area and experience bleeding from the mouth and nose. However, sinus lift has improved with newer technologies which provide minimum invasion and no risk of side effects. After a sinus lift procedure, it is important to refrain from sneezing or blowing your nose with high pressure which can dislocate your grafting material. It is essential to continue your antibiotic treatment to prevent any chances of infection.

                        </p>
                    </div>
                </div>
            </div>



            <div className='on6_div2_cont sinsLift_cont1'>
                <div className='on6_div2_main_cont'>
                    <div className='on6_div2_main_cont_2'>
                        <h1>Periodontal disease</h1>
                        <p>Those who have had periodontal disease might require a sinus lift. This is due to the disease's potential to affect the jaw's bones and cause significant jawbone loss in those who are affected. Any bone loss can be made up for with the sinus lift.</p>

                    </div>
                    <div className='on6_div2_main_cont_1'>
                        <img src={sinus2} />
                    </div>
                </div>
            </div>


            <div className='on6_div3_cont sinsLift_cont2'>
                <div className='on6_div3_main_cont'>
                    <div className='on6_div3_main_cont_1'>
                        <h1>Tooth loss</h1>
                        <img src={TL} />
                    </div>
                    <div className='on6_div3_main_cont_2 sinsLift_cont2_txt'>
                        <p>Loss of jaw bone can happen as a result of tooth loss. The nearby bone may occasionally be reabsorbed back into the body after a tooth loss. This only becomes a problem if someone needs an implant to replace a missing tooth. There might not be enough bone for the procedure if they put off getting the implant for too long. Therefore, a sinus lift can increase bone density and make adequate reinforcement for the implant. </p>

                    </div>
                </div>
            </div>

            {/* <div className='on6_scroll'>
  <img src={on6three}/>
</div> */}
















        </div>
    )
}

export default SinusLifts