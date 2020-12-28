// import { WorldCup } from './classes/WorldCup.js';
import { getNewTeams } from './teams.js';

const teamNames = await getNewTeams(6);
// const worldCup = new WorldCup('World Cup', teamNames);

let winnerTeams = [];

const startInfo = () => {
    console.log('COMIENZA EL TORNEO (fase de eliminatorias)');
    console.log('Participantes:');
    // console.table(worldCup.teamNames);
    for (let i = 0; i < teamNames.length; i++) {
        // console.log(i + 1, worldCup.teamNames[i]);
        console.log(i + 1, teamNames[i]);
    }
};
// startInfo(); // DESACTIVADO MIENTRAS HAGO EL RESTO

// divide team list into groups of two
const setupMatch = () => {
    let matches = [];
    let match = {};
    for (let i = 0; i <= teamNames.length; i++) {
        if (match.team1 && match.team2) {
            matches.push(match);
            match = {};
        }
        if (i % 2 == 0) {
            match.team1 = teamNames[i];
        } else if (i % 2 != 0) {
            match.team2 = teamNames[i];
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

const headerText = (round) => {
    switch (round) {
        case 1:
            console.log('===== OCTAVOS DE FINAL =====');
            break;
        case 2:
            console.log('===== CUARTOS DE FINAL =====');
            break;
        case 3:
            console.log('===== SEMIFINALES =====');
            break;
        case 4:
            console.log('===== TERCER Y CUARTO PUESTO =====');
        case 5:
            console.log('===== FINAL =====');
    }
};

const displayResults = (matches) => {
    let round = 1;
    headerText(round);

    matches.forEach((team) => {
        const winner =
            team.goalsTeam1 > team.goalsTeam2 ? team.team1 : team.team2;
        console.log(
            `${team.team1} ${team.goalsTeam1} - ${team.goalsTeam2} ${team.team2} => ${winner}`
        );
        winnerTeams.push(winner);
    });
    round++;
};

goalsAssign(setupMatch());

const play = () => {
    // aquí primera ejecución

    if (winnerTeams < 16) {
    }
};

// console.log('winnerTeams =>', winnerTeams);

// setupMatch(winnerTeams);

// √ Guardar los ganadores en algún sitio
// # La mitad ganadores pasan a la siguiente ronda
