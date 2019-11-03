import React, { Component } from 'react';
import Navbar from './Navbar';
import JumboTron from './JumboTron';
import Container from './Container';
import ClickItem from './ClickItem';
import images from '../images.js';

class Game extends Component {
    state = {
        images,
        score: 0,
        topScore: 0
    }

    componentDidMount() {
        this.setState({ data: this.shuffleImages(this.state.images) })
    }

    shuffleImages = images => {

    }

    handleImageClick = id => {

    }

    handleCorrectGuess = newImage => {

    }

    handleIncorrectGuess = image => {

    }

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
            </div >
        );
    }
}

export default Game;