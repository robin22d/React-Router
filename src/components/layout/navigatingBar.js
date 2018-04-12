import React from 'react'
import { Link } from "react-router-dom";

export default class NavigatingBar extends React.Component{
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/page1">page 1</Link>
                    </li>
                    <li>
                        <Link to="/page2/subPage1">Page 2</Link>
                    </li>
                </ul>
            </div>
        )
    }
};