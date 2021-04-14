import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';


const healthy = (props: healthyProps) => {

    const [blogs, setBlogs] = useState([])
    const [recipes, setRecipes] = useState([])
    const [events, setEvents] = useState([])


    const getBlogs = async () => {
        let r = await fetch('/api/blogs')
        let res = await r.json()
        setBlogs(res)
    }
    const getRecipe = async () => {
        let r = await fetch('/api/recipes')
        let recipe = await r.json()
        setRecipes(recipe)
    }
    const getEvent = async () => {
        let r = await fetch('/api/events')
        let event = await r.json()
        setEvents(event)
    }

    getBlogs()
   

    // useEffect(() => { getBlogs(), getRecipe(), getEvent() }, [])
    // The above line is commented out due to me not having the updated Database, but once a database is available it will work

    return (
        <div>
            <h2>Our Community</h2>
            <p className="text-center">This is your time to shine. Here our community members come together to share their stories, tip, and recipes for everyone to read about. Here you can tell your story about how you're fighting heart disease, share excercize plans, and make new, delicious meals with community members at the heart of the action.</p>

            {/* This code is copied from Bootstrap and is responsible for the tab view on the page */}
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="Blogs-tab" data-toggle="tab" href="#Blogs" role="tab" aria-controls="Blogs" aria-selected="true">Blogs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="Recipies-tab" data-toggle="tab" href="#Recipies" role="tab" aria-controls="Recipies" aria-selected="false">Recipies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="Events-tab" data-toggle="tab" href="#Events" role="tab" aria-controls="Events" aria-selected="false">Events</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="Blogs" role="tabpanel" aria-labelledby="Blogs-tab">
                    {/* These can be changed if we want to use something different than a card view, this was just simple because of the previous labs */}
                    <div className="container mt-3 justify-content-between" id="blogs">
                        {blogs.map(blog => (
                            <div key={`Blogpost#${blog.id}`} className="col-4">
                                <div className="card my-2">
                                    <div className="card-body">
                                        <h3 className="card-title">{blog.title}</h3>
                                        <p className="text-muted">{blog.user}</p>
                                        <p className="card-text">{blog.content}</p>
                                        <Link to={`/view/blogs/${blog.id}`} className="btn btn-secondary">Full post</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="tab-pane fade" id="Recipies" role="tabpanel" aria-labelledby="Recipies-tab">
                    <div className="container mt-3 justify-content-between" id="recipies">
                        {recipes.map(recipe => (
                            <div key={`Recipepost#${recipe.id}`} className="col-4">
                                <div className="card my-2">
                                    <div className="card-body">
                                        <h3 className="card-title">{recipe.title}</h3>
                                        <p className="text-muted">{recipe.user}</p>
                                        <p className="card-text">{recipe.description}</p>
                                        <Link to={`/view/recipe/${recipe.id}`} className="btn btn-secondary">Full recipe</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="tab-pane fade" id="Events" role="tabpanel" aria-labelledby="Events-tab">
                    <div className="container mt-3 justify-content-between" id="events">
                        {events.map(event => (
                            <div key={`Eventpost#${event.id}`} className="col-4">
                                <div className="card my-2">
                                    <div className="card-body">
                                        <h3 className="card-title">{event.title}</h3>
                                        <p className="text-muted">{event.user}</p>
                                        <p className="card-text">{event.description}</p>
                                        <p className="card-text">{event.eventtime}</p>
                                        <Link to={`/view/event/${event.id}`} className="btn btn-secondary">Event Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>

    )
}

interface Feed { }

interface healthyProps extends RouteComponentProps { }

export default healthy
