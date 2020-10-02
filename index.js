const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./questions")
const mdTemplate = require("./mdTemplate")

async function generateReadMe() {

    // Prompt the User for responses. Questions for Prompting can be found in questions.js
    const response = await inquirer.prompt(questions)

    // Use user responses to fill template. Template can be found in mdTemplate.js
    const filledTemplate = mdTemplate.fillTemplate(response);

    // File Type (default .md for markdown)
    const fileType = ".md";

    // create file name variable, remove spaces and convert to lowercase
    const fileName = `${response.projectName.replace(/\s/g, '').toLowerCase()}${fileType}`;

    // Save html template to a file
    fs.writeFile(fileName, filledTemplate, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success! ");
    })
}

generateReadMe();