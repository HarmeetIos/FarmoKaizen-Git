/************************************** APIs end point ****************************************************/
import {stage} from './Utilis';

export const BASE_URL =
  stage == false
    ? 'https://api.farmo.io/nfty/api/v1/'
    : 'https://stage-api.goldgo.io/nfty/api/v1/';

export const REGISTER_USER_API_POST = 'user/register';
