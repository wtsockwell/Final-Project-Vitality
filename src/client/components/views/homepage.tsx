import React from 'react';
import '../scss/app.scss';
import '../scss/homepage.scss';

const homepage = (props: homepageProps) => {
    return (

        <section id="hero_section" className="top_cont_outer">
            <div className="hero_wrapper">
                <div className="container">
                    <div className="hero_section">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="top_left_cont zoomIn wow animated">
                                    <h2>Vitality<br> <strong> <i className="fa fa-heart"></i> </strong></h2>
                                        <h2>Creating Healthier Communities<h2>


                                            <div className="underline"></div>
                                            <a href="#service" className="read_more2">Signup/Login</a> </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>


)}


interface  homepageProps { }
export default homepage;