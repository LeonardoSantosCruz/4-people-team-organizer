let teams = [[]]
// let teams = [["joão","pedro","Maria","Joana"],["josue","pedrosa","Mariana", "Joaquina"]]


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
                <button class="btn btn-info btn-sm" onclick="showEditForm(${team.indexOf(player)},${teams.indexOf(team)})">Editar</button>
                
            </td>
        </tr>`
        teamsTable.innerHTML += playerRow
        })
        
       
    })
    
}

let showEditForm = (pIndex,tIndex) =>{
    let editform = document.getElementById("editDiv")
    editform.innerHTML = `<form  onsubmit="updatePlayerRow(); return false"  class="bg-dark p-3 mt-3 rounded" id="playerEditor">
            
            
    <div class="input-group mb-1">
        <span class="input-group-text">Nome:</span>
        <input type="text" class="form-control" placeholder="Nome" aria-label="Item" id="editPlayer"> 
    </div>
    
    <button type="button" class="btn btn-light btn-sm" onclick="updatePlayerRow(${pIndex},${tIndex})" >Alterar</button>
    
    <button type="button" class="btn btn-light btn-sm" onclick="hidePlayerEditor()">Cancelar</button>
</form>`

    const editTeam = teams.find(team=> teams.indexOf(team)== tIndex)
    const editPlayer = editTeam.find(player => editTeam.indexOf(player)== pIndex)
    document.getElementById("editPlayer").value = editPlayer
    // document.getElementById('playerEditor').style.display="block"
    document.getElementById('editDiv').style.display="block"
    document.getElementById('z-indexed').style.display="block"
    // document.getElementById('playerEditor').style.position="absolute"
    document.getElementById('editDiv').style.position="absolute"
    // document.getElementById('playerEditor').style.zIndex="3"
    document.getElementById('editDiv').style.zIndex="3"
    document.getElementById('mainDiv').style.opacity = '0.3'
    document.getElementById('footerDiv').style.opacity = '0.3'

}
let hidePlayerEditor= ()=>{
    document.getElementById('mainDiv').style.opacity = '1'
    document.getElementById('footerDiv').style.opacity = '1'
    // document.getElementById('playerEditor').style.display="none"
    document.getElementById('editDiv').style.display="none"
    document.getElementById('z-indexed').style.display="none"
    document.getElementById('footerDiv').style.display="block"
}
let updatePlayerRow= (pIndex,tIndex)=>{

    let uptdatedPlayer = document.getElementById("editPlayer").value.toUpperCase()
    teams[tIndex].splice(pIndex,1, uptdatedPlayer)
    renderTable()
    hidePlayerEditor()
}

let clearList = () =>{
    let fullClear = confirm("TEM CERTEZA QUE DESEJA LIMPAR A LISTA?")
    if(fullClear=== true){
        teams = [[]]
    }
    
    renderTable()
}
renderTable()