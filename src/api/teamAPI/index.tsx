import axios from "axios";
import { baseURL } from 'api/client';
import { makeTeampleInfo } from "interfaces";
const token = localStorage.getItem('jwt_accessToken');
import moment from "moment";

export default {
    get : async (teamid : number) => await axios({
        url: `/api/teams`,
        baseURL: baseURL,
        method: 'get',
        params: { teamId: teamid },
        headers: {
          Authorization: token,
        },
      }),

    post : async (makeTeample : makeTeampleInfo) => await axios({
        url: '/api/teams',
        baseURL: baseURL,
        method: 'post',
        headers: {
          Authorization: token,
        },
        data: makeTeample,
      }),

    put : async (startDate : Date, endDate : Date, name : string, aim : string, teamid : number) => await axios({
        url: `/api/teams`,
        baseURL: baseURL,
        method: 'put',
        headers: {
          Authorization: token,
        },
        data: {
          dueDate: (
            moment(endDate, 'YYYYMMDD').format('YYYY-MM-DD') +
            'T' +
            '00:00:00'
          ).toString(),
          startDate: (
            moment(startDate, 'YYYYMMDD').format('YYYY-MM-DD') +
            'T' +
            '00:00:00'
          ).toString(),
          name: name,
          goal: aim,
        },
        params: {
          teamId: teamid,
        },
      }),

    delete : async (teamid : number) => await axios({
        baseURL: baseURL,
        url: 'api/teams',
        method: 'delete',
        headers: {
          Authorization: token,
        },
        params: { teamId: teamid },
      }),

    getTask : async (teamid : number) => await axios({
        url: `/api/teams/tasks`,
        baseURL: baseURL,
        method: 'get',
        headers: {
          Authorization: token,
        },
        params: { teamId: teamid },
      }),

      getSch : async (teamid : number) => await axios({
        url: `/api/teams/schedules`,
        baseURL: baseURL,
        method: 'get',
        headers: {
          Authorization: token,
        },
        params: { teamId: teamid },
      }),

      postSch : async (pickedDate : Date, time : string, name : string, teamid : number)=>await axios({
        url: `/api/teams/schedules`,
        baseURL: baseURL,
        method: 'post',
        headers: {
          Authorization: token,
        },
        data: {
          dueDate: (
            moment(pickedDate, 'YYYYMMDD').format('YYYY-MM-DD') +
            'T' +
            time +
            ':00'
          ).toString(),
          name: name,
        },
        params: {
          teamId: teamid,
        },
      }),

      getTeamMate : async(teamid : number) => await axios({
        url: `/api/teams/teammates`,
        baseURL: baseURL,
        method: 'get',
        params: { teamId: teamid },
        headers: {
          Authorization: token,
        },
      }),

      
}