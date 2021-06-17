import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Routes from './routes/routes';

const App: React.FC = () => {
  return (
    <div className="w-1/2 mx-auto py-1">
      <Router>
        <nav className="flex gap-1">
          {Routes.map((route, index) => (
            <NavLink 
              className="text-gray-300 text-xs uppercase bg-gray-600 px-3 py-0.5 rounded-sm"
              activeClassName="bg-gray-700"
              key={ index }
              exact={ route.exact }
              to={ route.path }>
              { route.name }
            </NavLink>
          ))}
        </nav>
        <div className="mt-3 px-1">
          <Switch>
            {Routes.map((route, index) => (
              <Route 
                key={ index }
                path={ route.path }
                exact={ route.exact }>
                <route.component { ...route.props } />
              </Route>
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
