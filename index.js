// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { format } = require('path');

// TODO: Create an array of questions for user input
const questions = ["What is your project title?", 
                   "Enter a description including the what, why, and how of your project.",
                   "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
                   "Provide instructions and examples for use. Include screenshots as needed.",
                   "How can others contribute to your project?",
                   "Enter your Github username.",
                   "Enter your complete email with @ and '.com'.",
                   "Describe how to run tests for you application.",
                   "Choose your license below."
                ];


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: questions[0],
            validate: nameInput => {
                if(nameInput)
                {
                    return true;
                }
                else
                {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: projDesc => {
                if(projDesc)
                {
                    return true;
                }
                else
                {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
            validate: install => {
                if(install)
                {
                    return true;
                }
                else
                {
                    console.log('Please enter your installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
            validate: usage => {
                if(usage)
                {
                    return true;
                }
                else
                {
                    console.log('Please enter usage information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[4],
            validate: contrib => {
                if(contrib)
                {
                    return true;
                }
                else
                {
                    console.log('Please enter contribution guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitName',
            message: questions[5],
            validate: gitName =>
            {
                if(gitName)
                    return true;
                else
                {
                    console.log("Please enter your Github username!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[6],
            validate: email =>
            {
                if(email)
                    return true;
                else
                {
                    console.log("Please enter your email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: questions[7],
            validate: test => 
            {
                if(test)
                    return true;
                else
                {
                    console.log("Please enter test instructions!");
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: questions[8],
            choices: ['MIT License', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'None'],
            validate: list => {
                if(list.length)
                    return true;
                else {
                    console.log("Please pick one of the values");
                    return false;
                }
            }
        }
    ]);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./' + fileName, data, err =>{
            if(err)
            {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(projectData => {
        return generateMarkdown(projectData);
    })
    .then(pageReadME => {
        return writeToFile('README.md', pageReadME);
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();