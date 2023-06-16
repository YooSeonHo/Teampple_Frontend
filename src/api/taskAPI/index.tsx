import axios from "axios";
import { baseURL } from 'api/client';
import moment from "moment";
const token = localStorage.getItem('jwt_accessToken');


export default {
    get: async (taskId : number) => await axios({
        url: `/api/tasks`,
        baseURL: baseURL,
        method: 'get',
        params: {
          taskId: taskId,
        },
        headers: {
          Authorization: token,
        },
      }),

    post : async (stageId : number,name : string,checkedIdList : number[],startDate : Date,endDate : Date) => await axios({
        url: `/api/tasks`,
        baseURL: baseURL,
        method: 'post',
        headers: {
          Authorization: token,
        },
        data: {
          dueDate: (
            moment(endDate, 'YYYYMMDD').format('YYYY-MM-DD') +
            'T' +
            '00:00:00'
          ).toString(),
          name: name,
          operators: checkedIdList,
          startDate: (
            moment(startDate, 'YYYYMMDD').format('YYYY-MM-DD') +
            'T' +
            '00:00:00'
          ).toString(),
        },
        params: { stageId: stageId },
      }),

    put : async (taskId : number,name : string,checkedIdList : number[],startDate : Date,endDate : Date) => await axios({
        url: `/api/tasks`,
        baseURL: baseURL,
        method: 'put',
        headers: {
          Authorization: token,
        },
        data: {
          dueDate: (
            moment(endDate, 'YYYYMMDDTT').format('YYYY-MM-DD') +
            'T' +
            '00:00:00'
          ).toString(),
          name: name,
          operators: checkedIdList,
          startDate: (
            moment(startDate, 'YYYYMMDD').format('YYYY-MM-DD') +
            'T' +
            '00:00:00'
          ).toString(),
        },
        params: { taskId: taskId },
    }),
    delete : async (taskId : number) => await axios({
        baseURL: baseURL,
        url: 'api/tasks',
        method: 'delete',
        headers: {
          Authorization: token,
        },
        params: { taskId: taskId },
      }),
    toggle : async (taskId : number) => await axios({
        url: '/api/tasks/status',
        baseURL: baseURL,
        method: 'post',
        headers: {
          Authorization: token,
        },
        params: { taskId: taskId },
      })
};