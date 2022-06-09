import React from "react";

export default function Bloglist(props) {

    const blogListArray = props.bloglist.map((post) => {
        return <div className="blog-post" key={post.pid} id={post.pid}>
            <h2>{post.pid}</h2>
            <h2>{post.name}</h2>
            <button className="edit">Edit</button>
            <button className="delete" onClick={() => props.handleDelete(post.pid)} >Delete</button>
        </div>
    })

    return (
        <div className="bloglist-container">
            <h1>Blog List</h1>
            {blogListArray}
        </div>
    )
}