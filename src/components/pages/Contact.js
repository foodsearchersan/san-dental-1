import React from 'react';
import { Box } from '@mui/material';
import { FaMapMarkerAlt } from 'react-icons/fa';
import GoogleMaps from './Maps/GoogleMaps';
import ContactImage from '../Assests/contact.jpg';
import map1 from '../Assests/map1.png'
import map2 from '../Assests/map2.png'
import map3 from '../Assests/map3.png'

function Contact() {
    return (
        <div>
            <div className='page-container py-5'>
                <div className='contact'>
                    <div className="text-center">
                        <h3 className='font-weight-bold primary'>Contact Us</h3>
                        <div>Get your Consultation Done</div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-6 col-sm-6 mb-4'>
                            <h4 className='font-weight-bold mt-4 secondary'>Operating Hours</h4>
                            <div>Sunday - Saturday : 9:00 am to 9:00 pm</div>
                            <div>Appointments can also be made <span className='font-weight-bold'>online</span> or via <span className='font-weight-bold'>email</span> at any time.</div>
                            <div>
                                <span className='font-weight-bold'>Whatsapp: <a href="https://wa.me/918939111172" target="_blank" rel="noreferrer">+91 89391 11172</a></span>
                            </div>
                            <div>
                                <span className='font-weight-bold'>Email: <a href="mailto:apollodental@premolar.org" target="_blank" rel="noreferrer">apollodental@premolar.org</a></span>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-6 mb-4 d-none d-md-block'>
                            <Box
                                component="img"
                                className="rounded"
                                sx={{ width: "100%", height: "250px", objectFit: "cover" }}
                                src={ContactImage}
                                alt="contact_us"
                            />
                        </div>
                    </div>

                    <h4 className='mt-4 font-weight-bold text-center primary'>Address</h4>
                    <div className='card shadow'>
                        <div className='card-header'>
                            <h5 className='font-weight-bold secondary'>Apollo Dental Navalur</h5>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-md-5 col-lg-4 mb-2'>
                                    <FaMapMarkerAlt className="primary mb-2" style={{ fontSize: "30px" }} />
                                    <div>House of Hiranandani</div>
                                    <div>Unit #2 & 3, Gateway House,</div>
                                    <div>5/63, OMR,</div>
                                    <div>Egattur Village, Thalambur Post,</div>
                                    <div>Chennai - 600130</div>
                                    <div><a href="tel:+91 98844 54007" target="_blank" rel="noreferrer">98844 54007</a></div>
                                </div>
                                <div className='col-md-7 col-lg-8'>
                                    <a href='https://www.google.com/maps/dir/11.0266807,78.2736726/Apollo+Dental+Clinic+-+Navalur,+Unit+2+and+3,+Gateway+House+House+of+Hiranandani,+5%2F63,+OMR+Egattur+Village,+Thalambur,+Post,+Chennai,+Tamil+Nadu+600130/@11.8955483,78.065362,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a525b8f8b6cc531:0xe9695b305b44244e!2m2!1d80.2300317!2d12.8353955' target='_blank'>
                                        <img src={map1} style={{ borderRadius: "5px", width: "100%", height: "230px", objectFit: "cover" }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card shadow mt-4'>
                        <div className='card-header'>
                            <h5 className='font-weight-bold secondary'>Apollo Dental Thoraipakkam</h5>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-md-5 col-lg-4 mb-2'>
                                    <FaMapMarkerAlt className="primary mb-2" style={{ fontSize: "30px" }} />
                                    <div>#5, Vinayagam Avenue,</div>
                                    <div>Okkiyam, Thoraipakkam,</div>
                                    <div>OMR,</div>
                                    <div>Chennai - 600097</div>
                                    <div><a href="tel:+91 91767 67688" target="_blank" rel="noreferrer">91767 67688</a> / <a href="tel:+91 89399 88833" target="_blank" rel="noreferrer">89399 88833</a></div>
                                </div>
                                <div className='col-md-7 col-lg-8'>
                                   <a href='https://www.google.com/maps/dir/11.0266807,78.2736726/Apollo+Dental+OMR+(Previously+Gold+Dental+),+No.5,+Vinayagam+Avenue,+Okkiyam+Thoraipaakam,+Near+CTS+and+Aasife+Hotel,+Chennai,+Tamil+Nadu+600097/@11.9417381,78.129495,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a525c58ca587d35:0xa0626366bff17897!2m2!1d80.2307114!2d12.9273544' target='_blank' >
                                   <img src={map2} style={{ borderRadius: "5px", width: "100%", height: "230px", objectFit: "cover" }} />
                                   </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card shadow mt-3'>
                        <div className='card-header'>
                            <h5 className='font-weight-bold secondary'>Apollo Dental Gachibowli</h5>
                        </div>
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-md-5 col-lg-4 mb-2'>
                                    <FaMapMarkerAlt className="primary mb-2" style={{ fontSize: "30px" }} />
                                    <div>3rd Floor, Plot #20 Telecom Nagar,</div>
                                    <div>Opp. South India Shopping Mall</div>
                                    <div>Gachibowli,</div>
                                    <div>Egattur Village, Thalambur Post,</div>
                                    <div>Hyderabad - 500032</div>
                                    <div>Telangana</div>
                                </div>
                                <div className='col-md-7 col-lg-8'>
                                   <a href='https://www.google.com/maps/dir/11.0266807,78.2736726/Apollo+Dental+Clinic,+Apollo+Dental,+Plot+of+1299C+Kondapride,2nd+floor,Road+No:1,+Jubilee+Hills,+Hyderabad,+Telangana+500033/@14.2128405,76.8667168,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bcb910dfe5a6e99:0x7718eee11b660278!2m2!1d78.4124379!2d17.423741' target='_blank'>
                                   <img src={map3} style={{ borderRadius: "5px", width: "100%", height: "230px", objectFit: "cover" }} />
                                   </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;