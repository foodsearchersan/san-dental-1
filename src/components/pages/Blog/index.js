import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ArchiveContent from './archives';
// import moment from 'moment';

const blogList = [
    {
        "id": 1,
        "title": "THE UNHEALTHY LIFESTYLE EFFECT ON ORAL HEALTH",
        "shortDescription": "WHAT ARE THE EFFECTS ON OVERALL HEALTH DUE TO POOR ORAL HEALTH? Bad oral hygiene will lead to several severe health problems and would be an understatement to label itas “cavity.” Patients with cavity conditions can vouch for the amount of pain that can be incurred due tohaving cavities. Coronary conditions, Diabetes, Dementia, respiratory infections,",
        "description": "Long description",
        "image": "",
        "postedAt": "2022-10-21",
        "slugName": "the-unhealthy-lifestyle-effect-on-oral-health"
    },
    {
        "id": 1,
        "title": "WHY A REGULAR DENTAL CHECKUP IS IMPORTANT?",
        "shortDescription": "WHY SHOULD YOU VISIT THE DENTIST REGULARLY? Although it’s fact-based that a twice-yearly dental check-up is essential because they help keep your gums and teeth healthy,  dental visits should be scheduled based on each person’s habits, oral hygiene, and medical conditions. This is the main reason to make sure and schedule your next cleaning after ,",
        "description": "Long description",
        "image": "",
        "postedAt": "2022-10-21",
        "slugName": "why-a-regular-dental-checkup-is-important"
    }
];
function Blog() {
    return (
        <div className='container'>
            <div className='blog py-5'>
                <div className='row'>
                    <div className="col-md-9 col-lg-10">
                        {blogList.map((data, i) => {
                            return (
                                <div className='blog-content' key={i}>
                                    <h3><Link to={{ pathname: '/blog/' + data.slugName }}>{data.title}</Link></h3>
                                    <div className='blog-date'>{data.postedAt}</div>
                                    <div>{data.shortDescription}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-md-3 col-lg-2 d-none d-md-block">
                        <ArchiveContent />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog;