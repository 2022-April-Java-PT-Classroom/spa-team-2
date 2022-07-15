import { Route, Switch } from 'react-router-dom';

import CommentScreen from '../../pages/comment';
import Fish from '../../pages/fish';
import Game from '../../pages/games';
import HomeScreen from '../../pages/home-screen';
import Jac from '../../pages/jac';
// import About from '../../pages/about-us';
import Mystery from '../../pages/mystery-educator';
// import SolarSystem from '../../pages/solar-system';
import React from 'react';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/comment'} component={CommentScreen} />
            <Route exact path={'/fish'} component={Fish} />
            {/* <Route exact path={'/solar-system'} component={SolarSystem} /> */}
            <Route exact path={'/mystery'} component={Mystery} />
            <Route exact path={'/jac'} component={Jac} />
            {/* <Route exact path={'/about-us'} component={About} /> */}
            <Route exact path={'/games'} component={Game} />
        </Switch>
    );
}

export default AppRouter;