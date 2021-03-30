import StatusCodes from 'http-status-codes'
import { Request, Response, Router } from 'express'
import { IUser } from '@entities/User'
import UserDao from '@daos/User/UserDao.mock'
import { paramMissingError } from '@shared/constants'

const router = Router()
const userDao = new UserDao()
const { BAD_REQUEST, CREATED, OK } = StatusCodes

interface IRequest extends Request {
  body: {
    user: IUser
  }
}

router.get('/all', async (req: Request, res: Response) => {
  const users = await userDao.getAll()
  return res.status(OK).json({ users })
})

router.post('/add', async (req: IRequest, res: Response) => {
  const { user } = req.body
  if (!user) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    })
  }
  await userDao.add(user)
  return res.status(CREATED).end()
})

router.put('/update', async (req: IRequest, res: Response) => {
  const { user } = req.body
  if (!user) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    })
  }
  user.id = Number(user.id)
  await userDao.update(user)
  return res.status(OK).end()
})

router.delete('/delete/:id', async (req: IRequest, res: Response) => {
  const { id } = req.params
  await userDao.delete(Number(id))
  return res.status(OK).end()
})

export default router
