# Deployment

## Prerequisites

1. Must have a account AWS

## Initilization

1. Create a S3 Bucket

Go to S3 AWS and then create a bucket as ${S3_BUCKET}

and finally execute following command.

```bash
cd /path/to/project/src/pre-start/env
vi [test|production].env
S3_BUCKET=${S3_BUCKET}
```

2. Create database
