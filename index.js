const {writeFile} = require('fs')
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

function write(template) {
    writeFile('README.md', template, generateMarkdown, err => err ? console.error(err) : console.log('success') )
}

inquirer.prompt([{
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'In a few words describe the purpose of your file.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What are the controbution guidelines?',
        name: 'controbution'
    },
    {
        type: 'input',
        message: 'What are the test instructions',
        name: 'test'
    },
    {
        type: 'list',
        message: "Choose a license you'd like your project to have",
        name: 'license',
        choices: ["Apache license 2.0", "Boost Software License 1.0", "Eclipse Public License 1.0", "MIT", "N/A"]
    },
    {
        type: 'input',
        message: "Please enter in your github Username",
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter in your Email Address',
        name: 'email'
    }]).then(data => {const template = `# ${data.title}
# Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Test](#test)
Purpose: ${data.discription}

Installation Instructions: ${data.instructions}

Usage Information: ${data.usage}

Controbution Guidelines: ${data.controbution}

Test Instructions: ${data.test}

License: ${data.license}

# Questions?
Contact me with the sources below:
${data.username}
${data.email}`
    write(template)});
