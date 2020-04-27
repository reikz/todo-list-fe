import { env } from './.env';
import {ROUTES} from "../config/routes.contant";

export const environment = {
  production: true,
  hmr: false,
  version: env.npm_package_version,
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US'],
  routes: ROUTES,
};
