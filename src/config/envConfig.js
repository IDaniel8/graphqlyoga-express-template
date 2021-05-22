import { config } from 'dotenv-safe'

function envConfig() {
  config({
    example: '.env',
  })
}

export { envConfig }
