import React from 'react';
import images from './images.js'

const PlayingField = () => {
    return (
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col">{images.map(({ id, src, title, description }) => < img key={id} src={src} title={title} alt={description} />)}</div>
                < div className="col">one</div>
                <div className="col">two</div>
                <div className="col">three</div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">four</div>
                <div className="col">five</div>
                <div className="col">six</div>
                <div className="col">seven</div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">eight</div>
                <div className="col">nine</div>
                <div className="col">ten</div>
                <div className="col">eleven</div>
                <div className="col"></div>

            </div>
        </div>
    );
};

export default PlayingField;