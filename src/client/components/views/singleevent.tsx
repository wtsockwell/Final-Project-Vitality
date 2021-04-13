import React from 'react'
import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'

interface eventProps extends RouteComponentProps<{ id: string }> { }

const singleEvent: React.FC<eventProps> = ({ match: { params: { id } } }) => {
    const [event, setEvent] = useState({
        title:"Afternoon Jog",
        user:"Jacob",
        eventtime:"April 16th, 2021",
        description:"A group jog around the park, starting at 4pm"
    })

    const getEvent = async () => {
        let r = await fetch(`/api/events/${id}`)
        let oneEvent = await r.json()
        setEvent(oneEvent)
    }

    useEffect(() => { getEvent() }, [])

    return (
        <div className="container">
            <h1 className="display-4">{event.title}</h1>
            <h2>{event.user}</h2>
            <h2>{event.eventtime}</h2>
            <p>{event.description}</p>
            <Link className="btn btn-outline-info" to={`/admin/event/${id}`}>Options</Link>
            <Link className="btn btn-outline-secondary" to={`/healthier_you`}>Return</Link>
        </div>
    )
}

export default singleEvent