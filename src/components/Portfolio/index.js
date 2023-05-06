import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            // clearTimeout(timer);
        }
    }, []);



    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>

                                <img
                                    src={port.image}
                                    className="portfolio-image"
                                    alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                {/* <div className="photo">                    
                    <img src="images/iozsoy.png" alt="" className="iozsoy" />
                </div> */}

                <div className="explanation">
                    <div className="left">
                    <p>
                        Saying "I will do my best" when asked to do something is your excuse for not doing what needs to be done. <br /> <br />

                        I am a Front End Developer who is open to development and loves to learn. <br /><br />

                        The best way to learn is to retain existing knowledge and add new ones to it. The best way to preserve knowledge is to constantly repeat and practice. <br /><br />

                        I have a structure that focuses on his work, is highly motivated, and gives importance to the details of the work.My attention to detail is a key strength that allows me to write clean, efficient, and functional code. <br /><br />

                        I am a person who has learned to code HTML, CSS, Bootstrap, SCSS, JavaScript and using GitHub, and aims to learn React and Angular in the short term. In the long term, I aim to become a skilled Mobile Application Developer in mobile interface development by learning React Native. <br /><br />

                        I think coding should be done in a clean, functional, workable and readable way. <br /><br />

                        I can work both independently and with a team. I am a person who loves teamwork, values team spirit and is committed to that spirit. Great achievements  can be achieved by teams who have a spirit. <br /><br />
                    </p>
                </div>

                <div className="right">                                        
                <img src="images/iozsoy.png" alt="" className="iozsoy" />
                </div>
                </div>

                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;