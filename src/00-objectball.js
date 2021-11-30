function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
}

function numPointsScored(playerPoints){
    const game = gameObject()
    for(let gameKey in game) {
        const teamObj = game[gameKey]
        for(const teamKey in teamObj) {
            const playerObj = teamObj[teamKey]
            for(const playerKey in playerObj) {
                if (playerKey === playerPoints) {
                    return playerObj[playerKey].points
                }
            }
        }
    }
}

function shoeSize(playerShoe) {
    const game = gameObject()
    for(let gameKey in game){
        const teamObj = game[gameKey]
        for(const teamKey in teamObj) {
            const playerObj = teamObj[teamKey]
            for(const playerKey in playerObj) {
                debugger
                if(playerKey === playerShoe) {
                    return playerObj[playerKey].shoe
                }
            }
        }
    }
}

function teamColors(teamValue) {
    const game = gameObject()
    for(let gameKey in game) {
        if(game[gameKey].teamName === teamValue) {
            return game[gameKey].colors
        }
        
        
    }
     
}

function teamNames() {
    const game = gameObject()
    return Object.keys(game).map(t => game[t].teamName)
}

const teamObject = (teamName) => {
    if (teamNames()[0] === teamName) {
        return gameObject().home
    } else {
        return gameObject().away
    }
}

const playerNumbers = (teamName) => {
    let playerNumbers = []
    const players = teamObject(teamName).players
    for (let player in players) {
        let playerNumber = players[player].number
        playerNumbers.push(playerNumber)
    }

    return playerNumbers
}

const homePlayers = () => {
    return gameObject().home.players
}

const awayPlayers = () => {
    return gameObject().away.players
}

const allPlayers = () => {
    return Object.assign({}, homePlayers(), awayPlayers())
}

const playerStats = (player) => {
    return allPlayers()[player]
}

const playerShoe = (player) => {
    return playerStats(player).shoe
}

const playerRebounds = (player) => {
    return playerStats(player).rebounds
}

const bigShoeRebounds = () => {
    const players = allPlayers()
    let largestShoe = 0
    let largestShoePlayer = ''
    for (let player in players) {
        if (playerShoe(player) > largestShoe || largestShoe === 0) {
            largestShoe = playerShoe(player)
            largestShoePlayer = player
        }
    }

    return playerRebounds(largestShoePlayer)
}

const mostPointsScored = () => {
    const players = allPlayers()
    let mostPoints = 0
    let highestScoringPlayer = ''
    for (let player in players) {
        if (playerStats(player).points > mostPoints || mostPoints === 0) {
            highestScoringPlayer = player
            mostPoints = playerStats(player).points
        }
    }

    return highestScoringPlayer;
}
