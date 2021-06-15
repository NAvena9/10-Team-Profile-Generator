const inquirer = require("inquirer");


const promptForManager = () => {


  inquirer.prompt(managerQuestions)
    .then(answers => {

      //create manager
      //push manager onto the array

      // create team

      promptForInterns();

    })

};

const promptForInterns = () => {

  inquirer.prompt(internQuestions)
    .then(answers => {

      //If I should add another
      promptForInterns();

    })

};


promptForManager();

