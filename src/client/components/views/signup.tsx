import React from 'react';
import {useState} from "react"
import {Link,RouteComponentProps,useHistory} from 'react-router-dom'

const signup = (props: signupProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [prem, setPrem] = useState(0);

    const handleUsername = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePrem = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(prem===0){
            setPrem(1)
        } else {
            setPrem(0)
        }
    }

    const createUser = async () => {
        try {
            let user = {
                email: email,
                username: username,
                password: password,
                ispremmember: prem
            }

            let r = await fetch('/register', {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(user)
            })
        } catch (error) {
            console.log(error)
        }

        props.history.push('/')

    }
    return (


        // <div className="container">
        //     <h2>Signup/Login</h2>
        //     <h6>Start a new journey or pickup where you left off.</h6>

        //     <div className="form">
        //         <input className="input-text" type="text" name="" value="Your Name or E-mail *" onFocus="if(this.value==this.defaultValue)this.value='';" onBlur="if(this.value=='')this.value=this.defaultValue;" />
        //         <input className="input-text" type="text" name="" value="Your Password *" onFocus="if(this.value==this.defaultValue)this.value='';" onBlur="if(this.value=='')this.value=this.defaultValue;" />
        //         <input className="input-btn" type="submit" value="New User/ Signup" />
        //         <input className="input-btn" type="submit" value="Login" />
        //     </div>
        // </div >

<div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" className="form-control" onChange={handleUsername}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="Email" id="Email" className="form-control" onChange={handleEmail}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="Password" id="Password" className="form-control" onChange={handlePassword}/>
                </div>
                <div className="form-group">
                    <label htmlFor="prem">Premium member?</label>
                    <input type="checkbox" name="prem" id="Prem" onChange={handlePrem}/>
                </div>
            </form>
            <button className="btn btn-outline-primary mx-1" onClick={createUser}>Create New User</button>
            <Link to="/" className="btn btn-outline-secondary mx-1">Go Back</Link>
        </div>

    )
};


interface signupProps extends RouteComponentProps { }

export default signup;