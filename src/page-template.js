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
        return `<div>Name ${manager.name}</div>
                <div>Office Number${manager.officeNumber}</div>
                <div>Email ${manager.email}</div>
                <div>Id number ${manager.id}</div>`
    }
    function generateEngineer(engineer) {
        return `<div>Name ${engineer.name}</div>
        <div>github${engineer.github}</div>
        <div>Email ${engineer.email}</div>
        <div>Id number ${engineer.id}</div>`
    }
    function generateIntern(intern) {
        return `<div>Name ${intern.name}</div>
        <div>School Name${intern.school}</div>
        <div>Email ${intern.email}</div>
        <div>Id number ${intern.id}</div>`
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
        <title>Team Generator</title>
    </head>
    <body>
        ${generateTeam(team)}
    </body>
    </html>`
}