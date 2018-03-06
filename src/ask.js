const prompts = require('prompts')

module.exports = async function ask () {
  const result = await prompts({
    type: 'toggle',
    name: 'value',
    message: 'Are you sure?',
    initial: true,
    active: 'Yes',
    inactive: 'No'
  })

  return result
}
