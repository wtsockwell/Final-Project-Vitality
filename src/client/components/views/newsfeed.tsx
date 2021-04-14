import React, { ReactEventHandler, useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
import { Link, BrowserRouter, RouteComponentProps } from 'react-router-dom';
import { couldStartTrivia, isTemplateSpan } from 'typescript';
import * as moment from 'moment'
import { json, User } from '../../utils/api'

const Feed: React.FC<Feed> = (props: Feed) => {
    const [tweet, setTweet] = useState([])
    const [tweetUrl, setUrl] = useState('')


    /*This useEffect is used to connect to the twitter.ts api located in routes/twitter. 
    This new feed needs to be reworked as certain api object properties are undefined and cannot render.
    Once we get our frontend design we can use link to pass params. 
    */
   
    let getFeed = async () => {
        try {
            const res = await json(`api/news/${tweetUrl}`)
            console.log(res)
            let { includes, data } = res
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
    };
    useEffect(() => {
        getFeed()
    }, [tweetUrl])

    const ClickToWHF = () => {
        setUrl('83809282')

    };
    const ClickToESC = () => {
        setUrl('21572529')

    };

    const ClickToAHA = () => {
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
                        <div className="d-flex">
                            <button className='btn btn-link' onClick={ClickToWHF}>World Heart Federation</button>
                            <button className='btn btn-link' onClick={ClickToAHA}>American Heart Association</button>
                            <button className='btn btn-link' onClick={ClickToESC}>European Society of Cardiology</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* These can be changed if we want to use something different than a card view, this was just simple because of the previous labs */}
            <div className="container mt-3 justify-content-between">
                <div className='d-flex justify-content-center'>
                </div>
                {tweet.map(item => (
                    <div className="row fadeInLeft animated wow" key={`itempost#${item.id}`}>
                        <div className="row g-0 border-bottom position-relative">
                            <div className="col-md-6 mb-md-0 p-md-4">
                                <a href={`https://twitter.com/${item.user.username}/status/${item.id}`}><img className='border' src={item.media.url} alt={item.text} style={{ height: '20vh', width: '50vw', objectFit: 'fill' }} /></a>
                            </div>
                            <div className="col-md-6 p-4 ps-md-0">
                                <div className="row d-flex align-items-baseline">
                                    <small className="card-title"><img src={item.user.profile_image_url} style={{ height: '2em', width: '2em' }} />{item.user.name}</small>
                                    <small className="text-gray-dark"><span className='text-dark ml-3 mt-3'>Views:</span> {item.media.public_metrics.view_count}</small>
                                </div>
                                <p className="text-muted">{item.text.slice(0, 250)}...</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </React.Fragment>




    );


};

interface Feed extends RouteComponentProps { }

export default Feed;