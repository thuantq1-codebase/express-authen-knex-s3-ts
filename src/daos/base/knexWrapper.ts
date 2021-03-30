import Knex from 'knex'
const knexConfig = require('../../../knexfile')

const knexMaster = Knex(knexConfig)
const KnexSlave = Knex({
  ...knexConfig,
  connection: {
    ...knexConfig.connection,
    host: `${process.env.DB_SLAVE_HOST}`,
  },
})

const knexWrapper = Knex({
  ...knexConfig,
})

knexWrapper.client.runner = function (builder: any) {
  if (builder._queryContext) {
    if (builder._queryContext.useMaster === true) {
      return knexMaster.client.runner(builder)
    }
    return KnexSlave.client.runner(builder)
  }

  const sql = builder.toSQL()
  const useMaster = Array.isArray(sql)
    ? doMethodsRequireWritePermission(sql)
    : doesMethodRequireWritePermission(sql)
  return useMaster
    ? knexMaster.client.runner(builder)
    : KnexSlave.client.runner(builder)
}

const doMethodsRequireWritePermission = (arr: any) => {
  arr.forEach((item: any) => {
    return doesMethodRequireWritePermission(item)
  })
}

const doesMethodRequireWritePermission = (obj: any) => {
  return ['insert', 'del', 'update'].includes(obj.method)
}

export default knexWrapper
