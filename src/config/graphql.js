import {GeneralConstants} from '@utils/constants';

const graphqlConfig = {
  port: 3000,
  endpoint: (process.env.NODE_ENV === GeneralConstants.DEVELOPMENT && '/') || '/api',
  playground: (process.env.NODE_ENV === GeneralConstants.DEVELOPMENT && '/graphql') || false
};

export default graphqlConfig;
