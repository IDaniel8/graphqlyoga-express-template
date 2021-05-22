import colors from 'colors'
import figures from 'figures'

function loggerSuccess(message = 'success') {
  // eslint-disable-next-line no-console
  console.log(colors.green(figures.main.tick), colors.bgGreen(message))
}

function loggerInfo(message = 'blue') {
  // eslint-disable-next-line no-console
  console.log(colors.blue(figures.main.info), colors.bgBlue(message))
}

function loggerError(message = 'error') {
  // eslint-disable-next-line no-console
  console.log(colors.red(figures.main.cross), colors.bgRed(message))
}

function loggerWarning(message = 'warning') {
  // eslint-disable-next-line no-console
  console.log(colors.yellow(figures.main.warning), colors.bgYellow(message))
}

export { loggerSuccess, loggerInfo, loggerWarning, loggerError }
