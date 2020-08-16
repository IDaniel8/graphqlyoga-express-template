import ModelConstants from '@utils/modelConstants';
import {books, authors} from '@database/mocks';

const BookType = `
  type ${ModelConstants.BOOK} {
    id: ID!
    title: String!
    author: ${ModelConstants.AUTHOR}!
  }
`;

const BookQuery = {
  books() {
    return books;
  }
};

const BookMutation = {};

const BookRelations = {
  author(parent) {
    return authors.find((a) => a.id === parent.author);
  }
};

export {BookType, BookQuery, BookMutation, BookRelations};
