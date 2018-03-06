require('v8-compile-cache')

const pkg = require('../package.json')
const program = require('commander')
const main = require('./main')

program
  .version(pkg.version)
  .command('fyc [input]')
  .action(handleCommand)

const args = process.argv
if (!args[2] || !program.commands.some(c => c.name() === args[2])) {
  args.splice(2, 0, 'fuck')
}

program.parse(args)

async function handleCommand (path, command) {
  main(path)
}
