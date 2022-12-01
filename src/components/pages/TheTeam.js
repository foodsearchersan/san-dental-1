import React from 'react'
import { useState } from 'react'
import Pic3 from '../Assests/Pic3.jpg'
import Team1 from '../Assests/Team1.jpg'
import Team2 from '../Assests/Team2.jpg'
import Team3 from '../Assests/Team3.jpg'
import Team4 from '../Assests/Team4.JPG'
import Team5 from '../Assests/Team5.jpg'
import drPrem from '../Assests/drPrem.jpg'

import { TiTick } from 'react-icons/ti'

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TeamData from '../Data/TeamData'

import '../css/team.css'
import '../css/AllOn6.css'


// ----------<< material UI dialog box----------
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};
// ---------->> material UI dialog box----------

function TheTeam() {

    // ----------<< material UI dialog box----------
    const [open, setOpen] = useState(false);
    const [Image, setImage] = useState('');
    const [Name, setName] = useState('');
    const [Expertise, setExpertise] = useState('');
    const [Qualification, setQualification] = useState('');
    const [AlmaMater, setAlmaMater] = useState('');
    const [Experience, setExperience] = useState('');
    const [Text1, setText1] = useState('');
    const [Text2, setText2] = useState('');
    


    const handleClickOpen = (e) => {
        setImage(e.currentTarget.getAttribute('image'))
        setName(e.currentTarget.getAttribute('name'))
        setExpertise(e.currentTarget.getAttribute('expertise'))
        
        setQualification(e.currentTarget.getAttribute('qualification'))
        setAlmaMater(e.currentTarget.getAttribute('almamater'))
        setExperience(e.currentTarget.getAttribute('experience'))
        setText1(e.currentTarget.getAttribute('text1'))
        setText2(e.currentTarget.getAttribute('text2'))
        setOpen(true);

    };
 
    const handleClose = () => {
        setOpen(false);
    };
    // ---------->> material UI dialog box----------

    const [data, setData] = useState();



    return (
        <div>
            <div className='on6_img_cont'>
                <img src={Pic3} />
                <div className='on6_img_sub_cont1'>
                    <div className='on6_img_sub_cont'>
                        {/* <h1 className='on6_title1'><bold>THE TEAM</bold></h1>
                        <h1 className='on6_title2'></h1> */}
                    </div>
                </div>
            </div>


            <div className="all_on_6_des_title team_title" data-aos="fade-up">
                <h1 >Our Medical Director</h1>
                <p></p>
            </div>

            <div className='theteam_main_cont'>
                <div className='theteam_cont'>

                    <div className='team_doc_cont'>
                        <div className='team_doc_cont1' data-aos="fade-up" >
                            <img src={drPrem} />
                        </div>
                        <h2>Dr Prem Lawrence</h2>
                    </div>
                </div>
            </div>

            <div className="all_on_6_des_title team_title" data-aos="fade-up">
                <h1 >Our Doctor Panel</h1>
                <p></p>
            </div>
            <div className='theteam_main_cont'>
                <div className='theteam_cont'>

                    <div className='team_doc_cont' 
                    onClick={handleClickOpen}
                    image={TeamData[0].image.Team2}
                    name={TeamData[0].name}
                    expertise={TeamData[0].expertise}
                    qualification={TeamData[0].qualification}
                    almamater={TeamData[0].almaMater}
                    experience={TeamData[0].experience}
                    text1={TeamData[0].text1}
                    text2={TeamData[0].text2}
                    >
                        <div className='team_doc_cont1' data-aos="fade-up">
                            <img src={Team2} />
                        </div>
                        <h2>Dr.Jananee Sivapragasam</h2>
                    </div>
                    <div className='team_doc_cont'
                    onClick={handleClickOpen}
                    image={TeamData[1].image.Team3}
                    name={TeamData[1].name}
                    expertise={TeamData[1].expertise}
                    qualification={TeamData[1].qualification}
                    almamater={TeamData[1].almaMater}
                    experience={TeamData[1].experience}
                    text1={TeamData[1].text1}
                    text2={TeamData[1].text2}
                    >
                        <div className='team_doc_cont1' data-aos="fade-up">
                            <img src={Team3} />
                        </div>
                        <h2>Dr. Christy George</h2>
                    </div>
                    <div className='team_doc_cont' 
                   onClick={handleClickOpen}
                   image={TeamData[2].image.Team4}
                   name={TeamData[2].name}
                   expertise={TeamData[2].expertise}
                   qualification={TeamData[2].qualification}
                   almamater={TeamData[2].almaMater}
                   experience={TeamData[2].experience}
                   text1={TeamData[2].text1}
                   text2={TeamData[2].text2}
                    
                    >
                        <div className='team_doc_cont1' data-aos="fade-up">
                            <img src={Team4} />
                        </div>
                        <h2>Dr. Sobika</h2>
                    </div>
                    <div className='team_doc_cont'
                     onClick={handleClickOpen}
                     image={TeamData[3].image.Team1}
                     name={TeamData[3].name}
                     expertise={TeamData[3].expertise}
                     qualification={TeamData[3].qualification}
                     almamater={TeamData[3].almaMater}
                     experience={TeamData[3].experience}
                     text1={TeamData[3].text1}
                     text2={TeamData[3].text2}
                    >
                        <div className='team_doc_cont1' data-aos="fade-up">
                            <img src={Team1} />
                        </div>
                        <h2>Dr. Rekha Sampath</h2>
                    </div>
                    <div className='team_doc_cont'
                     onClick={handleClickOpen}
                     image={TeamData[4].image.Team5}
                     name={TeamData[4].name}
                     expertise={TeamData[4].expertise}
                     qualification={TeamData[4].qualification}
                     almamater={TeamData[4].almaMater}
                     experience={TeamData[4].experience}
                     text1={TeamData[4].text1}
                     text2={TeamData[4].text2}
                    >
                        <div className='team_doc_cont1' data-aos="fade-up">
                            <img src={Team5} />
                        </div>
                        <h2>Dr. Rinu Mary Kuriakose</h2>
                    </div>


                </div>
            </div>




            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                ></BootstrapDialogTitle>
                <div className='dialog_box_cont'>
                    <div className='dia_team_main_doc_cont'>
                        <div className='dia_team_doc_cont'>
                            <div className='dia_team_doc_cont1'>
                                <img src={Image} />
                            </div>
                        </div>
                        <div className='team_div1_title_cont' >
                            <div className='team_div1_title'>
                                <p>{Name}</p>
                                <p><TiTick className='team_tit_icon' />{Expertise}</p>
                                <p><TiTick className='team_tit_icon' />{Qualification}</p>
                                <p><TiTick className='team_tit_icon' />{AlmaMater}</p>
                                <p><TiTick className='team_tit_icon' />{Experience}</p>
                            </div>
                            <div>
                               <p>{Text1}</p>
                               <p>{Text2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </BootstrapDialog>

        </div>


    )
}
export default TheTeam;