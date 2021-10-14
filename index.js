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
    writeFile('README.md', template, err => err ? console.error(err) : console.log('success') )
}
// TODO: Create a function to initialize app
// hint start asking the questions here


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
        choices: ["Academic Free License v3.0 [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", 'BSD 2-clause "Simplified" license','BSD 3-clause "New" or "Revised" license', "BSD 3-clause Clear license", "Creative Commons license family", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The F*ck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License family", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License family", "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "PostgreSQL License", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]
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
Purpose: ${data.discription}

Installation Instructions: ${data.instructions}

Usage Information: ${data.usage}

Controbution Guidelines: ${data.controbution}

Test Instructions: ${data.test}

License: ${data.license}

# Username: ${data.username}

# Email: ${data.email}`
    write(template)});



