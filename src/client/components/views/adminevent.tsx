import React from 'react'
import {useEffect, useState} from 'react'
import {RouteComponentProps} from 'react-router-dom'

interface eventProps extends RouteComponentProps<{ id: string }> { }

const editEvent: React.FC<eventProps> = ({ match: { params: { id } } }) => {
    const [newTitle, setTitle] = useState()
    const [newContent, setContent] = useState()
    const [newTime, setTime] = useState()

    const getevent = async () => {
        let r = await fetch(`/api/events/${id}`)
        let event = await r.json()
        setTitle(event.title)
        setContent(event.content)
        setTime(event.eventtime)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }
    const handleTime = (e) => {
        setTime(e.target.value)
    }

    useEffect(() => { getevent() })

    const handleEdit = (e) => {
        e.preventDefault()
        updateEvent()
    }

    const handleDelete = (e) => {
        e.preventDefualt()
        deleteEvent()
    }

    const updateEvent = async () => {
        try {
            let event = {
                title: newTitle,
                content: newContent
            }
            let r = await fetch(`/api/events/${id}`, {
                method:'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(event)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteEvent = async () => {
        let r = fetch(`/api/events/${id}`,{
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
                    <label htmlFor="">New Time</label>
                    <input type="text" name="time" id="time" value={newTime} onChange={handleTime} className="form-crontrol" />
                </div>
                    <button className="btn btn-info mx-2" onClick={handleEdit}>Save Edits</button>
                    <button className="btn btn-danger mx-2" onClick={handleDelete}>Delete Blog</button>
            </form>

        </div>
    )
}

export default editEvent