// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT License')
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  else if(license === 'GNU GPLv3')
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  else if(license === 'Mozilla Public License 2.0')
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  else if (license === 'Apache License 2.0')
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  else 
    return ``;
}

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT License')
    return `https://opensource.org/licenses/MIT`;
  else if(license === 'GNU GPLv3')
    return `https://www.gnu.org/licenses/gpl-3.0`;
  else if(license === 'Mozilla Public License 2.0')
    return `https://opensource.org/licenses/MPL-2.0`;
  else if(license === 'Apache License 2.0')
    return `https://opensource.org/licenses/Apache-2.0`;
  else
    return ``;
}

// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None')
    return `## License: None`
  else {
    return `## License: ${license}
  [${license} Link](${renderLicenseLink(license)})`
  } 
}

// a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.licenses[0]);
  return `# ${data.projectName}
  ## Description  
  ${data.description}  
  ${renderLicenseBadge(data.licenses[0])} 

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  
  ## Usage
  ${data.usage}

  
  ${renderLicenseSection(data.licenses[0])}

  
  ## How to Contribute
  ${data.contributing}

  
  ## Tests
  ${data.test}

  
  ## Questions
  Links below are to my GitHub profile and email.
  Feel free to contact me with any questions you may have about the application  
  GitHub: [${data.gitName}](https://www.github.com/${data.gitName})  
  Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;