const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];


// initialize players with image and strength
// Instead of forloop use Map method
    const initPlayers = (players) => {
        let playersDetail = [];
        players.map((player, indexof) => {
        let info= {
            strength: getRandomStrength(),
            name: player,
            image:`images/super-${indexof + 1}.png`, 
            type: indexof % 2==0?"hero":"villain",
        };
        playersDetail.push(info) ;
    });
return playersDetail;
}


// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}


// Build player template
// Instead of using for loop
// Use chaining of Array methods - filter, map and join


const buildPlayers = (players, type) => {
    let part = " ";
    part = players
    .filter((player) => player.type === type)
    .map((player) => `<div class= "player" >
            <img src="${player.image}" alt="">
            <div class="name">${player.name}</div>
            <div class="strength">${player.strength}</div>
        </div>`
    )
.join("");
return part;
}

// Display players in HTML

const showPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players,'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players,'villain');
}

window.onload = () => {
    showPlayers(initPlayers(PLAYERS));
}