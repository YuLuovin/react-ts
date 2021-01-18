import { renderRoutes, RouteConfig } from 'react-router-config';

export default function RouteWrap(props :RouteConfig) {
  // console.log('wrap',props)
  return (
    <>
      { renderRoutes(props.route.routes) }
    </>
  );
}