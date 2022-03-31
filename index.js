const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generate = require('./src/page-template')

let employeeList = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "HWat is the managers name?"
    },
    {
        type: 'number',
        name: 'id',
        message: "what is the managers ID number"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the managers email?"
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "What is the managers office number?"
    },
]

const addTeamMembers = {
    type: 'list',
    name: 'addTeam',
    message: "what team would you like to add?",
    choices: [
        'Engineer',
        'Intern',
        'None'
    ]
}

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "what is the engineers name?"
    },
    {
        type: 'number',
        name: 'id',
        message: "what is the engineers ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "what is the engineers email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineers GitHub name?"
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "what is the interns name?"
    },
    {
        type: 'number',
        name: 'id',
        message: "what is the interns ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "what is the interns email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the interns schools name?"
    },
]

const engineerGenerator = () => {
    inquirer.prompt(engineerQuestions)
        .then((engineerData) => {
            let newEngineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
            employeeList.push(newEngineer);
            addMoreTeamMembers();
        })
}

const internGenerator = () => {
    inquirer.prompt(internQuestions)
        .then((internData) => {
            let newIntern = new Intern(internData.name, internData.id, internData.email, internData.school)
            employeeList.push(newIntern);
            addMoreTeamMembers();
        })
}

const addMoreTeamMembers = () => {
    inquirer.prompt(addTeamMembers)
        .then((addTeamData) => {
            if (addTeamData.addTeam === 'Engineer') {
                engineerGenerator()
            }
            else if (addTeamData.addTeam === 'Intern') {
                internGenerator()
            }
            else if (addTeamData.addTeam === 'None.') {
                console.log('finished team')
                employeeList.forEach(employee => {
                    writeToFile('employeeList.html', (employeeList), err => {
                        if (err) {
                            console.log(err);
                        }
                        console.log('Successfully made team')
                    })
                })
            }
        })
}

const teamGenerator = () => {
    inquirer.prompt(managerQuestions)
        .then((managerData) => {
            const teamManager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber)
            employeeList.push(teamManager)
            addMoreTeamMembers()
        })
}

const writeToFile = (fileName, employeeList) => {
    fs.writeFileSync(fileName, generate(employeeList))
}

const init = () => {
    teamGenerator()
}

init();