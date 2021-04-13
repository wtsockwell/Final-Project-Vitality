import React from 'react';


const About = (props: AboutProps) => {
    return (
        <div>
            <div>
                <section id="aboutUs">
                    <div className="inner_wrapper aboutUs-container fadeInLeft animated wow">
                        <div className="container">
                            <h1 className="content centered">A World Free of Heart Disease</h1>
                            <br />
                            <h3 className="row-md-6 content centered" >    That is the goal we strive to achieve with the creation of Vitality.</h3>
                            <br />
                            <h3 className="row-md-6 content centered">  Cardio vascular disease,more commonly known as Heart disease, is one of the most pressing health tragedies in modern human life. An average of 647,000 Americans die from heart disease(1 out of every 4 US deaths)
                                on a yearly basis, making it the leading cause of death in the United States.</h3>
                            <br />
                            <br />
                            <h1 className="row-md-6 content centered">
                                Our purpose:
                            </h1>
                            <br />
                            <h3 className="row-md-6 content centered" >Vitality seeks to build stronger and more informed communities by providing an interface were users can register for upcoming group fitness activities,
                         view interactive videos,locate healthier food choices,and ultimately utilize the information provided to curate the most fullfilling life possible for each individual user.</h3>
                            {/* <ul className="about-us-list content align left">
                            <li className="points">To provide the knowledge needed to create and maintain a lifestyle where risk of heart disease is at a minimum.</li>
                            
                            <li className="points">Create a ecosystem that organically grows the awareness of heart disease prevention </li>
                            <li className="points">Provide heart friendly food options and well as excercise </li>
                            <li className="points"></li>
                        </ul> */}
                            <br />
                            <br />
                            <img src="./assets/img/pic4.png" alt="about page heart" className="center" />
                            <br />
                            <br />
                            <h1 className="row-md-6 content centered">Types of Heart Disease</h1>

                            <h4 className="row-md-6 content centered">The term “heart disease” refers to several types of heart conditions:</h4>
                            <br />

                            <ul className="about-us-list content centered">
                                <li className="points">Coronary artery disease or CAD(most common form of heart disease)</li>
                                <li className="points">myocardial infarction(heart attack)</li>
                                <li className="points">Congestive heart failure </li>
                                <li className="points">Heart valve disease </li>
                                <li className="points">Heart muscle disease or cardiomyopathy</li>
                                <li className="points">Abnormal heart rhythms or arrhythmia</li>
                            </ul>

                            <br />

                            <h1 className="row-md-6 content centered"> How to Lower The Risk</h1>
                            <h4 className="row-md-6 content centered">Though this isn't a direct cure for the many forms of the disease</h4>
                            <h4 className="row-md-6 content centered">there's still many provisions to be taken, such as:
                        Healthier alternatives for Food and Drinks, Managing a Healthy Weight, Getting Regular Physical Activity, and Avoiding habits that may lead to greater risks such as Smoking</h4>
                            <br />



                        </div>
                    </div>
                </section>

            </div>




        </div>

    )
}

interface AboutProps { };

export default About;