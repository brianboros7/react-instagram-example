import React, {lazy, Suspense} from 'react'
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
import IsUserLoggedIn from './helpers/is-user-logged-in'
import ProtectedRoute from './helpers/protected-route'

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom'; 

import * as ROUTES from './constants/routes';

const Dashboard = lazy(() => import ('./pages/Dashboard'));
const Login = lazy(() => import ('./pages/Login'));
const SignUp = lazy(() => import ('./pages/SignUp'));
const Profile = lazy(() => import ('./pages/Profile'));
const PageNotFound = lazy(() => import ('./pages/page-not-found'));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}> 
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch> 
            <IsUserLoggedIn 
              user={user} 
              loggedInPath={ROUTES.DASHBOARD}
              path={ROUTES.LOGIN}
              >
              <Login />
            </IsUserLoggedIn>
            <IsUserLoggedIn 
              user={user} 
              loggedInPath={ROUTES.DASHBOARD}
              path={ROUTES.SIGN_UP}
              >
              <SignUp />
            </IsUserLoggedIn>
            <Route path={ROUTES.PROFILE} component={Profile} />

            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
         
            <Route path={ROUTES.PAGE_NOT_FOUND} component={PageNotFound} />

          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App