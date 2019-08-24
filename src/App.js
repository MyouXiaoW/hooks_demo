import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routeConfig from './route/routeConfig';
const App = () => {
  return <Router>{renderRoutes(routeConfig)}</Router>;
};

export default App;
