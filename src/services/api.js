import axios from 'axios';

const pipedriveApi = axios.create({
  baseURL: 'https://estudo-sandbox.pipedrive.com/v1',
});

const blingApi = axios.create({
  baseURL: 'https://bling.com.br/Api/v2',
});


export { pipedriveApi, blingApi };
