import React from 'react';


const signup = (props: signupProps) => {
    return (


        <div className="container">
            <h2>Signup/Login</h2>
            <h6>Start a new journey or pickup where you left off.</h6>

            <div className="form">
                <input className="input-text" type="text" value="Create Username *" />
                <input className="input-text" type="text" value="Enter Email Address*" />
                <input className="input-text" type="text" value="" />
                <input className="input-btn" type="submit" value="Login" />
            </div>

  
  
        </div >



    )
};


interface signupProps { }

export default signup;