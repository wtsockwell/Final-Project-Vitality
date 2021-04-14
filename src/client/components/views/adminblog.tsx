import React from 'react'
import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface blogProps extends RouteComponentProps<{ id: string }> { }

const editBlog: React.FC<blogProps> = ({ match: { params: { id } } }) => {
    const [newTitle, setTitle] = useState()
    const [newContent, setContent] = useState()

    const getBlog = async () => {
        let r = await fetch(`/api/blogs/${id}`)
        let blog = await r.json()
        setTitle(blog.title)
        setContent(blog.content)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    useEffect(() => { getBlog() })

    const handleEdit = (e) => {
        e.preventDefault()
        updateBlog()
    }

    const handleDelete = (e) => {
        e.preventDefualt()
        deleteBlog()
    }

    const updateBlog = async () => {
        try {
            let blog = {
                title: newTitle,
                content: newContent
            }
            let r = await fetch(`/api/blogs/${id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blog)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteBlog = async () => {
        let r = fetch(`/api/blogs/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div className="container mt-5">
            <form>
                <div className="form-group">
                    <label htmlFor="">New Title</label>
                    <input type="text" name="title" id="title" value={newTitle} onChange={handleTitle} className="form-crontrol" />
                </div>
                <div className="form-group">
                    <label htmlFor="">New Content</label>
                    <textarea name="content" id="" cols={30} rows={10} value={newContent} onChange={handleContent} className="form-control" ></textarea>
                </div>
                    <button className="btn btn-info mx-2" onClick={handleEdit}>Save Edits</button>
                    <button className="btn btn-danger mx-2" onClick={handleDelete}>Delete Blog</button>
            </form>

        </div>
    )
}

export default editBlog