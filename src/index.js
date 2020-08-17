/* eslint-disable no-console */
import {GraphQLServer} from 'graphql-yoga';
import {config} from 'dotenv-safe';

import graphqlConfig from '@config/graphql';
import {typeDefs, resolvers} from '@graphql';
import {GeneralConstants} from '@utils/constants';

config({
  example: '.env'
});

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(graphqlConfig, ({port}) => {
  if (process.env.NODE_ENV === GeneralConstants.PRODUCTION) {
    console.log('Server listening', `http://localhost:${port}/api`);
  } else {
    console.log('Server listening', `http://localhost:${port} with playground in /graphql`);
  }
});
