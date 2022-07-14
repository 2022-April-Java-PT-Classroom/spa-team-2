import { Route, Switch } from 'react-router-dom';

import ContactScreen from '../../pages/contact';
import HomeScreen from '../../pages/home-screen';
import Mystery from '../../pages/mystery-educator';
// import Comment from '../../pages/comment';
import React from 'react';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/contact'} component={ContactScreen} />
            <Route exact path={'/mystery'} component={Mystery} />
            {/* <Route exact path={'/comment'} component={Comment} /> */}
        </Switch>
    );
}

export default AppRouter;