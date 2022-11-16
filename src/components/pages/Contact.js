import React from 'react';

function Contact() {
    return (
        <div className='container'>
            <div className='contact py-5'>
                <h3 className='font-weight-bold'>Contact Us</h3>
                <div>Get your consult today</div>
                <h4 className='font-weight-bold mt-4'>Operating Hours</h4>
                <div>Sunday - Saturday : 9:00 am to 9:00 pm</div>
                <div>Appointments can also be made <span className='font-weight-bold'>online</span> or via <span className='font-weight-bold'>email</span> at any time.</div>
                <div>
                    <span className='font-weight-bold'>Whatsapp: </span>
                </div>
                <div>
                    <span className='font-weight-bold'>Email: </span>
                    <a href="mailto:apollodental@premolar.org" target="_blank" rel="noreferrer">apollodental@premolar.org</a>
                </div>
                <h4 className='mt-4 font-weight-bold'>Address</h4>
                <div className='row'>
                    <div className='col-lg-4 col-sm-6 mb-4'>
                        <h5 className='font-weight-bold'>Apollo Dental Navalur</h5>
                        <div>House of Hiranandani</div>
                        <div>Unit #2 & 3, Gateway House,</div>
                        <div>5/63, OMR,</div>
                        <div>Egattur Village, Thalambur Post,</div>
                        <div>Chennai - 600130</div>
                        <div>Mob# : 98844 54007 / 98844 53007</div>
                    </div>
                    <div className='col-lg-4 col-sm-6 mb-4'>
                        <h5 className='font-weight-bold'>Apollo Dental Thoraipakkam</h5>
                        <div>#5, Vinayagam Avenue,</div>
                        <div>Okkiyam, Thoraipakkam,</div>
                        <div>OMR,</div>
                        <div>Chennai - 600097</div>
                        <div>Mob# : 91767 67688 / 89399 88833</div>
                    </div>
                    <div className='col-lg-4 col-sm-6 mb-4'>
                        <h5 className='font-weight-bold'>Apollo Dental Gachibowli</h5>
                        <div>3rd Floor, Plot #20 Telecom Nagar,</div>
                        <div>Opp. South India Shopping Mall</div>
                        <div>Gachibowli,</div>
                        <div>Egattur Village, Thalambur Post,</div>
                        <div>Hyderabad - 500032</div>
                        <div>Telangana</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;