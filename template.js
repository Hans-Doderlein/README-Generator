module.exports = ({
  Title,
  Description,
  Installation,
  Usage,
  License,
  Contributors,
  Tests,
  Email,
  GitUserName,
}) => {
  return `# ${Title}\n
![License](https://img.shields.io/badge/license-${License.split(" ")[0]}-blue)

## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Description
${Description}

# Installation
${Installation}

## Usage
${Usage}

## License
${License}

## Contributing
${Contributors}

## Tests
${Tests}

## Questions\nFor any further questions please email me at ${Email}

For my repo, visit https://github.com/${GitUserName}
`;
};
