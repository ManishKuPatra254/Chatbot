import React, { useState, useEffect, Fragment } from 'react';
import '../App.css'
import main_logo from '../assets/main_logo.svg'
import { TextField } from '@mui/material';

export function Home() {


    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmu2QkdVKnN70ICNtdXAUD7Bugm6UjGsKaS1FcGOKOzA&s',
        'https://www.forbesindia.com/media/images/2023/Sep/img_218241_workfromhome.jpg',
        'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2018/07/01153710/benefits-of-working-from-home.jpg'
    ];

    const content = [
        'Content for Image 1',
        'Content for Image 2',
        'Content for Image 3'
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
