


const GameBoard = (function() {
    const items = document.querySelectorAll('.item')
    let Gameboard = []
     
        
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
     
     function init(){
        addPlayer("Player1", 0, true)
        addPlayer("Player2", 1, false)
        Gameboard = []
            for(let i = 0; i < 9; i++){
            Gameboard.push('')
        }
        console.log(Gameboard)
        
     }
     function addEvent(){
    
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
                endGame(index)
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
                if(Gameboard[number] == ''){
                    Gameboard.splice(number, 1, currentPlayers(currentPlayer) == 0 ? 'x' : 'o')
                }
                
                console.log(Gameboard)
                item.innerHTML = `${Gameboard[index]}`
            }
        })        
     }

     function endGameRENDER(winner){
        const container = document.querySelector('.container')
        container.innerHTML = `<h1>GAME IS FINISHED. GAME IS ${winner}</h1>`
        container.classList.add('container-after')
        setTimeout(() => {
            let htmlStracture = `<div class="item"></div>`
            for(let i = 0; i < 8; i++){
                htmlStracture += `<div class="item"></div>`
            }
            container.innerHTML = `${htmlStracture}`
            container.classList.remove('container-after')
            return 'init'
            
        }, 2000)
        ;
     }
     function initAndEndGame(winner){
            init()
            endGameRENDER(winner)
     }

     function arrayCalculator(array){
         let arrayX = array.reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});
         if(arrayX['x'] > arrayX['o']){
            return 'Player 1 is winner'
         }else{
            return "Player 2 is winner"
         }
     }

     function endGame(index){
        if(Gameboard[0] === 'x' && Gameboard[1] === 'x' && Gameboard[2] === 'x' || Gameboard[0] === 'o' && Gameboard[1] === 'o' && Gameboard[2] === 'o'){
            initAndEndGame(arrayCalculator(Gameboard))
        }else if(Gameboard[0] === 'x' && Gameboard[4] === 'x' && Gameboard[8] === 'x' || Gameboard[0] === 'o' && Gameboard[4] === 'o' && Gameboard[8] === 'o'){
            initAndEndGame(arrayCalculator(Gameboard))
        }else if(Gameboard[2] === 'x' && Gameboard[4] === 'x' && Gameboard[6] === 'x' || Gameboard[0] === 'o' && Gameboard[4] === 'o' && Gameboard[6] === 'o'){
            initAndEndGame(arrayCalculator(Gameboard))
        }else if(Gameboard[6] === 'x' && Gameboard[7] === 'x' && Gameboard[8] === 'x' || Gameboard[6] === 'o' && Gameboard[7] === 'o' && Gameboard[8] === 'o'){
            initAndEndGame(arrayCalculator(Gameboard))
        }else if(Gameboard[0] === 'x' && Gameboard[3] === 'x' && Gameboard[6] === 'x' || Gameboard[0] === 'o' && Gameboard[3] === 'o' && Gameboard[6] === 'o'){
            initAndEndGame(arrayCalculator(Gameboard))
        }else if(Gameboard[2] === 'x' && Gameboard[5] === 'x' && Gameboard[8] === 'x' || Gameboard[2] === 'o' && Gameboard[5] === 'o' && Gameboard[8] === 'o'){
            initAndEndGame(arrayCalculator(Gameboard))
        }else if(Gameboard[3] === 'x' && Gameboard[4] === 'x' && Gameboard[5] === 'x' || Gameboard[3] === 'o' && Gameboard[4] === 'o' && Gameboard[5] === 'o'){
            initAndEndGame(arrayCalculator(Gameboard))
        }else{
                if(!Gameboard.includes('')){
                    
                    initAndEndGame('TIE')
                }
            }
            
        }
        
     

     return {
        addPlayer: addPlayer,
        addEvent:addEvent,
        initAndEndGame:initAndEndGame,
        endGameRENDER:endGameRENDER,
        init:init,
        
    }
    
})()

GameBoard.addEvent()


// const button = document.querySelector('button')

// button.addEventListener('click', function(){
//     alert()
// })