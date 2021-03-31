import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import StatusCodes from 'http-status-codes'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import 'express-async-errors'

import BaseRouter from './routes'
import logger from '@shared/Logger'
import { cookieProps } from '@shared/constants'

const app = express()
const { BAD_REQUEST } = StatusCodes

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(cookieProps.secret))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
  app.use(cors({
    credentials: true,
    origin: [
      'http://localhost:3000'
    ]
  }))
}

if (process.env.NODE_ENV === 'production') {
  app.use(helmet())
}

app.use('/api', BaseRouter)

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.err(err, true)
  return res.status(BAD_REQUEST).json({
    error: err.message,
  })
})

export default app
