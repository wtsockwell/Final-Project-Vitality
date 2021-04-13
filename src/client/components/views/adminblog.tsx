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

    }

    const deleteBlog = async () {
        
    }

    return (

    )
}

export default editBlog