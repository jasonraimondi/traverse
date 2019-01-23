import { formatRoute as reactFormatRoute } from 'react-router-named-routes';

export const Routes = {
  TRENDING: '/',
  SETTINGS: '/settings',
  ABOUT: '/about',
  STARGAZER: '/stargazer',
  STARGAZER_SEARCH: '/stargazer/search',
  STARGAZER_DETAIL: '/stargazer/:login',
};

export function formatRoute(path: string, params: { [param: string]: string } = {}) {
  return reactFormatRoute(path, params);
}
