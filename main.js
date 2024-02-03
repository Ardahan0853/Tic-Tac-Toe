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

     var Player = function(player){
        this.player = player
     }
     

     function addPlayer(Name, number){
        let player = new Player({
            name:Name,
            number:number,
            playerColumns:Gameboard.Columns,
            playerRows:Gameboard.Rows,

        })
        // var player = {
        //     name: Name,
        //     playerNumber: number,
        //     playerColumns:Gameboard.Columns,
        //     playerRows:Gameboard.Rows
        // }
        if(Players.length < 2){
            Players.push(player)
        }
        
        console.log(Players)
        
     }
     function calculateGame(){

     }
     return {
        addPlayer: addPlayer
    }
})()