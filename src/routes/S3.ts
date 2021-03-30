import { Router, Request, Response } from 'express'
import S3Service from '@shared/S3Service'
import { StatusCodes } from 'http-status-codes'
import { paramMissingError } from '@shared/constants'

const router = Router()
const s3Service = new S3Service()
const { BAD_REQUEST, OK } = StatusCodes

router.post('/getUploadUrl', async (req: Request, res: Response) => {
  const { filename, subPath } = req.body
  if (!filename || !subPath) {
    res.status(BAD_REQUEST).json({
      error: paramMissingError,
    })
  }

  const url = await s3Service.getPutObjectUrl(filename, subPath)
  return res.status(OK).json({ url })
})

export default router
