import { Knex } from 'knex'
import knex from './knexWrapper'

interface IBaseDao<T> {
  getBuilder(): Knex.QueryBuilder<T>
}

export default abstract class BaseDao<T> implements IBaseDao<T> {
  protected abstract getSchema(): string
  protected abstract getTableName(): string
  getBuilder(): Knex.QueryBuilder<T> {
    return knex<T>(this.getSchema()).withSchema(this.getSchema())
  }
}
