const playerCharObj = {
  
    health: 100,
    status: "healthy",
    possibleStatuses: ["poisoned", "healthy", "dead"],
    items: ["sandwich"],


}

const gameState = {
    currentRoomID: 0,
    currentRoomObject: gameMap[0],
    previousCommand: null,
    currentCommand: null,
    commandData: [],
    currentDescription: null,


    monsterEncountered: false,
    time: 0,
    adventureLogArray: [
        "You open your eyes.",
        "You are in a dim cave lying on the ground.",
        "Your head aches with a dull pain",
        "Light is streaming in from a hole in the cave ceiling above you."
         ]


};



const commandObject = {

   

    help:{ printHelp(){


        }
    },

    

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

    take:{

    },


    use:{
        rock:{},
        torch:{},
    },
   

}

const gameMap = {

    0: { roomDescription:[
        "Light is streaming in from a hole in the cave ceiling above you.",
        "You can see cave pathways to the east and the west.",
        "There are various rocks and things scattered around the cave FLOOR."],

        roomNotables:{
            roomItems:{},
            roomSecrets:{},},

        roomExits:{
            north: null,
            south: null,
            east: 1,
            west: 2,
        }
    }
    ,
    1: {},
    2: {},
    3: {},
    4: {},
}

function runCommand(command, object){

    //we want to look at the commandData Array
    //Look at the first string in the array
    //See if that command is in our commandObject
    
    if(object[command] === undefined || commandObject[command] === null){
        // print to the info text: "That is not a valid command"
    }



};

function parseCommand(){
    //We set our previousCommand property to be the command that is currently our currentCommand
    gameState.previousCommand = gameState.currentCommand

    // we update our currentCommand property to the command that the user just submitted from the input
    // we are using a querry selector to get this data from the DOM
    gameState.currentCommand = document.getElementById("user-input").value;

    // console log the value for debugging purposes
   console.log( document.getElementById("user-input").value);

    // reset the input to empty
   document.getElementById("user-input").value = "";

//
    gameState.commandData = gameState.currentCommand.split(" ");
    console.log(commandData);

}


function printTextToConsole(textArray){
// Loop through the textArray we are given
//We will print each line of text, which has been saved as an element in an array
    for(let i = 0; i < textArray.length; i++){

        document.getElementById("info-text").

    }


}

// The code for printing description text and feedback text to the info-section box

// each time you enter a new command it should print out the command on a new line
// All text data displayed in this section should be in an array, 
//Then in the info-section, you should print the command the user inputed, 
//Print the feedback message 
    // if unsuccessful print the unsuccessful message
    // if it was successful you print the feedback message for whatever action you did
    // if there were any changes to the game state that triggered any flags



