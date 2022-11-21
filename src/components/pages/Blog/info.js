import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import BlogList from '../../Json/blog.json';
import { FaArrowCircleLeft } from "react-icons/fa";

function BlogInfo() {
    let { id } = useParams();
    let blogData = "";
    BlogList.forEach(data => {
        if (data.slugName === id) {
            blogData = data;
        }
    });
    const backToTop = () => {
        window.scrollTo({ top: 0, behaviour: "smooth" });
    }
    useEffect(() => {
        window.scrollTo({ top: 0, behaviour: "smooth" });
    }, []);

    return (
        <div>
            <div className='page-container py-5'>
                <div className='blog'>
                    <Link to={{ pathname: '/blog' }}><Button variant="contained" style={{ background: "#f57825" }} startIcon={<FaArrowCircleLeft />}>BACK</Button></Link>
                    <div className='row'>
                        <div className="col-12">
                            <div className='blog-content'>
                                <h3 className='mt-2'>{blogData.title}</h3>
                                {blogData.type === "image" && blogData.media_url !== "" ?
                                    <div className="text-center"><img className="rounded" src={blogData.media_url} alt={blogData.slugName} style={{ maxWidth: "100%" }} /></div>
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
                        <div className="primary col-12 mt-4 text-right pointer"><span onClick={backToTop}>Back to Top</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogInfo;