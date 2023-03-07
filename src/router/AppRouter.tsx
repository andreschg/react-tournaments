import { createBrowserRouter } from 'react-router-dom';

import Root from '../pages/Root';
import UsersManagement from '../pages/Users/UsersManagement';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [{
    path: '/dashboard',
    element: <div><h1>This is the dashboard</h1></div>
  },{
    path: '/users',
    element: <UsersManagement />
  }]
}]);

export default appRouter;