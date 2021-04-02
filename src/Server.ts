import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import StatusCodes from 'http-status-codes'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import 'express-async-errors'
import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'

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
  const originPorts = process.env.ORIGIN_PORT?.split(',')
  const origin = originPorts?.map(
    (originPort) => `http://localhost:${originPort}`,
  )
  app.use(cors({ credentials: true, origin }))
}

if (process.env.NODE_ENV === 'production') {
  app.use(helmet())
}

if (process.env.SENTRY_DNS) {
  Sentry.init({
    dsn: process.env.SENTRY_DNS,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Tracing.Integrations.Express({ app }),
    ],
    tracesSampleRate: 1.0,
  })
  app.use(Sentry.Handlers.requestHandler())
  app.use(Sentry.Handlers.tracingHandler())
}

app.use('/api', BaseRouter)

if (process.env.SENTRY_DNS) {
  app.use(Sentry.Handlers.errorHandler())
}
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.err(err, true)
  return res.status(BAD_REQUEST).json({
    error: err.message,
  })
})

export default app
