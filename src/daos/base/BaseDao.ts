import Knex from 'knex'
import knex from './knexWrapper'

interface IBaseDao<T> {
  getBuilder(): Knex.QueryBuilder
}

export default abstract class BaseDao<T> implements IBaseDao<T> {
  protected abstract getSchema(): string
  protected abstract getTableName(): string
  getBuilder(): Knex.QueryBuilder {
    return knex<T>(this.getSchema()).withSchema(this.getSchema())
  }
}
