import React from 'react';

import NestedNavigatingBar from '../../layout/nestedNavigationBar.js'

export default class SubPage2 extends React.Component{
    render() {
        return (
            <div>
                <NestedNavigatingBar/>
                <h1>SubPage 2</h1>
            </div>
        )
    }
};