let lastCommand = null;
let commandData = [];

const playerCharObj = {
    time: 0,
    health: 100,
    status: "healthy",
    possibleStatuses: ["poisoned", "healthy", "dead"],
    monsterEncountered: false,
    items: ["sandwich"],


}


const commandObject = {

   

    help:{},

    

    inspect: {
        north: {
            entrance:{},
        }
    },

    move: {
        north: {},
        south: {},
        east: {},
        west: {}
    },

    take:{},


    use:{
        rock:{},
        torch:{},
    },
   

}

const gameMap = {

    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
}

function runCommand(command){

    //we want to look at the commandData Array
    //Look at the first string in the array
    //See if that command is in our commandObject
    
    if(commandObject[command] === undefined || commandObject[command] === null){
        // print to the info text: "That is not a valid command"
    }



};

function parseCommand(){
    // Set our lastCommand variable to the command
    // we are using a querry selector to get this data from the DOM
    lastCommand = document.getElementById("user-input").value;
    // console log the value
   console.log( document.getElementById("user-input").value);
// reset the input to empty
   document.getElementById("user-input").value = "";

//
    commandData = lastCommand.split(" ");
    console.log(commandData);

}




