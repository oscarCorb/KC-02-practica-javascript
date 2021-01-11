import WorldCup from './classes/WorldCup.js';
import countries from './assets/countries.js';

const numberOfTeams = 16;
let teamNamesArr = [];

const teamNames = countries.forEach((team) => {
    if (team.name.length == 5) {
        teamNamesArr.push(team.name);
    }
});

const worldCup = new WorldCup('Mundial de fútbol', teamNamesArr, numberOfTeams);

// The championship start
worldCup.start(worldCup.teams);
