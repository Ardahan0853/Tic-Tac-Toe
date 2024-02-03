const items = document.querySelectorAll('.item')


const GameBoard = (function() {
    let Gameboard = []
     for(let i = 0; i < 9; i++){
        Gameboard.push('')
     }
     isTurn = false

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
        addPlayer("Player1", 0, false)
        addPlayer("Player2", 1, false)
     }
     function addEvent(e){
    
        items.forEach((box, index) => {
            box.addEventListener('click',(e) => {
                
                let currentPlayer
                if(!isTurn){
                    currentPlayer = Players[0]
                    isTurn = true
                }else{
                    currentPlayer = Players[1]
                    isTurn = false
                }

                togglePlayerBoolean(currentPlayer , index)
                currentPlayer.isTurn = false
                e.isTrue = true
                console.log(e)
                console.log(index)
                renderDOM(index)
            })
        })    
     }
     function togglePlayerBoolean(currentPlayer, index){
        if(currentPlayer.number === 0){
            
        }
        currentPlayer.isTurn = true
        console.log(currentPlayer)
        
     }
     function renderDOM(number){
        items.forEach((item, index) => {
            if(number === index){
                console.log(item)
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