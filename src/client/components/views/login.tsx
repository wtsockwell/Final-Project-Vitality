import React, { ReactEventHandler } from "react"
import { useState } from "react"
import { Link, RouteComponentProps } from 'react-router-dom'
import { ProgressPlugin } from "webpack";
import { json } from "../../utils/api";

const login = (props:Login) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type,setType] = useState('password')
    



    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const changePassword=()=>{
        if (type ==='password'){
            setType('text')
        }else{
            setType('password')
        }
    }


    const logUser = async (e) => {
        try {
            let user = {
                email: email,
                password: password,
            }
            let r = await json('/login','POST',user)
            localStorage.setItem('token', r.token)
            localStorage.setItem('ispremmember', r.ispremmember)
            localStorage.setItem('userid', r.userid)
            localStorage.setItem('username',r.username)
            props.history.push('/')
            location.reload()
        } catch (error) {
            console.log(error)
        }

    }

    

    return (
        /*As of now we are login in user with there email and password will work code out to work with username*/
        <div className="container d-flex justify-content-center" style={{marginTop:'25vh'}}>
             
            <form className = 'col-4' >
                <div className='d-flex' style={{marginLeft:'10em'}}>
                    <h4 className='mb-3'>Login Below</h4>
                </div>

                <div className="d-flex justify-content-end mb-2" >
                <small><span className ='text-'>Click</span> the Register button below to create a new account.</small>
                </div>

                <div className="form-group d-flex">
                    <label htmlFor="username">Email: </label>
                    <input type="text" name="username" id="username" className="form-control" onChange={handleUsername} />
                </div>
                <div className="form-group d-flex">
                    <label htmlFor="Password">Password: </label>
                    <input type={type} name="Password" id="Password" className="form-control" onChange={handlePassword} />
                </div>
                  <div className = 'd-flex justify-content-center'>
                <button className = 'btn btn-outline-secondary btn-sm' type="button" onClick={changePassword}>Show Password</button>
                </div>
            <hr style={{background:'#e25c02'}}/>
            <div className = 'd-flex justify-content-center ml-5'>
            <button className="btn btn-outline-dark mx-1" type='button' onClick={logUser}>Login</button>
            <Link to="/signup" className="btn btn-outline-dark mx-1">Register</Link>
            </div>
            </form>
        </div>
    )

}

export interface Login extends RouteComponentProps {}

export default login