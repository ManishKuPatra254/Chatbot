import React, { useState, useEffect, Fragment } from 'react';
import '../App.css'
import main_logo from '../assets/main_logo.svg'
import p1 from '../assets/content-pensive-young-man-reading-internet-news-smartphone.jpg'
import p2 from '../assets/joyful-guy-texting-message-smartphone.jpg'
import p3 from '../assets/corporate-workers-brainstorming-together.jpg'
import { TextField } from '@mui/material';

export function Home() {


    const images = [
        p1,
        p2,
        p3,
    ];

    const maincontent = [
        'SMS Solutions',
        'RCS Platform',
        'Unlocking Potential with Celetel'
    ];

    const content = [
        'where we transform simple text messages into powerful communication tools that connect businesses with their audience like never before.',
        'Redefine how you engage with your audience using RCS messaging, the next-generation of interactive communication',
        'Explore the limitless possibilities of effective communication with Celetel as your trusted partner. Lets unlock your business full potential together'
    ];



    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Fragment>
            <div className="main_container">
                <div className="sub_container_1">
                    <img src={main_logo} alt="Company Logo" className="company-logo" />
                    <h2 className="heading">What's New</h2>
                    <div className="carousel-container">

                        <div className="carousel">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                                    style={{ backgroundImage: `url(${image})` }}
                                ></div>
                            ))}
                        </div>

                        <div className="carousel-content-1">
                            {maincontent.map((text, index) => (
                                <div
                                    key={index}
                                    className={`carousel-text ${index === currentIndex ? 'active' : ''}`}
                                >
                                    <h3>{text}</h3>
                                </div>
                            ))}
                        </div>

                        <div className="carousel-content">
                            {content.map((text, index) => (
                                <div
                                    key={index}
                                    className={`carousel-text ${index === currentIndex ? 'active' : ''}`}
                                >
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="sub_container_2">
                    <div className="email-form-container">
                        <form className="email-form">
                            <h2>Login</h2>
                            <TextField sx={{ width: "100%", mt: 4 }} id="outlined-basic" label="Email address" variant="outlined" />
                            <button type="submit">Proceed</button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
