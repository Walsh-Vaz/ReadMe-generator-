// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of this application",
        name: "title",
    },
    {
        type: "input",
        message: "Please describe your application",
        name: "description",
    },
    {
        type: "input",
        message: "please enter your installation guidelines",
        name: "installation",
    },
    {
        type: "input",
        message: "please enter the usage information for your app",
        name: "usage",
    },
    {
        type: "input",
        message: "Who contributed in this application",
        name: "contribution",
    },
    {
        type: "input",
        message: " please enter the testing instruction",
        name: "testing",
    },
    {
        type: "list",
        message: "Please choose your prefered license",
        name: "license",
        choices: ['None',
        'Apache license 2.0',
        'Boost Software License 1.0',
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license',
        'Creative Commons Zero v1.0 Universal',
        'Do What The F*ck You Want To Public License',
        'Eclipse Public License 1.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU General Public License v3.0',
        'GNU Lesser General Public License v3.0',
        'MIT',
        'Mozilla Public License 2.0',
        'The Unlicense'],
    },
    {
        type: "input",
        mesage: "What is your github username",
        name: "username",
    },
    {
        type: "input",
        message: "what is your email address",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        return data;
    });
}

// Function call to initialize app
init();
