const pkg = require('../package.json')
const program = require('commander')
const main = require('./main')

program
  .version(pkg.version)
  .usage('file')
  .action(handleCommand)
  .parse(process.argv)

async function handleCommand (path, command) {
  main(path)
}
