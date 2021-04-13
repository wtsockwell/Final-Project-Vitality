import React, { useEffect, useState } from 'react';
import { Link, BrowserRouter, RouteComponentProps } from 'react-router-dom';
import { couldStartTrivia, isTemplateSpan } from 'typescript';


const Feed: React.FC<Feed> = (props: Feed) => {
    const [tweet, setTweet] = useState([])


    /*This useEffect is used to connect to the twitter.ts api located in routes/twitter. 
    This new feed needs to be reworked as certain api object properties are undefined and cannot render.
    Once we get our frontend design we can use link to pass params. 
    */

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`api/news/${105242077}`)
                let { includes, data } = await res.json()
                includes.media.forEach((items, index) => {
                    if (items.preview_image_url) {
                        items.url = items.preview_image_url
                    }
                    if (items.public_metrics == undefined) {
                        items.public_metrics = { view_count: 'Not Available' }
                    }
                })

                data.forEach((item, index) => {
                    item.user = includes.users[0]
                    item.media = includes.media[index]
                })
                console.log(data)
                setTweet(data)

            } catch (err) {
                console.log(err)
            }

        })();
    }, []);

    return (
        <React.Fragment>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Album example</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p>
                            <a href="#" className="btn btn-primary my-2">Main call to action</a>
                            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                        </p>
                    </div>
                </div>
            </section>
            <main className="container">
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    {tweet.map(item => (
                        <div className="d-flex text-muted pt-3 mb-1" key={`unique-${item.id}`}>
                            <img src={item.media.url} alt={item.text} style={{ height: '5em', width: '5em' }} />
                            <div className="pb-3 mb-0 ml-1 small lh-sm border-bottom w-100">
                                <div className="d-flex justify-content-between">
                                    <small className="text-gray-dark"><span className='text-dark'>Views:</span> {item.media.public_metrics.view_count}</small>
                                    <a className='text-danger' href={`https://twitter.com/American_Heart/status/${item.id}`}>Visit <img src={item.user.profile_image_url} style={{ height: '2em', width: '2em' }} /></a>
                                </div>
                                <span className="d-block">Source: {item.user.name}</span>
                                <span className='d-block'>Text:{item.text.slice(0, 100)}.....</span>
                            </div>
                        </div>

                    ))}

                    <small className="d-block text-end mt-3">
                        <a href="#">All suggestions</a>
                    </small>
                </div>
            </main>


        </React.Fragment>




    );


};

interface Feed { }

export default Feed;