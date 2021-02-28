// TODO: Include packages needed for this application

const inquirer = require(`inquirer`);
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

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
            message: 'Please provide one by one how to use this project..'
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
            choices: ["MIT License", "Academic Free License v3.0", "Boost Software License 1.0", "Apache License 2.0", "Mozilla Public License 2.0", "ISC license"]
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
# ${data.title} <img src="https://img.shields.io/badge/License-${data.license}-lightblue.svg">


## Description
${data.descripton}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
E-mail me for any questions [${data.email}](mailto:${data.email}) or you can find me on Github [${data.username}](https://github.com/${data.username}).`



// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeFileAsync('README.md', writeToFile(answers)))
        .then(() => console.log('Readme succesfully generated'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
