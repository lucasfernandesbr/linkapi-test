import axios from 'axios';

const pipedriveApi = axios.create({
  baseURL: 'https://estudo-sandbox.pipedrive.com/v1',
});

export default pipedriveApi;
