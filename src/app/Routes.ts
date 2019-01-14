import { param, route } from 'typesafe-react-router';

export const Routes = {
  TRENDING: route(''),
  SETTINGS: route('settings'),
  ABOUT: route('about'),
  STARGAZER: route('stargazer'),
  STARGAZER_SEARCH: route('stargazer', 'search'),
  STARGAZER_DETAIL: route('stargazer', param('id')),
};
