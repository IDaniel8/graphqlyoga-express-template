import path from 'path'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'

const rootSchema = loadSchemaSync(path.resolve(__dirname, '../typedefs/**/*.schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
})

export { rootSchema }
