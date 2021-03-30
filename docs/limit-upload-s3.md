# Amazon S3 upload limits

There are three methods to upload to S3.

- Method1: Upload an object in a single operation using the AWS SDKs, REST API, or AWS CLI—With a single PUT operation, you can upload a single object up to 5 GB in size.

- Method2: Upload a single object using the Amazon S3 Console—With the Amazon S3 Console, you can upload a single object up to 160 GB in size.

- Method3: Upload an object in parts using the AWS SDKs, REST API, or AWS CLI—Using the multipart upload API, you can upload a single large object, up to 5 TB in size.

Currently, we're using method1.
