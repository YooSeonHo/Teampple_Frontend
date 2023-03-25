import axios from "axios";
import { baseURL } from 'api/client';
const token = localStorage.getItem('jwt_accessToken');

export default {
    postCreate : async (idToken : string,kakaoAccessToken : string,kakaoRefreshToken : string,
        name: string, school : string, major : string, randomNum : number ) =>await axios({
        url: `/api/auth/info`,
        baseURL: baseURL,
        method: 'post',
        data: {
          idToken: idToken,
          // idToken: 'kakaoU17233456', //test
          oauthAccessToken: kakaoAccessToken,
          oauthRefreshToken: kakaoRefreshToken,
          name: name,
          schoolName: school,
          major: major,
          profileImage: `proImageU${randomNum}`,
        },
      }),
    
    postRetoken : async () =>axios({
        url: '/api/auth/reIssuance',
        baseURL: baseURL,
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('jwt_accessToken'),
        },
        data: {
          jwtAccessToken: localStorage.getItem('jwt_accessToken'),
          jwtRefreshToken: localStorage.getItem('jwt_refreshToken'),
        },
      }),

    postLogout : async() => await axios({
        url: `/api/auth/logout`,
        baseURL: baseURL,
        method: 'post',
        headers: {
          Authorization: token,
        },
        data: {
          jwtAccessToken: localStorage.getItem('jwt_accessToken'),
          jwtRefreshToken: localStorage.getItem('jwt_refreshToken'),
        },
      }),

}