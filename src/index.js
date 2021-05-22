import { GraphQLServer } from 'graphql-yoga'
import { envConfig, helmetConfig, serverOptions } from '@config'
import { combinedResolversToSchema } from '@graphql/combinedResolversToSchema'
import { loggerSuccess, loggerError } from '@utils/logger'
import { isProductionEnv } from '@utils/constants'

envConfig()

const server = new GraphQLServer({
  schema: combinedResolversToSchema,
})

server.express.use(helmetConfig(isProductionEnv))

server
  .start(serverOptions(isProductionEnv))
  .then(() => {
    loggerSuccess('Server is running on localhost:4000')
  })
  .catch(error => {
    loggerError('Opps an error has ocurred...')
    // eslint-disable-next-line no-console
    console.log(error)
  })
