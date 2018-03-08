const fs = require('fs')
const ask = require('./ask')

function getFuckLetter (index = 0) {
  const FuckYourCode = 'FuckYourCode'

  return FuckYourCode[index % FuckYourCode.length]
}

function fuckIt (str) {
  let newStr = ''

  for (let index = 0; index < str.length; index++) {
    const oldStr = str[index]

    if ('\n'.includes(oldStr)) {
      newStr += oldStr
    } else {
      newStr += getFuckLetter(index)
    }
  }

  return newStr
}

module.exports = async function main (path) {
  const res = await ask()

  if (res.value) {
    const isDir = fs.lstatSync(path).isDirectory()

    if (isDir) {
      throw new Error('todo: fuck directory 🚧')
    }

    const file = fs.readFileSync(path, 'utf-8')
    const newFileContent = fuckIt(file)

    fs.unlinkSync(path)
    fs.writeFileSync(path, newFileContent)
  }
}
