import React from 'react'
import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import {Link} from 'react-router-dom'

interface blogProps extends RouteComponentProps<{ id: string }> { }

const singleBlog: React.FC<blogProps> = ({ match: { params: { id } } }) => {
    const [blog, setBlog] = useState({
        title:"First blog post",
        user:"Taylor",
        content:"This is the first blog post for our website, and we are excited to show off the capabilities of this user driven portal."
    })

    const getBlog = async () => {
        let r = await fetch(`/api/blogs/${id}`)
        let oneblog = await r.json()
        setBlog(oneblog)
    }

    useEffect(() => { getBlog() }, [])

    return (
        <div className="container border m-3 p-2">
            <h1 className="display-4">{blog.title}</h1>
            <h2>{blog.user}</h2>
            <p>{blog.content}</p>
            <Link className="btn btn-outline-info mx-2" to={`/admin/blogs/${id}`}>Options</Link>
            <Link className="btn btn-outline-secondary mx-2" to={"/healthier_you"}>Return</Link>
        </div>
    )
}

export default singleBlog