//TODO psudo code
//needed questions for function
//project title
//discription, installation, usage, contribution guidelines, test instructions
//license list, will be a function with options where they have to choose one, referance mini project for details.
//enter in Github username
//enter email Address

// TODO: Include packages needed for this application
const {writeFile} = require('fs')
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create a function to write README file
// hint: use the fs package to write file
function write(template) {
    writeFile('README.md', template, generateMarkdown, err => err ? console.error(err) : console.log('success') )
}
// TODO: Create a function to initialize app
// hint start asking the questions here
// function generateBadge(data){

//     let badge = "";
//     if(data.license == "MIT"){
//         badge = "![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)"
//     } else if (data.license == "Apache license 2.0"){
//         badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
//     } else if (data.license == "Boost Software License 1.0"){
//         badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
//     } else if (data.license == "Eclipse Public License 1.0"){
//         badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
//     }
// }

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
## Table of Contents:
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


