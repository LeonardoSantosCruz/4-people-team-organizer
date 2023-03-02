let teams = [["joão","pedro","Maria","Joana"],["josue","pedrosa","Mariana", "Joaquina"]]
let lastTeam = teams[teams.length - 1]
let lastTeamIndex = teams.indexOf(lastTeam)
teams[0].push("José")
// console.log (teams[0][0])
// console.log (lastTeamIndex)

let addToTeam = () =>{
    // let addedPlayer = document.getElementById("playerName").value
    let addedPlayer = "joao"
// se o tamanho do ultimo time for menor q 4 adicione nele se não crie um novo time
    if (lastTeam.length<4){
        teams[lastTeamIndex].push(addedPlayer)
    } else{
        teams.push([addedPlayer])
    }
    lastTeam = teams[teams.length - 1]
    renderTable()
}
// addToTeam()
// console.log(teams)
// console.log(teams.length)

let renderTable =()=>{
    let teamsTable = document.getElementById('teamsTable')
    teamsTable.innerHTML=`
    <thead> 
    <tr>
        <th scope="col">Nome</th>
        <th scope="col">Ações</th>
    </tr>
</thead>
    `
    // <th colspan = "2" class="bg-primary">Time 1</th> 
}