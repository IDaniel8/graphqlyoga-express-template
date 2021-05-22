import helloResolver from './hello'
import pingResolver from './ping'

export const rootResolver = {
  Query: {
    ...helloResolver.queries,
    ...pingResolver.queries,
  },
}
