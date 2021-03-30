import BaseDao from '@daos/base/BaseDao'
import { IUser } from '@entities/User'

export interface IUserDao {
  getOne: (email: string) => Promise<IUser | null>
  getAll: () => Promise<IUser[]>
  add: (user: IUser) => Promise<void>
  update: (user: IUser) => Promise<void>
  delete: (id: number) => Promise<void>
}

class UserDao extends BaseDao<IUser> implements IUserDao {
  protected getSchema() {
    return 'public'
  }

  protected getTableName() {
    return 'users'
  }

  public getOne(email: string): Promise<IUser | null> {
    return Promise.resolve(null)
  }

  public getAll(): Promise<IUser[]> {
    return Promise.resolve([])
  }

  public async add(user: IUser): Promise<void> {
    return Promise.resolve(undefined)
  }

  public async update(user: IUser): Promise<void> {
    return Promise.resolve(undefined)
  }

  public async delete(id: number): Promise<void> {
    return Promise.resolve(undefined)
  }
}

export default UserDao
