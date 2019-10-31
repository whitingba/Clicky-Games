import React from 'react';
import Navbar from "./components/Navbar";
import JumboTron from "./components/JumboTron";
import PlayingField from "./components/PlayingField";

function App() {
    return (
        <div className="container">
            <Navbar />
            <JumboTron />
            <PlayingField />

        </div>
    )
}

export default App;