import ModelConstants from '@utils/modelConstants';
import {books, authors} from '@database/mocks';

const AuthorType = `
  type ${ModelConstants.AUTHOR} {
    id: ID!
    name: String!
    books: [${ModelConstants.BOOK}!]!
  }
`;

const AuthorQuery = {
  authors() {
    return authors;
  }
};

const AuthorMutation = {};

const AuthorRelations = {
  books(parent) {
    return books.filter((b) => b.author === parent.id);
  }
};

export {AuthorType, AuthorQuery, AuthorMutation, AuthorRelations};
