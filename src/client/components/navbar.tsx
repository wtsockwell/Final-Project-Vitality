import * as React from 'react';
import { Link, NavLink } from 'react-router-dom'
import '.././scss/navbar';
import '.././scss/about'
import '.././scss/app'



const Navbar = (props: NavProps) => {

let hoverStyle ={
    'fontWeight': 900,
    'textDecoration': 'overline',
    'textDecorationColor':'#dc3545'
}
    return (
        <React.Fragment>
            {/* <header id="header_wrapper">
                <div className="header_box">
                    <div className="logo"><a href="#vitality_blue_png"></a></div>
                    <nav className="navbar navbar-inverse" role="navigation">
                        <div className="navbar-header">
                            <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                        </div>
                        <div id="main-nav" className="collapse navbar-collapse navStyle">
                            <ul className="nav navbar-nav" id="mainNav">
                                <li className="active"><a href="#hero_section" className="scroll-link">Home</a></li>
                                <h1>This is a nav</h1>
                                <Link to = '/home'>Home</Link>
                                <li><a href="#service" className="scroll-link">Signup/Login</a></li>
                                <li><a href="#Portfolio" className="scroll-link">Latest News</a></li>
                                <li><a href="#clients" className="scroll-link">Videos</a></li>
                                <li><a href="#team" className="scroll-link">Healthier Choices</a></li>
                                <li><a href="#contact" className="scroll-link">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
        </header> */}

            <header className="p-3 border-bottom mb-2">
                <div className="container">
                    <div className="row d-flex justify-content-around">
                        <div className='col-2'>

                            <Link to='/' className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                                <i className="bi bi-heart-fill text-danger mb-1" style={{ fontSize: `1em` }}></i>
                                <h4>Vitality</h4>
                            </Link>

                        </div>
                        <div className="col-6">
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-end mb-md-0">
                     <NavLink to='/about' activeStyle={hoverStyle} className="nav-link px-2"> <li className='text-dark'>About</li></NavLink>           
                    <NavLink to='/feed' activeStyle={hoverStyle} className="nav-link px-2"> <li className='text-dark'>Latest News</li></NavLink>
                    <NavLink to='/bmi' activeStyle={hoverStyle} className="nav-link px-2"> <li className='text-dark'>BMI Calculator</li></NavLink>
                    <NavLink to='/newfeed' activeStyle={hoverStyle} className="nav-link px-2"> <li className='text-dark'>Overview</li></NavLink>
                    
                            </ul>
                        </div>
                        <div className="text-end col-3 d-flex justify-content-center">
                        <NavLink to='/signup' activeStyle={hoverStyle} className="nav-link px-2"><h5 className='text-dark'>Registeration</h5></NavLink>   
                        <NavLink to='/login' activeStyle={hoverStyle} className="nav-link px-2"><h5 className='text-dark'>Login</h5></NavLink>           
        
                        </div>
                    </div>
                </div>
            </header>


        </React.Fragment>

    )
}


interface NavProps { };

export default Navbar;