import React from "react"
import { useState } from "react"
import { Link } from 'react-router-dom'
import { json } from "../../utils/api";

const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }


    const logUser = async () => {
        try {
            let user = {
                email: email,
                password: password,
            }

            let r = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            let data = await r.json()
            localStorage.setItem('token', data.token)
            localStorage.setItem('ispremmember', data.ispremmember)
            localStorage.setItem('userid', data.userid)

            // history push to confirmation page

            /* The Below section of code is used to setup our frontend authentification
            token and ispremmember is set using local storage. Our token is used to grant
            CRUD privileges throughout the site. json() is located in ../../utils/api folder*/

            // let r = await json('/login','POST',user)
            // localStorage.setItem('token',r.token)
            // localStorage.setItem('ispremmember',r.ispremmember)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        /*As of now we are login in user with there email and password will work code out to work with username*/
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <input type="text" name="username" id="username" className="form-control" onChange={handleUsername} />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="Password" id="Password" className="form-control" onChange={handlePassword} />
                </div>
            </form>
            <button className="btn btn-outline-primary mx-1" onClick={logUser}>Login</button>
            <Link to="/signup" className="btn btn-outline-info mx-1">New User?</Link>
            <Link to="/" className="btn btn-outline-secondary mx-1">Go Back</Link>
        </div>
    )

}

export default login