import * as React from 'react';
// import '../scss/navbar.scss';
// import '../scss/animate.scss';
// import '../scss/animation.scss'

const Navbar = (props: NavProps) => {
    

        return (
          
            <header id="header_wrapper">
            <div className="container">
                <div className="header_box">
                    <div className="logo"><a href="#vitality_blue_png"></a></div>
                    <nav className="navbar navbar-inverse" role="navigation">
                        <div className="navbar-header">
                            <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                        </div>
                        <div id="main-nav" className="collapse navbar-collapse navStyle">
                            <ul className="nav navbar-nav" id="mainNav">
                                <li className="active"><a href="#hero_section" className="scroll-link">Home</a></li>
                                <li><a href="#aboutUs" className="scroll-link">About Us</a></li>
                                <li><a href="#service" className="scroll-link">Signup/Login</a></li>
                                <li><a href="#Portfolio" className="scroll-link">Latest News</a></li>
                                <li><a href="#clients" className="scroll-link">Videos</a></li>
                                <li><a href="#team" className="scroll-link">Healthier Choices</a></li>
                                <li><a href="#contact" className="scroll-link">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

)
} 


interface NavProps { };

export default Navbar;