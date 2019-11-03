import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Clicky Games</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <a className="navbar-text" href="#"></a>
                    </li>

                </ul>
                <span className="navbar-text">
                    Your Score: |
          </span>
                <span className="navbar-text">
                    | Top Score:
          </span>
            </div>
        </nav>
    );
};

export default Navbar;