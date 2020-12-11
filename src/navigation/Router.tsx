import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TitleComponent from '../lib/components/TitleComponent';
import { IRouterConfig } from './types';

export const RouteWithSubRoutes: React.FC<IRouterConfig> = (props) => {
  const { routes, path, exact, title } = props;

  if (!routes) {
    const routeWithoutRoutes = props;
    return (
      <Route path={path} exact={exact}>
        <>
          <TitleComponent title={title} />
          <routeWithoutRoutes.component />
        </>
      </Route>
    );
  }
  return (
    <Route path={path} exact={exact}>
      <>
        <TitleComponent title={title} />
        <props.component routes={routes} />
      </>
    </Route>
  );
};

export const RenderRoutes: React.FC<{ routes?: IRouterConfig[] }> = (props) => {
  const { routes } = props;

  if (routes) {
    return (
      <Switch>
        {routes.map((route: IRouterConfig) => {
          return (
            <RouteWithSubRoutes
              key={route.key}
              component={route.component}
              path={route.path}
              routes={route.routes}
              exact={route.exact}
              title={route.title}
            />
          );
        })}
        <Route
          component={() => (
            <>
              <TitleComponent title="404" />
              <h1>Not Found!</h1>
            </>
          )}
        />
      </Switch>
    );
  }

  return (
    <Route
      component={() => (
        <>
          <TitleComponent title="404" />
          <h1>Not Found!</h1>
        </>
      )}
    />
  );
};
