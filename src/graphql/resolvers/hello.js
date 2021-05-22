const queries = {
  hello: (_, { name }) => `Hello ${name || 'World'}`,
}

const resolver = {
  queries,
}

export default resolver
