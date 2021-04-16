import React, { useEffect } from 'react';
import {useState} from "react"
import {Link,RouteComponentProps,useHistory} from 'react-router-dom'

const signup = (props: signupProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [prem, setPrem] = useState(0);
    const [type,setType] = useState('password')

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
    

    const changePassword=()=>{
        if (type ==='password'){
            setType('text')
        }else{
            setType('password')
        }
    }

    
    const createUser = async (e) => {
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
            if(r.status){
                props.history.push('/login')    
            }
        } catch (error) {
            console.log(error)
        }
      

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

<div className="container d-flex justify-content-center" style={{marginTop:'25vh'}}>
            <form className = 'col-4' >
            <div style={{marginLeft:'10em'}}>
                    <h4 className='mb-3'>Register Below</h4>
            </div>
            <div className="d-flex justify-content-center mb-1" >
            <p></p>
            </div>
                <div className="form-group d-flex">
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" className="form-control" onChange={handleUsername} required/>
                </div>
                <div className="form-group d-flex">
                    <label htmlFor="Email">Email: </label>
                    <input type="email" name="Email" id="Email" className="form-control" onChange={handleEmail} required/>
                </div>
                <div className="form-group d-flex">
                    <label htmlFor="Password">Password: </label>
                    <input type={type} name="Password" id="Password" className="form-control" maxLength={12} onChange={handlePassword} required/>
                </div>
                <div className = 'd-flex justify-content-center'>
                
                <button className = 'btn btn-outline-secondary btn-sm' type="button" onClick={changePassword}>Show Password</button>

                </div>
                {/* <div className="form-group">
                    <label htmlFor="prem">Premium member?</label>
                    <input type="checkbox" name="prem" id="Prem" onChange={handlePrem}/>
                </div> */}
          
            <hr style={{background:'#e25c02'}}/>
            <div className = 'd-flex justify-content-center ml-5'>
            <button className="btn btn-outline-dark mx-1" type ='button' onClick={createUser}>Create Account</button>
            <Link to="/login" className="btn btn-outline-dark mx-1">Back to Login</Link>
            </div>
            </form>
        </div>

    )
};


interface signupProps extends RouteComponentProps { }

export default signup;