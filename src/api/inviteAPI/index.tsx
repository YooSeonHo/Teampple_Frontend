import axios from "axios";
import { baseURL } from 'api/client';
const token = localStorage.getItem('jwt_accessToken');

export default {

    getInvite : async (teamid : number) => await axios({
        url: '/api/invitations',
        baseURL: baseURL,
        method: 'get',
        params: { teamId: teamid },
        headers: {
          Authorization: token,
        },
      }),

    postInvite : async(code : string | null)=> await axios({
        url: `/api/invitations`,
        baseURL: baseURL,
        method: 'post',
        params: {
          code: code,
        },
        headers: {
          Authorization: location.search.split('=')[1].split('&')[0],
        },
      }),

      handleValidation : async (code : string) => await axios({
        url: `/api/invitations/validation`,
        baseURL: baseURL,
        method: 'get',
        params: {
          code: code,
        },
      })

}