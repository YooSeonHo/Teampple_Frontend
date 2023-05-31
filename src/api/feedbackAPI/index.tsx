import axios from "axios";
import { baseURL } from 'api/client';
const token = localStorage.getItem('jwt_accessToken');


export default {
    post : async(taskId : number,addFeed : string) => {
    if (addFeed.trim() === '') {
        alert('댓글 내용을 입력해주세요.');
      }
    else {
        await axios({
        url: '/api/feedbacks',
        baseURL: baseURL,
        method: 'post',
        headers: {
          Authorization: token,
        },
        params: {
          taskId: taskId,
        },
        data: { comment: addFeed },
      })}
    },
    delete : async (feedId : number) => await axios({
        url: '/api/feedbacks',
        baseURL: baseURL,
        method: 'delete',
        headers: {
          Authorization: token,
        },
        params: { feedbackId: feedId },
      })
};