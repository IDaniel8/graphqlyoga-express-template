import ModelConstants from '@utils/modelConstants';

import {BookType, BookQuery, BookRelations} from './book';
import {AuthorType, AuthorQuery, AuthorRelations} from './author';

const typeDefs = `
  type Query {
    ping: String!
    books: [${ModelConstants.BOOK}!]
    authors: [${ModelConstants.AUTHOR}!]
  }
  ${BookType}
  ${AuthorType}
`;

const resolvers = {
  Query: {
    ping() {
      return 'pong!';
    },
    ...BookQuery,
    ...AuthorQuery
  },
  [ModelConstants.BOOK]: BookRelations,
  [ModelConstants.AUTHOR]: AuthorRelations
};

export {typeDefs, resolvers};
