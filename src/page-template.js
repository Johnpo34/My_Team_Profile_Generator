function generateTeam(team) {
    let page = ""
    team.forEach(teamMember => {
        if (teamMember.officeNumber != null) {
            page += generateManager(teamMember)
        }
        if (teamMember.github != null) {
            page += generateEngineer(teamMember)
        }
        if (teamMember.school != null) {
            page += generateIntern(teamMember)
        }
    })
    function generateManager(manager) {
        return `<div class="card" style="width: 18rem">
                <div>Name: ${manager.name}</div>
                <div>Office Number: ${manager.officeNumber}</div>
                <div>Email: ${manager.email}</div>
                <div>Id number: ${manager.id}</div>
                </div>`
    }
    function generateEngineer(engineer) {
        return `<div class="card" style="width: 18rem">
        <div>Name: ${engineer.name}</div>
        <div>github: ${engineer.github}</div>
        <div>Email: ${engineer.email}</div>
        <div>Id number: ${engineer.id}</div>
        </div>`
    }
    function generateIntern(intern) {
        return `<div class="card" style="width: 18rem">
        <div>Name: ${intern.name}</div>
        <div>School Name: ${intern.school}</div>
        <div>Email: ${intern.email}</div>
        <div>Id number: ${intern.id}</div>
        </div>`
    }
    return page;
}
module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="Assets/style.css">
        <title>Team Generator</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <hi class="display-4">Team</h1>
            </div>
        </div
        ${generateTeam(team)}
    </body>
    </html>`
}