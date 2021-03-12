import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">HomeWork 13</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/weather' className="nav-link" activeClassName="active">
                                Weather
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/retro' className="nav-link" activeClassName="active">
                                Retrospective
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/todo' className="nav-link" activeClassName="active">
                                Todo
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}

export default Navigation;