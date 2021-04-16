import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, RouteComponentProps ,useHistory } from 'react-router-dom'


const Navbar:React.FC<NavProps> = (props: NavProps) => {
    
    const [prem, setPrem] = useState(null)
    const [user,setUser] = useState(null)


    let premNumber = localStorage.getItem('ispremmember')
    let userName = localStorage.getItem('username')


    useEffect(() => {
        setPrem(premNumber)
        setUser(userName)

    }, [])

    let logOut = () => {
        localStorage.clear()
        location.reload()
    }
   
try {
    if (prem == 1) {

        return (
            <React.Fragment>
                <div className="container-fluid bg-light border border-bottom">
                    <ul className="nav justify-content-center nav-pills nav-fill navbar sticky-top" id="mainNav">
                        <img src="./assets/img/Vitality_Blue_50x50.png" alt="Mini logo" width="50" height="50" />
                        <li className="nav-item"><Link to="/" className="">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="">About</Link></li>
                        <li className="nav-item"><Link to="/feed" className="">Latest News</Link></li>
                        <li className="nav-item"><Link to="/videos" className="">Videos</Link></li>
                        <li className="nav-item"><Link to="/healthier_you" className="">Healthier You</Link></li>
                        <li className="nav-item"><Link to="/bmi" className="">BMI Assessment</Link></li>
                        <li className="nav-item" > <button className='btn btn-outline-secondary btn-sm' type="button" onClick={logOut}>Logout</button></li>
                        <li className="nav-item"><small className='bg-light'>Welcome {user}</small></li>
                    </ul>
                </div>
            </React.Fragment>
              )
} else {
    return (
        <React.Fragment>
            <div className="container-fluid bg-light border border-bottom">
                <ul className="nav justify-content-center nav-pills nav-fill navbar sticky-top" id="mainNav">
                    <img src="./assets/img/Vitality_Blue_50x50.png" alt="Mini logo" width="50" height="50" />
                    <li className="nav-item"><Link to="/" className="">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="">About</Link></li>
                    <li className="nav-item"><Link to="/feed" className="">Latest News</Link></li>
                    <li className="nav-item"><Link to="/videos" className="">Videos</Link></li>
                    <li className="nav-item"><Link to="/healthier_you" className="">Healthier You</Link></li>
                    <li className="nav-item"><Link to="/login" className="">Login/Signup</Link></li>

                </ul>
            </div>
        </React.Fragment>
    )

}
   
    
} catch (error) {
    console.log(error)
}
   
}



interface NavProps {};

export default Navbar;