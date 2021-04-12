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

    return (
        <React.Fragment>

            {/* <div className="row row-cols-3 align-items-stretch py-5"> */}
            <div className="row d-flex justify-content-around">
                {tweet.map((items, index) => (
                    <BrowserRouter key={`news-${index}`}>
                        <Link to='/' >
                            <div className="d-flex text-muted pt-3 m-5"  >
                                <img src={items.profile_image_url} className="rounded mx-auto d-block" alt="Hello" width="32" height="32" />
                                <div className=" mb-0 small lh-sm w-100">
                                    <div className="d-flex justify-content-between">
                                        <strong className="text-gray-dark">{items.name}</strong>
                                    </div>
                                    <span className="d-block">{`${items.location}`}</span>
                                </div>
                            </div>
                        </Link>
                    </BrowserRouter>
                ))}
            </div>





        </React.Fragment>




    );


};

interface Tweet { }

export default Twitter;