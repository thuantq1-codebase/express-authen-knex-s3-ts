import AWS from 'aws-sdk'

if (process.env.NODE_ENV !== 'production') {
  const credentials = new AWS.SharedIniFileCredentials({ profile: 'default' })
  AWS.config.credentials = credentials
  AWS.config.update({ region: process.env.S3_REGION ?? 'ap-northeast-1' })
}
