import React from 'react'
import { Link } from "react-router-dom";

export default class NestedNavigatingBar extends React.Component{
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/page2/subPage1">SubPage1</Link>
                    </li>
                    <li>
                        <Link to="/page2/subPage2">SubPage2</Link>
                    </li>
                </ul>
            </div>
        )
    }
};
