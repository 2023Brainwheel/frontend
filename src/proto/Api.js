// Api.js

import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://www.codinghhs.tech:5000', // 백엔드 서버의 기본 URL
  // 다른 옵션들을 필요에 따라 설정
});

export default Api;
