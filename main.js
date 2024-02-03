const item = document.querySelector('.item')


const GameBoard = (function() {
     var Gameboard = {
        Columns:{
            col1:false,
            col2:false,
            col3:false
        },
        Rows:{
            row1:false,
            row2:false,
            row3:false
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
        Players.forEach(player => {
            const keys = Object.keys(player.playerColumns)
            keys.forEach((key,index) => {
                return(key, Players[key])
            })
        })
     }
     calculateGame()
     function consoleLog(){
        console.log(Players)
     } 
     function init(){
        addPlayer("Arda", 1)
        addPlayer("Arda2", 2)
     }
     return {
        addPlayer: addPlayer,
        consoleLog: consoleLog,
    }
    
})()