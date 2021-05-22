import helmet from 'helmet'

function helmetConfig(isProductionEnv) {
  return helmet({ contentSecurityPolicy: isProductionEnv ? undefined : false })
}

export { helmetConfig }
