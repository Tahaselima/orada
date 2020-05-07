import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PublicLayout from '../../layout/index';

import Newlink from '../../pages/Newlink/route';
import Linklist from '../../pages/Linklist/route';

const routes = [...Newlink, ...Linklist];

export function Routes() {
  return (
    <PublicLayout>
      <Switch>
          {routes.map((route, index) => (
                <Route {...route} key={route.path + index} />
            ))}
      </Switch>
    </PublicLayout> 
  );
}

export default Routes;
