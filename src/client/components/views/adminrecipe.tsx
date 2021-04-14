import React from 'react'
import {useEffect, useState} from 'react'
import {RouteComponentProps} from 'react-router-dom'

interface recipeProps extends RouteComponentProps<{ id: string }> { }

const editRecipe: React.FC<recipeProps> = ({ match: { params: { id } } }) => {
    const [newTitle, setTitle] = useState()
    const [newContent, setContent] = useState()
    const [newIngred, setIngred] = useState()
    const [newDesc, setDesc] = useState()

    const getRecipe = async () => {
        let r = await fetch(`/api/recipes/${id}`)
        let recipe = await r.json()
        setTitle(recipe.title)
        setContent(recipe.content)
        setIngred(recipe.content)
        setDesc(recipe.content)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }
    const handleIngred = (e) => {
        setIngred(e.target.value)
    }
    const handleDesc = (e) => {
        setDesc(e.target.value)
    }

    useEffect(() => { getRecipe() })

    const handleEdit = (e) => {
        e.preventDefault()
        updateRecipe()
    }

    const handleDelete = (e) => {
        e.preventDefualt()
        deleteRecipe()
    }

    const updateRecipe = async () => {
        try {
            let recipe = {
                title: newTitle,
                content: newContent
            }
            let r = await fetch(`/api/recipes/${id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(recipe)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteRecipe = async () => {
        let r = fetch(`/api/recipes/${id}`,{
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
                <div className="form-group">
                    <label htmlFor="">New Ingred</label>
                    <input type="text" name="Ingred" id="Ingred" value={newIngred} onChange={handleIngred} className="form-crontrol" />
                </div>
                <div className="form-group">
                    <label htmlFor="">New Desc</label>
                    <textarea name="Desc" id="" cols={30} rows={10} value={newDesc} onChange={handleDesc} className="form-control" ></textarea>
                </div>
                    <button className="btn btn-info mx-2" onClick={handleEdit}>Save Edits</button>
                    <button className="btn btn-danger mx-2" onClick={handleDelete}>Delete Blog</button>
            </form>

        </div>
    )
}

export default editRecipe