import React from 'react';
import "../styles/JumboTron.css"

const JumboTron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h5 className="display-4">Rules of Play: Click on the images without repeating the same image to get the highest score. Good luck! </h5>
                <p className="lead"></p>
            </div>
        </div>
    );
};

export default JumboTron;