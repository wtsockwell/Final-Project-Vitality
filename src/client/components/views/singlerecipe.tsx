import React from 'react'
import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'

interface recipeProps extends RouteComponentProps<{ id: string }> { }

const singleRecipe: React.FC<recipeProps> = ({ match: { params: { id } } }) => {
    const [recipe, setRecipe] = useState([{
        title:"Fresh Cookies",
        user: "Larry",
        description:"Fresh homemade cookies that are still good for the heart",
        ingredients:["oats","sugar","cocoa","peanutbutter"],
        content:"Mix ingredients together in a pot, stir until mixed, place on wax paper to cool"
    }])

    const getRecipe = async () => {
        let r = await fetch(`/api/recipes/${id}`)
        let oneRecipe = await r.json()
        setRecipe(oneRecipe)
        console.log(oneRecipe)
    }

    useEffect(() => { getRecipe() }, [])

    return (
        <div className="container border m-3 p-2">
            <h1 className="display-4">{recipe[0].title}</h1>
            <h2>{recipe[0].user}</h2>
            <p>{recipe[0].description}</p>
            <ul>
                {recipe[0].ingredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}
            </ul>
            <p>{recipe[0].content}</p>
            <Link className="btn btn-outline-info" to={`/admin/recipe/${id}`}>Options</Link>
            <Link className="btn btn-outline-secondary" to={`/healthier_you`}>Return</Link>
        </div>
    )
}

export default singleRecipe