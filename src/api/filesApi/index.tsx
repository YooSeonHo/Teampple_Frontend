import axios from "axios";
import { baseURL } from 'api/client';
const token = localStorage.getItem('jwt_accessToken');
import { teamidState, taskIdState } from "state";

export default{
    getFiles : async (teamid : number) => await axios({
        url: `/api/files`,
        baseURL: baseURL,
        method: 'get',
        headers: {
          Authorization: token,
        },
        params: {
          teamId: teamid,
        },
      }),

    postFile : async (fileName : string | undefined,size : number| undefined, fileLoc : string,taskId :number,teamid : number) => 
      await axios({
        url: `/api/files`,
        baseURL: baseURL,
        method: 'post',
        data: {
          fileName: fileName,
          size: size,
          key: fileLoc,
        },
        params: {
          taskId: taskId,
          teamId: teamid,
        },
        headers: {
          Authorization: token,
        },
      }),

    delFileAPI : async (fileId: number) =>
       await axios({
          baseURL: baseURL,
          url: 'api/files',
          method: 'delete',
          headers: {
            Authorization: token,
          },
          params: { fileId: fileId },
        }),
};