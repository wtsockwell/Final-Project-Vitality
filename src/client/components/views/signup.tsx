import React from 'react';
// import '../scss/app.scss';
import '../../scss/signup.scss';


const signup = (props: signupProps) => {
    return (
        

            <div className="container">
                <h2>Signup/Login</h2>
                <h6>Start a new journey or pickup where you left off.</h6>

                <div className="form">
                    <input className="input-text" type="text" name="" value="Your Name or E-mail *" onFocus="if(this.value==this.defaultValue)this.value='';" onBlur="if(this.value=='')this.value=this.defaultValue;"/>
                        <input className="input-text" type="text" name="" value="Your Password *" onFocus="if(this.value==this.defaultValue)this.value='';" onBlur="if(this.value=='')this.value=this.defaultValue;"/>
                            <input className="input-btn" type="submit" value="New User/ Signup"/>
                                <input className="input-btn" type="submit" value="Login"/>
             </div>
             </div>
             
             
       
    )};


    interface signupProps { }

    export default signup;