import * as React from 'react';
import { Link } from 'react-router-dom'


const Navbar = (props: NavProps) => {


    return (

        <div className="container-fluid" style={{background:""}}>
            <ul className="nav justify-content-center nav-pills nav-fill navbar sticky-top" id="mainNav">
                <img src="./assets/img/Vitality_Blue_50x50.png" alt="Mini logo" width="50" height="50" />
                <li className="nav-item"><Link to="/" className="">Home</Link></li>
                <li className="nav-item"><Link to="/about" className="">About</Link></li>
                <li className="nav-item"><Link to="/feed" className="">Latest News</Link></li>
                <li className="nav-item"><Link to="/videos" className="">Videos</Link></li>
                <li className="nav-item"><Link to="/healthier_you" className="">Healthier You</Link></li>
                <li className="nav-item"><Link to="/conatact_us" className="">Contact Us</Link></li>
                <li className="nav-item"><Link to="/login" className="">Login/Signup</Link></li>
            </ul>
        </div>
    )
}


interface NavProps { };

export default Navbar;