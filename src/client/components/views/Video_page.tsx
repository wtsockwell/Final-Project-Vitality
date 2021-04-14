import React, { useEffect } from 'react'

const Video_page = (props: Video_Page) => {


        useEffect(()=>{
            let UserIspremmember = localStorage.getItem('ispremmember');
            if(UserIspremmember==null||undefined||0){
                props.history.push('/login')  
                console.log(UserIspremmember)    
            }
        },[])

    return (
        <div>
            <h2>Video Recources</h2>
            <p className="text-center">This the home of our video recources to help inform and promote our message. These videos are inteded to aid in providing recources to our community so that they can stay informed on what we're facing, as well as how we can help fight against it.</p>
            <br />
            <h2>Information on what we're fighting</h2>
            <p className="text-center">These videos help show the more medical side of what heart disease means, and what it does. While not everyone will be interested in these fact heavy videos, making them more accessable to our users is important to us</p>
            <div className="d-flex justify-content-around flex-wrap">
                <iframe className="my-2" width="750" height="380" src="https://www.youtube.com/embed/vYnreB1duro" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="my-2" width="750" height="380" src="https://www.youtube.com/embed/2aiRpr5UCZs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="my-2" width="750" height="380" src="https://www.youtube.com/embed/xBAvxnT0ZvI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="my-2" width="750" height="380" src="https://www.youtube.com/embed/RiF0CgeuxxM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <br />
            <h2>Simple steps to help prevent</h2>
            <p className="text-center">These tips can help lower your risk of heart disease, and can lead to some great new habits that will not only make you healthier, but they can also help grow your connections with people as you get out and meet others like you.</p>
            <div className="d-flex justify-content-around flex-wrap">
                <iframe className="my-2" width="750" height="380" src="https://www.youtube.com/embed/02SL-xxeiNw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="my-2" width="750" height="380" src="https://www.youtube.com/embed/jUm8fFcTbG0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="my-2" width="750" height="380" src="https://www.youtube.com/embed/LTW5_Le2jOs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe className="my-2" width="750" height="380" src="https://www.youtube.com/embed/jwWpTAXu-Sg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <br />
            <h2>Signs to watch out for to help others</h2>
            <p className="text-center">These videos can be some of the most important as they can help you notice someone being affected by heart attacks and other cardio vascular diseases and potentially save lives. It's important not only to be informed about what it is, nor to know how to prevent it. In the worst case, it is important to know what to do to help in the moment.</p>
            <div className="d-flex justify-content-around flex-wrap">
                <iframe width="750" height="380" src="https://www.youtube.com/embed/ZswtwyjWNyI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="750" height="380" src="https://www.youtube.com/embed/ozzZVQQTvo4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <br />
            <h2>Other videos of note</h2>
            <p className="text-center">Here are some other videos picked by our staff that might make you think a bit about what might be getting into your body without you realizing</p>
            <div className="d-flex justify-content-around flex-wrap">
                <iframe width="750" height="380" src="https://www.youtube.com/embed/Ufm0yPA-kWc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="750" height="380" src="https://www.youtube.com/embed/K3ksKkCOgTw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

interface Video_Page {
    history: any;
}

export default Video_page