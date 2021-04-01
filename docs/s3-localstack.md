# Localstack

```bash
aws --endpoint-url=http://localhost:4566 s3 mb s3://${BUCKET_NAME}
aws --endpoint-url=http://localhost:4566 s3api put-bucket-acl --bucket ${BUCKET_NAME} --acl public-read
```
