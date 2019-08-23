import React from "react";
import { Route, Link } from "react-router-dom";

const Backend = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
                <div >
                    <ul className="nav">
                        <li className="nav-item">
                            {/* <a href="#">Active</a> */}
                            <Link className="nav-link active" to="/home" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/page1" >Page1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/page2" >page2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" >Logout</Link>
                        </li>
                    </ul>
                    <Component {...props} />
                </div>
            )}
        />
    );
};

export default Backend;