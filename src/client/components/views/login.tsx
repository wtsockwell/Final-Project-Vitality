import React from "react"
import {useState} from "react"
import {Link} from 'react-router-dom'

const login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const handleUsername = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    

    const logUser = async () => {
        try {
            let user = {
                username: username,
                password: password,
            }

            let r = await fetch('/login', {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(user)
            })
            // history push to confirmation page
        } catch (error) {
            console.log(error)
        }
    }

    return(
        /*As of now we are login in user with there email and password will work code out to work with username*/
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" className="form-control" onChange={handleUsername}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="Password" id="Password" className="form-control" onChange={handlePassword}/>
                </div>
            </form>
            <button className="btn btn-outline-primary mx-1" onClick={logUser}>Login</button>
            <Link to="/signup" className="btn btn-outline-info mx-1">New User?</Link>
            <Link to="/" className="btn btn-outline-secondary mx-1">Go Back</Link>
        </div>
    )

}

export default login