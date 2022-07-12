import { Route, Switch } from 'react-router-dom';

import ContactScreen from '../../pages/contact';
import HomeScreen from '../../pages/home-screen';
import React from 'react';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/contact'} component={ContactScreen} />
        </Switch>
    );
}

export default AppRouter;