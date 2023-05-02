import { createBrowserRouter } from 'react-router-dom';

import Root from '../pages/Root';
import UsersManagement from '../pages/Users/UsersManagement';
import LeaguesManagement from '../pages/Leagues/LeaguesManagement';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [{
    path: '/dashboard',
    element: <div><h1>This is the dashboard</h1></div>
  }, {
    path: '/users',
    element: <UsersManagement />
  }, {
    path: '/squads',
    element: <LeaguesManagement />
  }]
}]);

export default appRouter;