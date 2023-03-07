import axios from "axios";
import { baseURL } from 'api/client';
const token = localStorage.getItem('jwt_accessToken');
import { teamidState, taskIdState } from "state";
import { FileInfo } from "interfaces";

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
    postFile : async (file : File,fileLoc : string,taskId : typeof taskIdState,teamid : typeof teamidState) => 
      await axios({
        url: `/api/files`,
        baseURL: baseURL,
        method: 'post',
        data: {
          fileName: file?.name,
          size: file?.size,
          url: fileLoc,
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