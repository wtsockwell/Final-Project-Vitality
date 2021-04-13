import React from 'react'
import { useEffect, useState } from 'react'

const postBlog = () => {

    const [user, setUser] = useState()
    const [title, setTitle] = useState()
    const [content, setContent] = useState()

    const handleUser = (e) => {
        //This field is being left blank for now since we have authentication and can use persistent login to fill this field
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const postBlog = async () => {
        let blog = {
            title: title,
            content: content,
            userid: user
        }
        let r = await fetch('/api/blogs', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
    }

    return (
        <div className="container">
            <h2>Share your Story</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input className="form-control" type="text" name="title" id="title" onChange={handleTitle} />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea name="content" id="content" cols={30} rows={10} style={{height:"300px", width:"1115px"}} onChange={handleContent}></textarea>
                </div>
            </form>
            <button className="btn btn-outline-primary" onClick={postBlog}>Post your Story</button>
        </div>
    )
}

export default postBlog