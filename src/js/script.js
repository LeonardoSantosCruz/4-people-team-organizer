let teams = [[]]


// console.log (teams[0][0])
// console.log (lastTeamIndex)

let addToTeam = () =>{
    let addedPlayer = document.getElementById("playerName").value.toUpperCase()
    let lastTeam = teams[teams.length - 1]
    let lastTeamIndex = teams.indexOf(lastTeam) 
    if (addedPlayer == ""){
        alert("Favor insira um nome")
    } else{
        // se o tamanho do ultimo time for menor q 4 adicione nele se não crie um novo time
        if (lastTeam.length<4){
            teams[lastTeamIndex].push(addedPlayer)
        } else{
            teams.push([addedPlayer])
        }
        // lastTeam = teams[teams.length - 1]
        renderTable()
        document.getElementById("playerName").value = ""
    }
    
}
// addToTeam()
// console.log(teams)
// console.log(teams.length)

let renderTable =()=>{
    let teamsTable = document.getElementById('teamsTable')
    teamsTable.innerHTML = ""
    
    teams.forEach(team =>{
        let teamTable = `
        <thead> 
        <th colspan="2">
        time ${teams.indexOf(team)+1}
        </th>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>`
        teamsTable.innerHTML += teamTable

        team.forEach(player => {
            const playerRow=`
        
        <tr>
        
            <td>${player}</td>
            <td style="width: fit-content;">
                <button class="btn btn-info btn-sm" onclick="showEditForm()">Editar</button>
                
            </td>
        </tr>`
        teamsTable.innerHTML += playerRow
        })
        
       
    })
    
}
// renderTable()