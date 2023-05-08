import inquirer from 'inquirer'
import { writeFile } from 'fs'
import { promisify } from 'util'
import { prompts } from './utils/prompts.js'
import { generateMarkdown } from './utils/generateMarkdown.js'
import { licenseMap } from './utils/licenseMap.js'
import * as licenses from './licenses/index.js'

const writeFileAsync = promisify(writeFile)

const init = async () => {
  try {
    const data = await inquirer.prompt(prompts)

    await writeFileAsync('./dist/README.md', generateMarkdown(data))

    await writeFileAsync(
      './dist/LICENSE',
      licenses[licenseMap[data.license]](data)
    )
  } catch (err) {
    console.error(err)
  }
}

init()
