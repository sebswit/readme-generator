const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide description for your project'  
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'  
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information'  
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'], 
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contributors guideline'  
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions'  
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide GitHub username'  
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'  
    },
];

// function to write README file
function writeToFile(fileName, data) {
    const outputPath = path.join(process.cwd(), fileName);

    fs.writeFile(outputPath, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// function to initialize program
function init() {
    try{
 const answers = inquirer.prompt(questions);
 const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
    } catch(err) {
        console.log(err);
    }
};

// function call to initialize program
init();
