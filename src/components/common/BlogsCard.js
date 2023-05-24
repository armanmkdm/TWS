import React from 'react';
import "./CommonStyle/BlogsCard.css";


function BlogsCard({ blogTitle, blogText }) {
    return (
        <>
            <div className='blog-area'>
                <h5>
                    {blogTitle}
                </h5>
                <p>
                    {blogText}
                </p>
            </div>

        </>
    )
}

export default BlogsCard