function fillTemplate(response) {
const template = 
`# ${response.projectName}

${response.license}

Github Repo: ${response.license}
Deployed App: ${response.license}

## DESCRIPTION
---------------------
${response.description}

## TABLE OF CONTENTS
---------------------

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Contributions](#contributions)
* [Questions](#questions)


## INSTALLATION
------------
${response.installationInstructions}

## USAGE
------------
${response.usageInstructions}


## TESTS
------------
${response.testingInstructions}

## FUTURE RELEASES
------------

## LICENSE
------------
This repository is covered under the ${response.license} license.

## CONTRIBUTIONS
------------



## QUESTIONS
------------
Please direct all questions related to this repository to ${response.githubUsername}`

return template;
}; 

module.exports.fillTemplate = fillTemplate;