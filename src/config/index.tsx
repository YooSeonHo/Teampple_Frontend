
export const config = {
    region : process.env.REACT_APP_REGION as string,
    accessKeyId : process.env.REACT_APP_S3_ACCESSKEY as string,
    secretAccessKey : process.env.REACT_APP_S3_SECRETKEY as string,
    bucketName : process.env.REACT_APP_S3_BUCKETNAME as string,
    dirName : 'test',
}