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
const OUTPUT_DIR= path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

//Team Building
const teamMembersArray = [];   ///0000
const idArray = [];


//Llamar lunchapp?
lunchApp();

function lunchApp() {

  console.log(
    "\n","-".repeat(50), "\n",
    "This application helps you to create a team following a seriees of questions and deploys a webpage with the user input.", "\n", 
    "-".repeat(50)
  )

  //Building the Manager
  buildManager();

  function buildManager() {

    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Whats the team managers name?",
      },
      {
        type: "input",
        name: "managerId", //buscar tipos de characteres en validacion? para agregarlos
        message: "Whats the managers ID #?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Whats the managers email?",
      },
      {
        type: "input",
        name: "managerOffice",
        message: "whats the manager's office number?",
      },
    ]).then((answers) => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
      teamMembersArray.push(manager);
      idArray.push(answers.managerId);
      addTeamMember();  
    })
  };



  //Building our team
  function addTeamMember() {  //addTeamMember

    inquirer.prompt([
      {
        type: "list",
        name: "teamIntegrant",  ///teamAddition?
        message: "Please, select the next memebeer for the Team, would it be an Engineer or an Intern?",
        choices: ["Intern", "Engineer", "No additional members"]
      }
    ]).then(userChoice => {
      if(userChoice.teamIntegrant === "Engineer"){
        addEngineer();
      }else if(userChoice.teamIntegrant === "Intern") {
        addIntern();
      } else{
        createTeamHTML(); ///seria en el html
      }
    })
  }


  //addIntern function declaration
  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What's the intern's name?"
      },
      {
        type: "input",
        name: "internId",
        message: "What is the Intern's ID #?"
      },
      {
        type: "input",
        name: "internEmail",
        message: "Whats the Intern's email?"
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the Intern's School"
      }
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembersArray.push(intern);

      idArray.push(answers.internId); // ???

      addTeamMember();
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
        message: "What is the Engineer's ID #?"
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
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGh);
      teamMembersArray.push(engineer);

      idArray.push(answers.engineerId); //??

      addTeamMember();  ///ANTES LA HABIA LLAMADO buildTeam 
    })
  }

  //Building the Team with all the members input by use
  function createTeamHTML() {
    const templates = render(teamMembersArray);

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFile(outputPath, templates, (err) => {
      if(err) throw err;

      console.log("\n", "The HTML webpage has been created successfully");
    })
  }

}

// lunchApp();
