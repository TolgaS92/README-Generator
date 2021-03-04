// TODO: Include packages needed for this application

const inquirer = require(`inquirer`);
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// Badges function

const badges = {
    Mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    Apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    Boost: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    MPL_2: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
};


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Tell me about your project, short description.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide information that how to set this app.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Give a brief description that how to use this project',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list credits, if you have any..',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select the license used for this project.(use the arrow keys, and the space bar to pick)',
            choices: [
                "Mit",
                "Apache",
                "Boost",
                "MPL_2",
                "ISC"
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please tell me about contributing',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please tell me about testing completed',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please provide your Github username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide an email address',
        }
    ]);
}

// TODO: Create a function to write README file
const writeToFile = (data) =>
    `
| ${data.title} | ${badges[data.license]} |
| ------------- |:-------------:|
## Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Credits](#Credits)
5. [License](#License)
6. [Contributing](#Contributing)
7. [Tests](#Tests)
8. [Questions](#Questions)

## Description 
- ${data.description} 

## Installation
- ${data.installation}

## Usage
- ${data.usage}
- [![Watch the video](https://1.bp.blogspot.com/-x6mhhTiLiA8/XeW6e1r2ABI/AAAAAAAApms/TOUEfMeCaN86lfShwq837IFk8D-aASTaACLcBGAsYHQ/s640/coding.jpeg)](https://drive.google.com/file/d/1-PBQe9nrD3mhHb4fBPhGShNZLPT6RbS3/view?usp=sharing)

## Credits
- ${data.credits}

## License
- ${badges[data.license]}

## Contributing
- ${data.contributing}

## Tests
- ${data.tests}

## <img src="https://icons.iconarchive.com/icons/social-media-icons/social-buntings/48/Aim-icon.png">  Questions
- E-mail me for any questions [${data.email}](mailto:${data.email})
- Also you can find me on Github [${data.username}](https://github.com/${data.username}).
`



// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeFileAsync('README.md', writeToFile(answers)))
        .then(() => console.log('Readme succesfully generated'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
