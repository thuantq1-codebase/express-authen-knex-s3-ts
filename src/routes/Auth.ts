import bcrypt from 'bcrypt'
import { Request, Response, Router } from 'express'
import StatusCodes from 'http-status-codes'

import UserDao from '@daos/User/UserDao.mock'
import { JwtService } from '@shared/JwtService'
import {
  paramMissingError,
  loginFailedErr,
  cookieProps,
} from '@shared/constants'
import { validationMW } from '@routes/middleware'
import * as yup from 'yup'

const router = Router()
const userDao = new UserDao()
const jwtService = new JwtService()
const { BAD_REQUEST, OK, UNAUTHORIZED } = StatusCodes

interface IRequest extends Request {
  body: {
    email: string
    password: string
  }
}

router.post(
  '/login',
  validationMW({
    password: yup.string().min(6),
  }),
  async (req: IRequest, res: Response) => {
    const { email, password } = req.body
    if (!(email && password)) {
      return res.status(BAD_REQUEST).json({
        error: paramMissingError,
      })
    }
    const user = await userDao.getOne(email)
    if (!user) {
      return res.status(UNAUTHORIZED).json({
        error: loginFailedErr,
      })
    }
    const pwdPassed = await bcrypt.compare(password, user.pwdHash)
    if (!pwdPassed) {
      return res.status(UNAUTHORIZED).json({
        error: loginFailedErr,
      })
    }
    const jwt = await jwtService.getJwt({
      id: user.id,
      role: user.role,
    })
    const { key, options } = cookieProps
    res.cookie(key, jwt, options)
    return res.status(OK).end()
  },
)

router.get('/logout', (req: Request, res: Response) => {
  const { key, options } = cookieProps
  res.clearCookie(key, options)
  return res.status(OK).end()
})

export default router
