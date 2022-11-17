import React from 'react';
import { useParams, Link } from "react-router-dom";
import Button from '@mui/material/Button';
// import ArchiveContent from './archives';
import BlogList from '../../Json/blog.json';
import { FaArrowCircleLeft } from "react-icons/fa";

// import moment from 'moment';

function BlogInfo() {
    let { id } = useParams();
    let blogData = "";
    BlogList.forEach(data => {
        if (data.slugName === id) {
            blogData = data;
        }
    });
    return (
        <div className='container'>
            <div className='blog mt-5'>
                <Link to={{ pathname: '/blog' }}><Button variant="contained" style={{background:"#f57825"}} startIcon={<FaArrowCircleLeft />}>BACK</Button></Link>
                <div className='row'>
                    <div className="col-12">
                        <div className='blog-content'>
                            <h3 className='mt-2'>{blogData.title}</h3>
                            {blogData.type === "image" && blogData.media_url !== "" ?
                                <div><img src={blogData.media_url} alt={blogData.slugName} /></div>
                                : null
                            }
                            {blogData.type === "video" && blogData.media_url !== "" &&
                                <div>
                                    <iframe width="100%" height="350" title={blogData.title}
                                        src={blogData.media_url}>
                                    </iframe>
                                </div>
                            }
                            <div className='blog-date'>{blogData.postedAt}</div>
                            <div className='mb-3'>{blogData.shortDescription}</div>
                            {blogData.html_content !== undefined && blogData.html_content !== "" ?
                                <div dangerouslySetInnerHTML={{ __html: atob(blogData.html_content) }} />
                                :
                                null
                            }
                        </div>

                    </div>
                    {/* <div className="col-md-3 col-lg-2 d-none d-md-block">
                        <ArchiveContent />                        
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default BlogInfo;