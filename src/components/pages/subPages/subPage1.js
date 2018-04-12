import React from 'react';

import NestedNavigatingBar from '../../layout/nestedNavigationBar.js'

export default class SubPage1 extends React.Component{
    render() {
        return (
            <div>
                <NestedNavigatingBar/>

                <h1>SubPage 1</h1>
            </div>
        )
    }
};