// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None"){
    return " ";
  }
  
  else {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return " ";
  }
  
  else {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None"){
    return " ";
  }
  
  else {
    return `## [License](#table of contents)
    ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

          ${renderLicenseBadge(data.license)}

          ## Table of content 
          *[Description](#discritpion)
          *[Installation](#installation)
          *[Usage](#usage)
          *[Contribution](#contribution)
          *[test](#testing)
          *[Questions](#question)
          
          
          ## [Description](#table of content)
            # ${data.description}

          ##[Installation](# table of content)
            # ${data.installation}

          ##[Usage](# table of content)
          # ${data.usage}

          ${renderLicenseSection(data.license)}

          ##[Contributions](# table of content)
          # ${data.contribution}

          ##[test](# table of content)
          # ${data.testing}

          ##[Questions](# table of content)
          For more questions you can use the following
          Email:  ${data.email}
          [github] (https://github.com/${data.username}) 



`;
}

module.exports = generateMarkdown;
