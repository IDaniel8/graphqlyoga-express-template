import {GraphQLServer} from 'graphql-yoga';
import {config} from 'dotenv-safe';

import {typeDefs, resolvers} from '@graphql';

config({
  example: '.env'
});

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start({port: 3000}, ({port}) => {
  // eslint-disable-next-line no-console
  console.log('Server is running', port);
});
