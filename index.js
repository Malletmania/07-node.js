//TODO psudo code
//needed questions for function
//project title
//discription, installation, usage, contribution guidelines, test instructions
//license list, will be a function with options where they have to choose one, referance mini project for details.
//enter in Github username
//enter email Address

// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questionsArray = [
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
        name: 'Usage'
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
];

// TODO: Create a function to write README file
// hint: use the fs package to write file
function writeToFile(fileName, data) {}
// TODO: Create a function to initialize app
// hint start asking the questions here
function init() {
    inquirer
    .prompt([{
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        name: 'blockquestions',
        message: 'questions??',
        choices: questionsArray,
    },
    {
        type: 'list',
        message: "Choose a license you'd like your project to have",
        name: 'license',
        choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", 'BSD 2-clause "Simplified" license','BSD 3-clause "New" or "Revised" license', "BSD 3-clause Clear license", "Creative Commons license family", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The F*ck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License family", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License family", "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "PostgreSQL License", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]
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
    }
    ])
    .then(responses => {
        // use response data to build a readMe file in string formt that you will store in variable name.
    const finalReadme = generateMarkdown(responses)
    })
}

// Function call to initialize app
init();


const moreQuestions = [
    ['discription', ''],
    ['installation', 2],
    ['usage', 3],
    ['controbution', 4],
    ['test', 5]
];

for (const [input, message, name] of moreQuestions) {
    console.log(`${input}'s ${message} ${name}`)
};