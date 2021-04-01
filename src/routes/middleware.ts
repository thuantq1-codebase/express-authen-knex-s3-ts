import StatusCodes from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'
import * as yup from 'yup'

import { UserRoles } from '@entities/User'
import { cookieProps } from '@shared/constants'
import { JwtService } from '@shared/JwtService'
import { ObjectShape } from 'yup/lib/object'

const jwtService = new JwtService()
const { UNAUTHORIZED, BAD_REQUEST } = StatusCodes

export const adminMW = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const jwt = req.signedCookies[cookieProps.key]
    if (!jwt) {
      throw Error('JWT not present in signed cookie.')
    }
    const clientData = await jwtService.decodeJwt(jwt)
    if (clientData.role === UserRoles.Admin) {
      res.locals.userId = clientData.id
      next()
    } else {
      throw Error('JWT not present in signed cookie.')
    }
  } catch (err) {
    return res.status(UNAUTHORIZED).json({
      error: err.message,
    })
  }
}

export const validationMW = (
  shape: ObjectShape,
  path: keyof Request = 'body',
) => async (req: Request, res: Response, next: NextFunction) => {
  const schema = yup.object().shape(shape)
  try {
    await schema.validate(req[path])
    return next()
  } catch (err) {
    res.status(BAD_REQUEST).json({ error: err.message })
  }
}
