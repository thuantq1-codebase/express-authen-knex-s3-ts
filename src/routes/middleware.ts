import StatusCodes from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'

import { UserRoles } from '@entities/User'
import { cookieProps } from '@shared/constants'
import { JwtService } from '@shared/JwtService'

const jwtService = new JwtService()
const { UNAUTHORIZED } = StatusCodes

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
