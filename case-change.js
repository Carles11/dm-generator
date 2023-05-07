const fs = require('fs')
const path = require('path')
const changeCase = require('change-case')

const rootDir = path.resolve(__dirname, './') // root directory of your application

function shouldChangeCase(file) {
  const ignoreList = [
    '.git',
    '.gitignore',
    '.npmignore',
    '.DS_Store',
    '.png',
    'out',
    'node_modules',
    'docs',
  ]
  const imageExtensions = ['.jpg', '.jpeg', '.gif', '.svg', '.ico']
  const extension = path.extname(file)
  return (
    !file.startsWith('.') &&
    !ignoreList.includes(extension) &&
    !imageExtensions.includes(extension)
  )
}

function renameFile(filePath) {
  const parentDir = path.dirname(filePath)
  const fileName = path.basename(filePath)
  const pascalCaseFileName = changeCase.pascalCase(fileName)
  const newPath = path.join(parentDir, pascalCaseFileName)

  fs.renameSync(filePath, newPath)
}

function traverseDirectory(dir) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory() && shouldChangeCase(file) && !file.startsWith('.')) {
      renameFile(filePath)
      traverseDirectory(filePath)
    } else if (stat.isFile() && shouldChangeCase(file) && dir !== rootDir) {
      const extension = path.extname(file)
      if (
        extension === '.js' ||
        extension === '.ts' ||
        extension === '.tsx' ||
        extension === '.css'
      ) {
        renameFile(filePath)
      }
    }
  })
}

traverseDirectory(rootDir)
