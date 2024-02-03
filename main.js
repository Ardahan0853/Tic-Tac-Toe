const items = document.querySelectorAll('.item')


const GameBoard = (function() {
     var Gameboard = {
        Columns:{
            col0:false,
            col1: false,
            col2 : false
        },
        Rows:{
            row0:false,
            row1:false,
            row2:false
        }
     }
     var Players = []

     var Player = function(name, number, playerColumns, playerRows){
        this.name = name,
        this.number = number,
        this.playerColumns = playerColumns,
        this.playerRows = playerRows;
     }
     function addPlayer(Name, number){
        let player = new Player(
            Name,
            number,
            Gameboard.Columns,
            Gameboard.Rows,

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
        addPlayer("Arda", 0)
        addPlayer("Arda2", 1)
     }
     function addEvent(e){
    
        items.forEach((box, index) => {
            box.addEventListener('click',(e) => {
                togglePlayerBoolean(0, index)
                e.isTrue = true
                console.log(e)
                console.log(index)
            })
        })    
     }
     function togglePlayerBoolean(playerNumber, index){
        for(let i =0 ; i < index; i++){
            Players[playerNumber].playerColumns[index] = !Players[playerNumber].playerColumns[index]
        }
        console.log(Players[playerNumber])
        
     }
     return {
        addPlayer: addPlayer,
        consoleLog: consoleLog,
        addEvent:addEvent
    }
    
})()
GameBoard.addEvent()