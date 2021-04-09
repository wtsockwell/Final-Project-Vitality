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
                })
                data.forEach((item, index) => {
                    item.user = includes.users[0]
                    item.media = includes.media[index]
                })
                setTweet(data)

            } catch (err) {
                console.log(err)
            }

        })();
    }, []);


    return (
        <React.Fragment>
            <div className="container-fluid">

                {tweet.map(items => (
                    <div className="d-flex flex-column align-items-stretch bg-white" style={{ width: 380 }}>
                        <div className="list-group list-group-flush border-bottom scrollarea">
                            <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                                <div className="d-flex w-100 align-items-center justify-content-between">
                                    {/* <small className="mb-1">{items.text}</small> */}
                                    {/* <img src={`${items.media.url}`} alt="Bootstrap" width="32" height="32" className="rounded-circle border border-danger" /> */}
                                    <small>{items.user.name}</small>

                                </div>
                                <div className="col-10 mb-1 small">
                                    {items.text}
                                </div>
                            </a>
                        </div>
                    </div>
                ))}


            </div>

        </React.Fragment>




    );


};

interface Feed { }

export default Feed;