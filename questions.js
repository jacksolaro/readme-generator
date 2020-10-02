const questions = [
    {
        type: "input",
        message: "What is the project name?",
        name: "projectName"
    },
    {
        type: "input",
        message: "Please provide a description of the project:",
        name: "description",
    },
    {
        type: "list",
        message: "Which license is this project covered under?",
        name: "license",
        choices: [
            {
                name: "MIT License",
                value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            },
            {
                name: "Apache License 2.0",
                value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            },
            {
                name: "GNU General Public License v3.0",
                value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            }
        ]
    },
    {
        type: "input",
        message: "Please provide special installation instructions:",
        name: "installationInstructions",
    },
    {
        type: "input",
        message: "Please provide some usage instructions:",
        name: "usageInstructions",
    },
    {
        type: "input",
        message: "Please provide some testing instructions:",
        name: "testingInstructions",
    },
    {
        type: "input",
        message: "Please provide your github username:",
        name: "githubUsername",
    },
    {
        type: "input",
        message: "Please provide a link to the github repo",
        name: "projectRepo",
    },
    {
        type: "input",
        message: "Please provide a link to the deployed app:",
        name: "projectDeployed",
    },
]

module.exports = questions;