// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

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

  ## License

  ${getLicenseBadge(data.license)}
  ${getLicenseLink(data.license)}

  ## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

GitHub Profile: [${data.github}](https://github.com/${data.github})

For additional questions, contact me at: ${data.email}
`;
}

function getLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache-2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL-3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD-3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return 'This product is not licensed. ';
  }
};

function getLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache-2.0') {
    return '[Apache-2.0](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL-3.0') {
    return '[GPL-3.0](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD-3-Clause') {
    return '[BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return '';
  }
}
module.exports = generateMarkdown;
//licences