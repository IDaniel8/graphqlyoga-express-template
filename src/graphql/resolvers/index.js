import {BookQuery} from './book';

const resolvers = {
  Query: {
    ...BookQuery,
    ping() {
      return 'pong!';
    }
  }
};

export default resolvers;
