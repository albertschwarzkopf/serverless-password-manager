export default {
  MAX_ATTACHMENT_SIZE: 5000000,
//  s3: {
//    REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
//    BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
//  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://pvb5sixrse.execute-api.eu-west-1.amazonaws.com/dev/password"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_RnmsDjToO",
    APP_CLIENT_ID: "5i27u6648h586n81uod3dbvda",
    IDENTITY_POOL_ID: "eu-west-1:fa537323-dc18-4924-a173-0c05d6ab70c5"
  }
};
