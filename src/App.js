import React, {lazy, Suspense} from 'react'

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom'; 

import * as ROUTES from './constants/routes';

const Dashboard = lazy(() => import ('./pages/Dashboard'));
const Login = lazy(() => import ('./pages/Login'));
const SignUp = lazy(() => import ('./pages/Signup'));
const Profile = lazy(() => import ('./pages/Profile'));
const PageNotFound = lazy(() => import ('./pages/page-not-found'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch> 
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route path={ROUTES.PAGE_NOT_FOUND} component={PageNotFound} />

        </Switch>
    </Suspense>
  </Router>
  );
}

export default App