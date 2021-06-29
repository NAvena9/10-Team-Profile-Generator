//Node dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./source/template");

//Classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

//Path
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");


//Team Building
const teamMembers = [];
const idArray = [];


function lunchApp() {

  //Building the Manager
  function buildManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Whats the team manager's name?",
      },
      {
        type: "input",
        name: "managerId", //Ver tipos de characteres en validacion
        message: "Whats the manager's Id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Whats the manager's email?",
      },
      {
        type: "input",
        name: "managerOffice",
        message: "whats the manager's Office Number?",
      },
    ]).then((answers) => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
      teamMembers.push(manager);
      idArray.push(answers.managerId);
      buildTeam();
    })
  };
  //Building our team
  function buildTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "teamIntegrant",
        message: "Please, select the next memebeer for the Team",
        choices: [
          "Intern", "Engineer", "No additional members"
        ]
      }
    ]).then(choice => {
      switch (choice.memberChoice) {
        case "Intern":
          addIntern();
          break;
        case "Engineer":
          addEngineer();
          break;
        default:
          createTeam();
      }
    });
  }

  //addIntern function declaration
  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What's the intern name?"
      },
      {
        type: "input",
        name: "internId",
        message: "What is the Intern ID?"
      },
      {
        type: "input",
        name: "internEmail",
        message: "Whats the intern email?"
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the Intern's School"
      }
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      idArray.push(answers.internId);
      buildTeam();
    });
  }

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?"
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID"
      },
      {
        type: "input",
        name: "engineerMail",
        message: "What is the Engineer's email?",
      },
      {
        type: "input",
        name: "engineerGh",
        message: "What is the Enginer's Github username?"
      }
    ]).then(answer => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGh);
      teamMembers.push(engineer);
      idArray.push(answers.engineerId);
      buildTeam();
    })
  }

  //Building the Team with all the members input by use
  function createTeam() {
    console.log(teamMembers, idArray);

    if (!fs.existsSync(output_dir)) {
      fs.mkdirSync(output_dir);
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  buildManager();

};

lunchApp();
