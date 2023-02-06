import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
//view page
import HomePage from '../view/HomePage'
import Blog from '../view/Blog';

const AppRoute = () => {
    return (
        <>
            <Router>
                <Route exact path='/'><HomePage /></Route>
                <Route exact path='/blog'><Blog /></Route>
            </Router>
        </>
    )
}
export default AppRoute