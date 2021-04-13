import React from 'react';
import { useEffect, useState } from 'react'

const postEvent = () => {
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const [time, setTime] = useState()
    const [user, setUser] = useState()

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDesc = (e) => {
        setDesc(e.target.value)
    }
    const handleTime = (e) => {
        setTime(e.target.value)
    }
    const handleUser = (e) => {
        //This is being left blank for the time being since we have authentication and can use persistent log in to fill this field
    }

    const postEvent = async () => {
        let event = {
            title: title,
            description: desc,
            eventtime: time,
            userid: user
        }
        let r = await fetch('/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })
    }

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="title">Your Next Event</label>
                    <input type="text" name="title" id="title" className="form-control" onChange={handleTitle} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Describe Your Event</label>
                    <textarea name="description" id="description" cols={30} rows={10} className="form-control" onChange={handleDesc} style={{ height: "300px", width: "1115px" }}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="time">When is this Going to Happen?</label>
                    <input type="date" name="time" id="time" className="form-control" onChange={handleTime} />
                </div>
            </form>
            <button className="btn btn-outline-primary">Post Event</button>
        </div>
    )
}

export default postEvent