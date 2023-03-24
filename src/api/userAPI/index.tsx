import axios from "axios";
import { baseURL } from 'api/client';
const token = localStorage.getItem('jwt_accessToken');

export default{
    getFeedback : async () => await axios({
        url: `/api/users/feedbacks`,
        baseURL: baseURL,
        method: 'get',
        headers: {
          Authorization: token,
        },
      }),
    getUserProfile : async () => await axios({
        baseURL: baseURL,
        url: 'api/users/userprofiles',
        method: 'get',
        headers: {
          Authorization: token,
        },
      }),
    putUserProfile : async (major : string, school : string, email : string, name : string) => await axios({
        url: `api/users/userprofiles`,
        baseURL: baseURL,
        method: 'put',
        headers: {
          Authorization: token,
        },
        data: {
          major: major,
          schoolName: school,
          email: email,
          name: name,
        },
      }),
    getActTeams : async () => await axios({
        url: `/api/users/teams`,
        baseURL: baseURL,
        method: 'get',
        headers: {
          Authorization: token,
        },
        params: { active: 1 },
      }),
    getFinTeams : async () => await axios({
        url: `/api/users/teams`,
        baseURL: baseURL,
        method: 'get',
        headers: {
          Authorization: token,
        },
        params: { active: 0 },
      }),
    getTask : async () => await axios({
        url: `/api/users/tasks`,
        baseURL: baseURL,
        method: 'get',
        headers: {
          Authorization: token,
        },
      }),
      
};