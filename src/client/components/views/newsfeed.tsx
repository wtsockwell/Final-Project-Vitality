import React, { ReactEventHandler, useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
import { Link, BrowserRouter, RouteComponentProps } from 'react-router-dom';
import { couldStartTrivia, isTemplateSpan } from 'typescript';


const Feed: React.FC<Feed> = (props: Feed) => {
    const [tweet, setTweet] = useState([])
    const [tweetUrl, setUrl] = useState('')


    /*This useEffect is used to connect to the twitter.ts api located in routes/twitter. 
    This new feed needs to be reworked as certain api object properties are undefined and cannot render.
    Once we get our frontend design we can use link to pass params. 
    */

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`api/news/${tweetUrl}`)
                let { includes, data } = await res.json()
                includes.media.forEach((items, index) => {
                    if (items.preview_image_url) {
                        items.url = items.preview_image_url

                    }
                    if (!items.public_metrics) {
                        items.public_metrics = { view_count: '0' }
                    }
                })
                data.forEach((item, index) => {
                    item.user = includes.users[0]
                    item.media = includes.media[index]
                    if (!item.media) {
                        try {
                            item.media = { url: item.user.profile_image_url, public_metrics: { view_count: '0' } }
                        } catch (error) {
                            console.log(error)
                        }
                    }
                })
                setTweet(data)

            } catch (err) {
                console.log(err)
            }
        })();
    }, [tweetUrl]);
    const ClickToWHF = ()=>{
        setUrl('83809282')

    };
/*reworking this sectio of logic*/
    // const ClickToESC = ()=>{
    //     setUrl('2157252')

    // };

    const ClickToAHA = ()=>{
        setUrl('105242077')

    };

   

    return (
        <React.Fragment>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Dynamic News Feed </h1>
                        <p className="lead text-muted">Our news feed aggregates the latest Tweets from today's leading <i
                            className="bi bi-heart-fill text-danger"
                            style={{ fontSize: `1em` }}
                        ></i> research institutions </p>
                        <h4>Select your source</h4>
                        <button className='btn btn-outline-dark mr-3' onClick={ClickToWHF}>World Heart Federation</button>                        
                        <button className='btn btn-outline-dark ml-3' onClick={ClickToAHA}>American Heart Association</button>


                    </div>
                </div>
            </section>

            {/* These can be changed if we want to use something different than a card view, this was just simple because of the previous labs */}
            <div className="container mt-3 justify-content-between">
                <div className='d-flex justify-content-center'>
                </div>
                
                <div className="row">
                    {tweet.map(item => (

                        <div key={`itempost#${item.id}`} className="col-4">
                            <div className="card my-2">
                                <a href={`https://twitter.com/${item.user.username}/status/${item.id}`}><img src={item.media.url} alt={item.text} style={{ height: '20vh', width: '50vw' }} /></a>
                                <div className="d-flex justify-content-between">
                                    <small className="text-gray-dark"><span className='text-dark ml-3 mt-3'>Views:</span> {item.media.public_metrics.view_count}</small>
                                </div>
                                <div className="card-body">
                                    <small className="card-title"><img src={item.user.profile_image_url} style={{ height: '2em', width: '2em' }} />{item.user.name}</small>
                                    <p className="text-muted">{item.text.slice(0, 110)}</p>
                                </div>
                            </div>
                        </div>
                        
                    ))}
                </div>
                
            </div>


        </React.Fragment>




    );


};

interface Feed { }

export default Feed;