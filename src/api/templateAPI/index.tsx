import axios from "axios";
import { baseURL } from 'api/client';
const token = localStorage.getItem('jwt_accessToken');

export default{
    get : async () => await axios({
        url: `/api/templates`,
        baseURL: baseURL,
        method: 'get',
        headers: {
          Authorization: token,
        },
      })
}