import callAPI from '../config/api';
import { LoginTypes } from './data-types';

const ROOT_API = "https://gamestorebe.herokuapp.com/";
const API_VERSION = 'api/v1';

export async function setSignUp(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

export async function setLogin(data: LoginTypes) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}
