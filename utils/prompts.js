const licenseList = [
  'MIT License',
  'Apache License 2.0',
  'GNU AGPLv3',
  'GNU GPLv3',
  'The Unlicense',
]

export const prompts = [
  { type: 'input', message: 'full name', name: 'fullName' },
  { type: 'input', message: 'project title', name: 'title' },
  { type: 'input', message: 'project description', name: 'description' },
  { type: 'list', name: 'license', choices: licenseList },
]
