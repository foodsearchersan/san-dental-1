import React from 'react';
import {    useParams  } from "react-router-dom";
import ArchiveContent from './archives';
// import moment from 'moment';

const blogList = [
    {
        "id": 1,
        "title": "THE UNHEALTHY LIFESTYLE EFFECT ON ORAL HEALTH",
        "shortDescription": "WHAT ARE THE EFFECTS ON OVERALL HEALTH DUE TO POOR ORAL HEALTH? Bad oral hygiene will lead to several severe health problems and would be an understatement to label itas “cavity.” Patients with cavity conditions can vouch for the amount of pain that can be incurred due tohaving cavities. Coronary conditions, Diabetes, Dementia, respiratory infections,",
        "description": "WHAT ARE THE EFFECTS ON OVERALL HEALTH DUE TO POOR ORAL HEALTH? Bad oral hygiene will lead to several severe health problems and would be an understatement to label itas “cavity.” Patients with cavity conditions can vouch for the amount of pain that can be incurred due tohaving cavities. Coronary conditions, Diabetes, Dementia, respiratory infections",
        "image": "",
        "postedAt": "2022-10-21",
        "slugName": "the-unhealthy-lifestyle-effect-on-oral-health"
    },
    {
        "id": 1,
        "title": "WHY A REGULAR DENTAL CHECKUP IS IMPORTANT?",
        "shortDescription": "WHY SHOULD YOU VISIT THE DENTIST REGULARLY? Although it’s fact-based that a twice-yearly dental check-up is essential because they help keep your gums and teeth healthy,  dental visits should be scheduled based on each person’s habits, oral hygiene, and medical conditions. This is the main reason to make sure and schedule your next cleaning after ,",
        "description": "<div><img src='https://www.rajandental.com/wp-content/uploads/2020/01/gif-small.gif' alt=''/><p>WHY SHOULD YOU VISIT THE DENTIST REGULARLY? Although it’s fact-based that a twice-yearly dental check-up is essential because they help keep your gums and teeth healthy,  dental visits should be scheduled based on each person’s habits, oral hygiene, and medical conditions. This is the main reason to make sure and schedule your next cleaning after</p></div>",
        "image": "",
        "postedAt": "2022-10-21",
        "slugName": "why-a-regular-dental-checkup-is-important"
    }
];


function BlogInfo(){
    let { id } = useParams();
    let htmlContent = "";
        blogList.forEach(data => {
            if (data.slugName === id) {
                htmlContent = data.description;
            }
        });
        console.log(htmlContent);
        return (
            <div className='container'>
                <div className='blog py-5'>
                    <div className='row'>
                        <div className="col-md-9 col-lg-10">
                            <div className="overflow-auto" dangerouslySetInnerHTML={{ __html: htmlContent }} />
                        </div>
                        <div className="col-md-3 col-lg-2 d-none d-md-block">
                            <ArchiveContent />
                        </div>
                    </div>

                </div>
            </div>
        )
}

export default BlogInfo;