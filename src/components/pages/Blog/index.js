import React, { useState } from 'react';
import { CircularProgress, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import ArchiveContent from './archives';
import BlogList from '../../Json/blog.json';
// import moment from 'moment';

const blogListCount = 5;
const recentBlogs = BlogList.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt));
const displayBlogs = recentBlogs.slice(0, blogListCount);

function Blog() {
    const [displayBlog, setDisplayBlog] = useState(displayBlogs);
    const [loader, setLoader] = useState(false);
    const [yeardisplay, setYear] = useState("");
    const blogCallBack = (year, type) => {
        const blogList = BlogList.filter((blog) => blog.year === year && blog.category === type);
        setDisplayBlog(blogList);
        setLoader(true);
        setYear(year + "-" + type);
        setTimeout(() => { setLoader(false); window.scrollTo({ top: 0, behaviour: "smooth" }) }, 500);
    }
    const handleDelete = () => {
        setDisplayBlog(displayBlogs);
        setLoader(true);
        setYear("");
        setTimeout(() => { setLoader(false); window.scrollTo({ top: 0, behaviour: "smooth" }) }, 500);
    };

    return (
        <div className='container'>
            <div className='blog py-5'>
                <div className='row'>
                    <div className="col-md-9 col-lg-10">
                        {loader === true && <div className="text-center"><CircularProgress color="secondary" /></div>}
                        {!loader && yeardisplay !== "" &&
                            <Chip
                                label={yeardisplay}
                                onDelete={handleDelete}
                            />
                        }
                        {!loader && displayBlog?.map((data, i) => {
                            return (
                                <div className='blog-content' key={i}>
                                    <h3 className='mt-4'><Link to={{ pathname: '/blog/' + data.slugName }}>{data.title}</Link></h3>
                                    {data.type === "image" && data.media_url !== "" ?
                                        <div><img src={data.media_url} alt={data.slugName} /></div>
                                        : null
                                    }
                                    {data.type === "video" && data.media_url !== "" &&
                                        <div>
                                            <iframe width="100%" height="350" title={data.title}
                                                src={data.media_url}>
                                            </iframe>
                                        </div>
                                    }
                                    <div className='blog-date'>{data.postedAt}</div>
                                    <div>{data.shortDescription}</div>
                                </div>
                            )
                        })}
                        {!loader && displayBlog.length === 0 &&
                            <div className='p-3 text-center'>No record found</div>
                        }
                    </div>
                    <div className="col-md-3 col-lg-2 d-none d-md-block">
                        <ArchiveContent callBack={blogCallBack} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog;