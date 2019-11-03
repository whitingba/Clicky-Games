import React, { Component } from 'react';
import Navbar from './Navbar';
import JumboTron from './JumboTron';
import Container from './Container';
import ClickItem from './ClickItem';
import images from '../images.js';
import Footer from './Footer'

class Game extends Component {
    state = {
        images,
        score: 0,
        topScore: 0
    }

    componentDidMount() {
        this.setState({ data: this.shuffleImages(this.state.images) })
    }

    //this will reshuffle the images
    shuffleImages = images => {
        let currentIndex = images.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle
        while (0 !== currentIndex) {
            //Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            //And swap it with the current element
            temporaryValue = images[currentIndex];
            images[currentIndex] = images[randomIndex];
            images[randomIndex] = temporaryValue;

        }
        return images
    }

    //will check if the answers if correct and will call handleCorrectGuess function
    handleImageClick = id => {

    }

    // if the answer is correct the score will increment by one AND the images will be shuffled, else we will call the handleIncorrectGuess function
    handleCorrectGuess = newImage => {

    }

    // this ends the game and calls the resetImages function and shuffleImages function
    handleIncorrectGuess = image => {

    }

    //sets the images 'clicked' back to false and calls the shuffleImages function
    resetImages = images => {

    }


    render() {

        return (
            <div>
                <Navbar />
                <JumboTron />
                <Container>
                    {this.state.images.map(imageItem => (
                        <ClickItem
                            id={imageItem.id}
                            handleClick={this.handleImageClick}
                            image={imageItem.src}
                        />
                    ))}
                </Container>
                <Footer />
            </div >
        );
    }
}

export default Game;