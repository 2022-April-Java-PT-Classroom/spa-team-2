import { Route, Switch } from 'react-router-dom';

import ContactScreen from '../../pages/contact';
import HomeScreen from '../../pages/home-screen';
// import About from '../../pages/about-us';
import Mystery from '../../pages/mystery-educator';
// import Comment from '../../pages/comment';
import Fish from '../../pages/fish';
// import SolarSystem from '../../pages/solar-system';
import React from 'react';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/contact'} component={ContactScreen} />
            <Route exact path={'/fish'} component={Fish} />
            {/* <Route exact path={'/solar-system'} component={SolarSystem} /> */}
            <Route exact path={'/mystery'} component={Mystery} />
            {/* <Route exact path={'/comment'} component={Comment} /> */}
            {/* <Route exact path={'/about'} component={About} />  */}
        </Switch>
    );
}

export default AppRouter;