import { config } from 'dotenv-safe'

function verifyEnvConfig() {
  config({
    example: '.env',
  })
}

export { verifyEnvConfig }
