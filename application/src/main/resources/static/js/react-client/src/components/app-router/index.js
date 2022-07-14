import { Route, Switch } from 'react-router-dom';

import Jac from '../../pages/jac';
import CommentScreen from '../../pages/comment';
import HomeScreen from '../../pages/home-screen';
import Mystery from '../../pages/mystery-educator';
import React from 'react';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/comment'} component={CommentScreen} />
            <Route exact path={'/jac'} component={Jac} />
            <Route exact path={'/mystery'} component={Mystery} />
            {/* <Route exact path={'/about'} component={About} /> */}
        </Switch>
    );
}

export default AppRouter;