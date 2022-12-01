import React from 'react'
import '../css/AllOn6.css'
import drPrem from '../Assests/drPrem.jpg'
import clients from '../Assests/clients.jpg'
import linkedin from '../Assests/linkedin.png'

function MeetDrPrem() {
    return (
        <div>
            <div className='on6_div11_cont drprem_on6_div11_cont on6_footer '>
                <div className='on6_div1_cont drprem_on6_div1_cont'>

                    {/* <div className="all_on_6_des_title">
                        <h1>All-On-6 Implants</h1>
                        <p></p>
                    </div> */}

                    <div className='on6_div1_main_cont'>
                        <div className='on6_div1_main_cont_1 drprem_on6_div1_main_cont_1'>
                            <img src={drPrem} data-aos="fade-up"/>
                        </div>
                        <div className='on6_div1_main_cont_2 drprem_on6_div1_main_cont_2' data-aos="fade-up">
                            <h1>Dr Prem Lawrence </h1>
                            <p className='Dr_Prem_founder'> Periodontist & Implantologist</p>
                            <p className='Dr_Prem_quali'>Qualifications: BDS, MDS, DICOI</p>
                            <p>Dr. Prem Alex Lawrence is a Senior Implantologist with more than 6000 successful dental implants to his wide scale experience. He is a keen diagnost, and has treated people from various walks of life during his extensive experience of over 15 years. He has a number of research publications to his credit and contributes to scientific interest also through presentations at both national and international conferences and events. He holds bachelor's and master's degrees in dental surgery from SRM Dental College and  Sree Balaji Dental College.  Until 2015, he served as Vasan Dental Care's Zonal Clinical Head and consultant. </p>
                            <p>A diligent implantologist who is self-assured, innovative, hard-working, and experienced in inspiring teams to great success, he has also mentored and trained many in the field of implant dentistry. His unrivaled clinical expertise offers a tailored and laser-focused approach to treatment. The International Congress of Oral Implantologists has recognised him as a Diplomat and Fellow. Additionally, he is also a licensed laser specialist. He was nominated for<italic>“Outstanding Dentist of the Year in India- under 45 Years" in 2015 and as "Implantologist in India" by Famdent. Dr Prem is a celebrated member of Indian Dental Association, International Congress of Oral Implants and Indian Society of Periodontology.</italic> </p>
                            <a href='https://www.linkedin.com/company/premolar-healthcare/' target='_blank'> <img src={linkedin} /></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MeetDrPrem