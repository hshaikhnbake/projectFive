import React from 'react';
import './App.css';



class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <div className="wrapper">
                    <header>
                        <div className="headerContainer">
                            <h1>
                                <span className="fancy">Luxury </span><br></br>
                                <span className="realEstate">
                                Re<span className="thin">al Estate</span><br></br>
                                    <span className="thin">Re</span>defined
                                </span>
                            </h1>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}

export default Header;