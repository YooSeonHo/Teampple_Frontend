


export const config = {
    region : process.env.REACT_APP_REGION as string,
    accessKeyId : process.env.REACT_APP_S3_ACCESSKEY as string,
    secretAccessKey : process.env.REACT_APP_S3_SECRETKEY as string,
    bucketName : process.env.REACT_APP_S3_BUCKETNAME as string,
    dirName : 'detailTest',
}

//dirName부분 팀 아이디랑 테스크 아이디 나오면 경로 지정 하면 될 듯.