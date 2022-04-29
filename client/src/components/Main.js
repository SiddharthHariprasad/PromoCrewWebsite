import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import all page components here
import MainPage from './MainPage';
import MediaPage from './MediaPage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import OurWorks from './OurWorks';
import Services from './Services';
import ErrorPage from './ErrorPage';

// All routes go here. Don't forget to import the components above after adding new route.

const Main = () => {

    return (
        <Switch>
            <Route exact path="/" component={MainPage}></Route>
            <Route path="/Media" component={MediaPage}></Route>
            <Route path="/AboutUs" component={AboutUs}></Route>
            <Route path="/ContactUs" component={ContactUs}></Route>
            <Route path="/OurWorks" component={OurWorks}></Route>
            <Route path="/Services" component={Services}></Route>
            <Route component={ErrorPage}></Route>
        </Switch>
    );
}

export default Main;