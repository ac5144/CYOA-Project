import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavigationTest extends Component {

    render() {
        return(
            <div className="NavigationTest">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">CYOA</a>

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add" className="nav-link">Add Story</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavigationTest;
