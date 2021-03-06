import { Route, Switch } from 'react-router-dom';

import AboutPage from '../../pages/about-us';
import Email from '../../pages/email-us';
import FAQ from '../../pages/faq';
import Fish from '../../pages/fish';
import Fishing from '../../pages/fishingame';
import Game from '../../pages/games';
import HomeScreen from '../../pages/home-screen';
import Jac from '../../pages/jac';
import MySpace from '../../pages/myspace';
import Mystery from '../../pages/mystery-educator';
import PageNotFound from "../../pages/PageNotFound";
import Planet from '../../pages/planet';
import React from 'react';
import Reviews from '../../pages/reviews';
import SolarSystem from '../../pages/solar-system';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/fish'} component={Fish} />
            <Route exact path={'/planet'} component= {Planet} /> 
            <Route exact path={'/about-us'} component={AboutPage} />
            <Route exact path={'/fishingame'} component={Fishing} />
            <Route exact path={'/mystery'} component={Mystery} />
            <Route exact path={'/jac'} component={Jac} />
            <Route exact path={'/email-us'} component={Email} />
            <Route exact path={'/solar-system'} component={SolarSystem} /> 
            <Route exact path={'/myspace'} component={MySpace} />

            {/* <Route exact path={'/about-us'} component={About} /> */}
            {/* <Route exact path={'/games'} component={Game} /> */}
            <Route exact path={'/reviews'} component={Reviews} />

            <Route exact path={'/reviews'} component={Reviews} />
            <Route exact path={'/faq'} component={FAQ} />

            <Route component={PageNotFound} />



        </Switch>
    );
}

export default AppRouter;