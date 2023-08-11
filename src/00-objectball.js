function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }

const gameData = gameObject();

//console.log(gameData);

function numPointsScored(playerName) {
    let game = gameObject();

    for (let teamKey in game) {
        let teamObj = game[teamKey];
        let players = teamObj.players;

        if (players.hasOwnProperty(playerName)) {
            return players[playerName].points;
        }
    }
    return 'Players not found';
}

console.log(numPointsScored('Brendan Haywood'));

function shoeSize(playerName) {
    let game = gameObject();

    for (let teamkey in game) {
        let teamObj = game[teamkey];
        let players = teamObj.players;

        if (players.hasOwnProperty(playerName)) {
            return players[playerName].shoe;
        }
    }
    return 'Players not found';
}

console.log(shoeSize('Brendan Haywood'));

function teamColors(teamName) {
    let game = gameObject();

    for(let teamKey in game) {
        let teamObj = game[teamKey];

        if(teamObj.teamName === teamName) {
            return teamObj.colors;
        }
    }
    return 'Team not found';
}

console.log(teamColors('Charlotte Hornets'));

function teamNames() {
    let game = gameObject();
    let names = [];

    for(let teamKey in game) {
        let teamObj = game[teamKey];
        names.push(teamObj.teamName);
    }

    return names;
}

console.log(teamNames());

function playerNumbers(teamName) {
    let game = gameObject();
    let numbers = [];

    for(let teamKey in game) {
        let teamObj = game[teamKey];

        if(teamObj.teamName === teamName) {
            let players = teamObj.players;
            for (let playerName in players) {
               numbers.push(players[playerName].number);
            }
        }
    }
    return numbers.length > 0 ? numbers : 'Team not found';
    
}

console.log(playerNumbers('Charlotte Hornets'));

function playerStats(playerName) {
    let game = gameObject();

    for (let teamKey in game) {
        let teamObj = game[teamKey];
        let players = teamObj.players;

        if(players.hasOwnProperty(playerName)) {
            return players[playerName];
        }
    }
    return "Player not found";
}

console.log(playerStats("Brendan Haywood"));

function bigShoeRebounds() {
    let game = gameObject();

    let largestShoeSize = -1;
    let playerWithLargestShoe = null;

    for(let teamKey in game) {
        let players = game[teamKey].players;

        for (let playerName in players) {
            let player = players[playerName];
            let shoeSize = player.shoe

            if(shoeSize > largestShoeSize) {
                largestShoeSize = player.shoe;
                playerWithLargestShoe = player;
            }
        }
    }
    return playerWithLargestShoe.rebounds;
}

console.log(bigShoeRebounds());

function mostPointsScored() {
    let game = gameObject();

    let mostpoints = -1;
    let mostPointsPlayerName = null;
    
    for(let teamKey in game) {
        let players = game[teamKey].players;

        for (let playerName in players) {
            let player = players[playerName];

            if(player.points > mostpoints) {
                mostpoints = player.points;
                mostPointsPlayerName = playerName;
            }
        }
    }
    return mostPointsPlayerName;
}

console.log(mostPointsScored());

function winningTeam() {
    let game = gameObject();

    let mostPoints = -1;
    let teamWithMostPointsName = null;

    for(let teamKey in game) {
        let teamObj = game[teamKey];
        let players = teamObj.players;
        let teamTotalPoints = 0;

        for (let playerName in players) {
            teamTotalPoints += players[playerName].points;
        }

        if (teamTotalPoints > mostPoints) {
            mostPoints = teamTotalPoints;
            teamWithMostPointsName = teamObj.teamName;
        }
    }
    return teamWithMostPointsName;
}

console.log(winningTeam());


function playerWithLongestName() {
    let game = gameObject();

    let longestNameLength = -1;
    let longestNamePlayerName = null;

    for(let teamKey in game) {
        let players = game[teamKey].players;

        for(let playerName in players) {
            let nameLength = playerName.length;

            if(nameLength > longestNameLength) {
                longestNameLength = nameLength;
                longestNamePlayerName = playerName;
            }
        }
    }
    return longestNamePlayerName;
}

console.log(playerWithLongestName());

function doesLongNameStealATon() {
    let game = gameObject();

    let longestNameLength = -1;
    let longestNamePlayerName = null;

    for(let teamKey in game) {
        let players = game[teamKey].players;

        for(let playerName in players) {
            let nameLength = playerName.length;

            if(nameLength > longestNameLength) {
                longestNameLength = nameLength;
                longestNamePlayerName = playerName;
            }
        }
    }
    let mostSteals = -1;
    let mostStealsPlayer = null;

    for(let teamKey in game) {
        let players = game[teamKey].players;

        if (players.hasOwnProperty(longestNamePlayerName)) {
            let player = players[longestNamePlayerName];

            if(player.steals > mostSteals) {
                mostSteals = player.steals;
                mostStealsPlayer = player;
            }
        }
    }
    return mostStealsPlayer === game.home.players[longestNamePlayerName] ||
           mostStealsPlayer === game.away.players[longestNamePlayerName];
}

console.log(doesLongNameStealATon());

