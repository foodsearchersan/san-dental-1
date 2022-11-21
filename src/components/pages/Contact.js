import React from 'react';
import { Box } from '@mui/material';
import { FaMapMarkerAlt } from 'react-icons/fa';
import GoogleMaps from './Maps/GoogleMaps';
import ContactImage from '../Assests/contact.jpg';

function Contact() {
    return (
        <div>
            <div className='page-container py-5'>
                <div className='contact'>
                    <div className="text-center">
                        <h3 className='font-weight-bold primary'>Contact Us</h3>
                        <div>Get your consult today</div>
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
                                    <GoogleMaps latitude={12.8353955} longitude={80.1641137} />
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
                                    <GoogleMaps latitude={12.8357746} longitude={80.0590434} />
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
                                    <GoogleMaps latitude={17.4599226} longitude={78.2338949} />
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