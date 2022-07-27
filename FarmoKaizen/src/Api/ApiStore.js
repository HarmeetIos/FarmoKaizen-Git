import axios from 'axios';
// import https from 'https'
// import RNFetchBlob from 'rn-fetch-blob';
import {BASE_URL} from '../EndPoints';

const ApiStore = axios.create({
  baseURL: BASE_URL,
});

export {ApiStore};
