const items = document.querySelectorAll('.item')


const GameBoard = (function() {
    let Gameboard = []
     for(let i = 0; i < 9; i++){
        Gameboard.push('')
     }
     let isTurn = false

     var Players = []

     var Player = function(name, number, isTurn){
        this.name = name,
        this.number = number,
        this.isTurn = isTurn
     }
     function addPlayer(Name, number, isTurn){
        let player = new Player(
            Name,
            number,
            isTurn
            

        )
        // var player = {
        //     name: Name,
        //     playerNumber: number,
        //     playerColumns:Gameboard.Columns,
        //     playerRows:Gameboard.Rows
        // }
        if(Players.length < 2){
            Players.push(player)
        }
     }
     init()
     function calculateGame(){
       
     }
     calculateGame()
     function consoleLog(){
        console.log(Players)
     } 
     function init(){
        addPlayer("Player1", 0, true)
        addPlayer("Player2", 1, false)
     }
     function addEvent(e){
    
        items.forEach((box, index) => {
            box.addEventListener('click',(e) => {
                
                let currentPlayer = Players.filter(player => {
                    return player.isTurn
                })
                Players[0].isTurn = !Players[0].isTurn
                Players[1].isTurn = !Players[1].isTurn
                

                currentPlayers(currentPlayer[0])
                
                e.isTrue = true
                console.log(e.target.value)
                console.log(index)
                renderDOM(index , currentPlayer[0])
            })
        })    
     }
     function currentPlayers(currentPlayer){
        console.log(currentPlayer)
        return currentPlayer.number
        
     }
     
    //  function pushingArray(index, playerSelection){
    //     Gameboard.splice(index, 1, playerSelection)
    //  }

     

     function renderDOM(number, currentPlayer){
        items.forEach((item, index) => {
            
            
            if(number === index){
                Gameboard.splice(number, 1, currentPlayers(currentPlayer) == 0 ? 'x' : 'o')
                console.log(Gameboard)
                item.innerHTML = `${Gameboard[index]}`
            }
        })        
     }

     return {
        addPlayer: addPlayer,
        consoleLog: consoleLog,
        addEvent:addEvent
    }
    
})()
GameBoard.addEvent()