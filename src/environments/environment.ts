import { env } from './.env';
import {ROUTES} from "../config/routes.contant";


export const environment = {
  production: false,
  hmr: true,
  version: env.npm_package_version + '-dev',
  serverUrl: 'http://localhost:3000',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US'],
  routes: ROUTES,
};
