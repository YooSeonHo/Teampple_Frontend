import axios from "axios";
import { baseURL } from 'api/client';
import { modTeampleInfo } from "interfaces/teamType";
const token = localStorage.getItem('jwt_accessToken');

export default {
    get : async (teamid : number) => await axios({
        url: '/api/stages',
        baseURL: baseURL,
        method: 'get',
        headers: {
          Authorization: token,
        },
        params: {
          teamId: teamid,
        },
      }),
    put : async (modTeample : modTeampleInfo, teamid : number) =>
    await axios({
        url: '/api/stages',
        baseURL: baseURL,
        method: 'put',
        headers: {
          Authorization: token,
        },
        data: modTeample,
        params: {
          teamId: teamid,
        },
      })
}