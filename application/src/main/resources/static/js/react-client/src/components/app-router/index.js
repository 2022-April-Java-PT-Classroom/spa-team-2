import { Route, Switch } from 'react-router-dom';

import CommentScreen from '../../pages/comment';
import Email from '../../pages/email-us';
import FAQ from '../../pages/faq';
import Fish from '../../pages/fish';
import Fishing from '../../pages/fishingame';
import Game from '../../pages/games';
import HomeScreen from '../../pages/home-screen';
import Jac from '../../pages/jac';
import MySpace from '../../pages/myspace';
// import About from '../../pages/about-us';
import Mystery from '../../pages/mystery-educator';
import PageNotFound from "../../pages/PageNotFound";
import React from 'react';
import SolarSystem from '../../pages/solar-system';

// import SolarSystem from '../../pages/solar-system';




// import About from '../../pages/about-us';


// import SolarSystem from '../../pages/solar-system';


// import SolarSystem from import'../../pages/solar-system';


const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/comment'} component={CommentScreen} />
            <Route exact path={'/fish'} component={Fish} />
            <Route exact path={'/fishingame'} component={Fishing} />
            {/* <Route exact path={'/solar-system'} component={SolarSystem} /> */}
            <Route exact path={'/mystery'} component={Mystery} />
            <Route exact path={'/jac'} component={Jac} />
            <Route exact path={'/email-us'} component={Email} />
            <Route exact path={'/solar-system'} component={SolarSystem} />
            <Route exact path={'/myspace'} component={MySpace} />
            {/* <Route exact path={'/about-us'} component={About} /> */}
            {/* <Route exact path={'/games'} component={Game} /> */}
            <Route exact path={'/faq'} component={FAQ} />
            <Route component={PageNotFound} />



        </Switch>
    );
}

export default AppRouter;