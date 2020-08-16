import Book from './book';

const types = `
  ${Book}

  type Query {
    ping: String!
    books: [Book!]
  }
`;

export default types;
