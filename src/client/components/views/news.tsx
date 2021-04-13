import React, { useEffect, useState } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';


const Twitter = () => {
    const [tweet, setTweet] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('api/worldheartfederation')
                const { data } = await res.json()
                setTweet(data)
            } catch (err) {
                console.log(err)
            }

        })();
    }, []);
    console.log(tweet)

    return (
        <React.Fragment>
         
                <div className="d-flex justify-content-evenly">
                    <div className="card mb-3 mr-2 col-3" >
                        <div className="row">
                            <div className="col-md-3">
                                <img width='50vw' height='50vh' src="data:image/jpeg;base64,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" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div className="card mb-3 mr-2 col-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="data:image/jpeg;base64,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" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 mr-2 col-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="data:image/jpeg;base64,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" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






        </React.Fragment>




    );


};

interface Tweet { }

export default Twitter;