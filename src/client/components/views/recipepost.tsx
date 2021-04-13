import React from 'react'
import {useEffect, useState} from 'react'

const postRecipe = () => {
    const [title, setTitle] = useState()
    const [ingreed, setIngreed] = useState()
    const [content, setContent] = useState()
    const [user, setUser] = useState()
    const [description, setDescription] = useState()

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleIngreed = (e) =>{
        //placeholder for lump-sum ingreedients. Can be changed into a system that takes the breaks between ingreedients and separates them into an array, then list them when posting
        setIngreed(e.target.value)
    }
    const handleContent = (e) => {
        setContent(e.target.value)
    }
    const handleUser = () => {
        //This is being left blank for the time being since we have authentication and can use persistent login to fill this feild
    }
    const handleDesc = (e) => {
        setDescription(e.target.value)
    }

    const postRecipe = async () => {
        let recipe = {
            title:title,
            ingreedients:ingreed,
            content:content,
            userid:user,
            description:description
        }
        let r = await fetch('/api/recipes', {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(recipe)
        })
    }

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="title">Name your Dish</label>
                    <input type="text" name="title" id="title" className="form-control" onChange={handleTitle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients</label>
                    <input type="text" name="ingredients" id="ingredients" className="form-control" onChange={handleIngreed}/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">How to Prepare</label>
                    <textarea name="content" id="content" cols={30} rows={10} className="form-control" onChange={handleContent} style={{height:"300px", width:"1115px"}}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Describe your Dish</label>
                    <textarea name="description" id="description" cols={30} rows={10} className="form-control" onChange={handleDesc} style={{height:"300px", width:"1115px"}}></textarea>
                </div>
            </form>
            <button className="btn btn-outline-primary" onClick={postRecipe}>Post your Recipe</button>
        </div>
    )
}

export default postRecipe