function generateTeam(team){
    function generateManager(manager){
        return ``
    }
    function generateEngineer(engineer){
        return ``
    }
    function generateIntern(intern){
        return ``
    }
    const page = []
    page.push(team)
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