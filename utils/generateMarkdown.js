// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//'MIT License', 'GNU GLPv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'None'
function renderLicenseBadge(license) {
  if(license === 'MIT License')
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.licenses[0]);
  return `# ${data.projectName}
  ## ${data.description}
  ## ${renderLicenseBadge(data.licenses[0])} 

  ## Installation
  ## ${data.installation}

  ## Usage
  ## ${data.usage}

  ## How to Contribute
  ## ${data.contributing}

  ## Tests
  ## ${data.test}

  ## License
  ## ${renderLicenseBadge(data.licenses[0])}

  ## Questions
  ## Links below are to my GitHub profile and email.
  ## Feel free to contact me with any questions you may have about the application
  ## GitHub: [${data.gitName}](https://www.github.com/${data.gitName})
  ## Email: [${data.email}](mailto:${data.email})


`;
}

module.exports = generateMarkdown;