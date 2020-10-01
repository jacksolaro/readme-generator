const fs = require("fs");
const inquirer = require("inquirer");

function generateReadMe() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the project name?",
            name: "projectName"
        },
        // {
        //     type: "input",
        //     message: "Please provide a description of the project:",
        //     name: "description",
        // },
        // {
        //     type: "input",
        //     message: "Please provide special installation instructions:",
        //     name: "installationInstructions",
        // },
        // {
        //     type: "input",
        //     message: "Please provide some testing instructions:",
        //     name: "testingInstructions",
        // },
        {
            // update type
            type: "input",
            message: "Which license is this project covered under?",
            name: "license",
            choices: []
        }
    ]).then(function (response) {

        // HTML Template with user responses filled in
        const mdTemplate = `# ${response.projectName}
        ${response.license}`

        // create file name variable, remove spaces and convert to lowercase
        const fileName = `${response.projectName.replace(/\s/g, '').toLowerCase() }.md`;

        // Save html template to a file
        fs.writeFile(fileName, mdTemplate, function(err) {
        
          if (err) {
            return console.log(err);
          }
        
          console.log("Success!");
        
        });
      });
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