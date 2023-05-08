import { licenseList } from './licenseHelpers'

export const prompts = [
  { type: 'input', message: 'full name', name: 'fullName' },
  { type: 'input', message: 'project title', name: 'title' },
  { type: 'input', message: 'project description', name: 'description' },
  { type: 'list', name: 'license', choices: licenseList },
]
