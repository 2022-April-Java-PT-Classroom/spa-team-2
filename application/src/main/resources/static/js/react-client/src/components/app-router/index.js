import { Route, Switch } from 'react-router-dom';

import AboutPage from '../../pages/about-us';
import CommentScreen from '../../pages/comment';
import Fish from '../../pages/fish';
import HomeScreen from '../../pages/home-screen';
import Jac from '../../pages/jac';
import Mystery from '../../pages/mystery-educator';
import React from 'react';

// import About from '../../pages/about-us';


// import SolarSystem from '../../pages/solar-system';


const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/comment'} component={CommentScreen} />
            <Route exact path={'/fish'} component={Fish} />
            {/* <Route exact path={'/solar-system'} component={SolarSystem} /> */}
            <Route exact path={'/mystery'} component={Mystery} />
            <Route exact path={'/jac'} component={Jac} />
            <Route exact path={'/about'} component={AboutPage} />
        </Switch>
    );
}

export default AppRouter;