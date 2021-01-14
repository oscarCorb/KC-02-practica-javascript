import WorldCup from './classes/WorldCup.js';
import countries from './assets/countries.js';

try {
    const numberOfTeams = 16;
    const teamNamesArr = [];

    const teamNames = countries.forEach((country) => {
        // teamNamesArr.push(country.name);

        // alternative code which gets a pefect grid with results
        if (country.name.length === 5) {
            teamNamesArr.push(country.name);
        }
    });

    const worldCup = new WorldCup(
        'Mundial de fútbol',
        teamNamesArr,
        numberOfTeams
    );

    // The championship start
    worldCup.start(worldCup.teams);
} catch {
    console.error('ERROR', error);
}
