import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";

import NavBar from './layout/navigatingBar.js';

import Welcome from './pages/welcome.js';
import Page1 from './pages/page1.js';
import Page2 from './pages/page2.js';
// import Error from './pages/error.js';
import SubPage1 from './pages/subPages/subPage1';
import SubPage2 from './pages/subPages/subPage2';

export default class Routes extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <NavBar/>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/page1" component={Page1} />
                    <Route path="/page2" component={Page2} />
                    <Route path='/page2/subPage1' component={SubPage1} />
                    <Route path='/page2/subPage2' component={SubPage2} />
                    {/* <Route path="*" component={Error} /> */}
                </div>
            </Router>
        )
    }
}
