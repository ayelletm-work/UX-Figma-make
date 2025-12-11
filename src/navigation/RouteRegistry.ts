import { routes } from './routes';

export type RouteKey = keyof typeof routes;

export function getRoute(key: RouteKey) {
  return routes[key];
}
