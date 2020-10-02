const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./questions")
const mdTemplate = require("./mdTemplate")

async function generateReadMe() {

    const response = await inquirer.prompt(questions)

    const filledTemplate = mdTemplate.fillTemplate(response);

    console.log(filledTemplate);

    // create file name variable, remove spaces and convert to lowercase
    const fileName = `${response.projectName.replace(/\s/g, '').toLowerCase()}.md`;

    // Save html template to a file
    fs.writeFile(fileName, filledTemplate, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    })
}

generateReadMe();

                // require all the dependencies I'll need
                // fs
                // inquirer

                // create an array of questions

                // write an actual readme in markdown as a template

                // function that will generate my readme template

                // use inquirer to prompt the user for inputs

                // use the answers that come back from the inquirer - pass into readme function

                // write file using template genrated from readme function