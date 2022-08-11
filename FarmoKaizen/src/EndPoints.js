/************************************** APIs end point ****************************************************/
import {stage} from './Utilis';

export const BASE_URL =
  stage == false ? 'http://localhost:5000/api/' : 'http://localhost:5000/api/';

export const REGISTER_USER_API_POST = 'auth/register';
export const LOGIN_USER_API_POST = 'auth/login/';
