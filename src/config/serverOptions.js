function serverOptions(isProductionEnv) {
  /** @type {import('graphql-yoga').Options} */
  const options = {
    playground: isProductionEnv ? false : '/',
  }

  return options
}

export { serverOptions }
