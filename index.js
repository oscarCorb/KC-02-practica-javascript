import { getNewTeams } from './teams.js';
import { titleTexts } from './texts.js';

const teamNamesList = await getNewTeams(16);

let teamNames = teamNamesList;
let losers = [];
let round = 1;

const displayResults = (matches) => {
    teamNames = [];
    losers = [];
    titleTexts(round);

    matches.forEach((team) => {
        const winner =
            team.goalsTeam1 > team.goalsTeam2 ? team.team1 : team.team2;
        const loser =
            team.goalsTeam1 < team.goalsTeam2 ? team.team1 : team.team2;
        console.log(
            `${team.team1} ${team.goalsTeam1} - ${team.goalsTeam2} ${team.team2} => ${winner}`
        );
        teamNames.push(winner);
        losers.push(loser);
    });
    round++;
};

const startInfo = () => {
    titleTexts('start');
    // console.table(worldCup.teamNames);
    for (let i = 0; i < teamNames.length; i++) {
        // console.log(i + 1, worldCup.teamNames[i]);
        console.log(i + 1, teamNames[i]);
    }
};
startInfo();

// create matchs from array of team names
const setupMatch = (teamNamesArr) => {
    let matches = [];
    let match = {};
    for (let i = 0; i <= teamNamesArr.length; i++) {
        if (match.team1 && match.team2) {
            matches.push(match);
            match = {};
        }
        if (i % 2 == 0) {
            match.team1 = teamNamesArr[i];
        } else if (i % 2 != 0) {
            match.team2 = teamNamesArr[i];
        }
    }
    // console.log(matches);
    return matches;
};

const goalsGenerator = () => {
    const goals = Math.floor(Math.random() * 9);
    return goals;
};

// los 2 equipos se enfrentan y se guardan los goles de cada uno
const goalsAssign = (teams) => {
    // duplicate passed teams objects
    const matches = teams.map((team) => Object.assign({}, team));

    for (const match of matches) {
        const goalsTeam1 = goalsGenerator();
        let goalsTeam2 = goalsGenerator();
        // if draw, generate a new number/goal
        while (goalsTeam1 == goalsTeam2) {
            goalsTeam2 = goalsGenerator();
        }
        // assign goals to each team in the objects
        match.goalsTeam1 = goalsTeam1;
        match.goalsTeam2 = goalsTeam2;
    }
    displayResults(matches);
};

const play = () => {
    for (let i = 1; i <= 3; i++) {
        goalsAssign(setupMatch(teamNames));
    }
    const finalists = teamNames;
    goalsAssign(setupMatch(losers));
    goalsAssign(setupMatch(finalists));
    titleTexts('end');
};

play();

export { teamNames };
