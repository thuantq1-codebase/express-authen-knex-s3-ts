import { S3 } from 'aws-sdk'
import { getTimestamp } from '@shared/functions'

enum SignedUrlOperation {
  getObject = 'getObject',
  putObject = 'putObject',
}

export default class S3Service {
  private readonly bucket: string
  private readonly path: string
  private readonly copyPath: string

  constructor() {
    this.bucket = process.env.S3_BUCKET ?? ''
    this.path = process.env.S3_PATH ?? ''
    this.copyPath = process.env.S3_COPY_PATH ?? ''
  }

  public getPutObjectUrl(filename: string, secondPath: string): Promise<string> {
    return this.getObjectUrl(filename, secondPath, SignedUrlOperation.putObject)
  }

  public getDownloadObjectUrl(filename: string, secondPath: string): Promise<string> {
    return this.getObjectUrl(filename, secondPath, SignedUrlOperation.getObject)
  }

  private getObjectUrl(
    filename: string,
    secondPath: string,
    type: SignedUrlOperation,
  ): Promise<string> {
    const params = {
      Bucket: this.bucket,
      Key: [this.path, secondPath, this.formatFileNameWithTimestamp(filename)].join('/'),
      Expires: Number(process.env.SIGNED_URL_EXPIRE_SECONDS),
      ACL: 'public-read',
    }
    return new Promise((resolve, reject) => {
      new S3().getSignedUrl(type, params, (err, url) => {
        err ? reject(err) : resolve(url)
      })
    })
  }

  public copy(filename: string, secondPath: string): Promise<null> {
    const fileNameWithTimestamp = this.formatFileNameWithTimestamp(filename)
    return new Promise((resolve, reject) => {
      new S3().copyObject(
        {
          Bucket: this.bucket,
          CopySource: [this.path, secondPath, fileNameWithTimestamp].join('/'),
          Key: [this.copyPath, secondPath, fileNameWithTimestamp].join('/'),
        },
        (err) => {
          err ? reject(err) : resolve(null)
        },
      )
    })
  }

  public delete(filename: string, secondPath: string): Promise<null> {
    return new Promise((resolve, reject) => {
      new S3().deleteObject(
        {
          Bucket: this.bucket,
          Key: [this.path, secondPath, this.formatFileNameWithTimestamp(filename)].join('/'),
        },
        (err) => {
          err ? reject(err) : resolve(null)
        },
      )
    })
  }

  private formatFileNameWithTimestamp(filename: string): string {
    return [filename, getTimestamp()].join('_')
  }
}
