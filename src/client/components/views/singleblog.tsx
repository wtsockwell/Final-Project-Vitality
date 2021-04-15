import React from 'react'
import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import {Link} from 'react-router-dom'

interface blogProps extends RouteComponentProps<{ id: string }> { }

const singleBlog: React.FC<blogProps> = ({ match: { params: { id } } }) => {
    const [blog, setBlog] = useState([{}])

    const getBlog = async () => {
        let r = await fetch(`/api/blogs/${id}`)
        let oneblog = await r.json()
        setBlog(oneblog)
        console.log(oneblog)
    }

    useEffect(() => { getBlog() }, [])

    return (
        <div className="container border m-3 p-2">
            <h1 className="display-4">{blog[0].title}</h1>
            <h2>{blog[0].user}</h2>
            <p>{blog[0].content}</p>
            <Link className="btn btn-outline-info mx-2" to={`/admin/blogs/${id}`}>Options</Link>
            <Link className="btn btn-outline-secondary mx-2" to={"/healthier_you"}>Return</Link>
        </div>
    )
}

export default singleBlog