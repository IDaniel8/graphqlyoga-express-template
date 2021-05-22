import { addResolversToSchema } from '@graphql-tools/schema'
import { rootResolver } from '@graphql/resolvers'
import { rootSchema } from '@graphql/schema'

export const combinedResolversToSchema = addResolversToSchema({
  schema: rootSchema,
  resolvers: rootResolver,
})
