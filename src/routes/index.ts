import { Router } from 'express'
import { adminMW } from '@routes/middleware'
import AuthRouter from '@routes/Auth'
import UserRouter from '@routes/Users'
import S3Router from '@routes/S3'

const router = Router()

router.use('/auth', AuthRouter)
router.use('/users', adminMW, UserRouter)
router.use('/s3', adminMW, S3Router)

export default router
