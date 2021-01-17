import WorldCup from './classes/WorldCup.js';
import FaseDeGrupos from './classes/FaseDeGrupos.js';
import countries from './countries.js';
// import { startChampionshipText } from '../headerTexts.js';

try {
    const numberOfTeams = 32;
    const teamNamesArr = [];

    const teamNames = countries.forEach((country) => {
        // teamNamesArr.push(country.name);

        // alternative code which gets a pefect grid with results
        if (country.name.length === 7) {
            teamNamesArr.push(country.name);
        }
    });

    // v3 (Ejercicio completo)

    const faseDeGrupos = new FaseDeGrupos(
        'World Cup',
        teamNamesArr,
        numberOfTeams
    );

    console.log('Grupos y equipos');
    console.log('================');
    // faseDeGrupos.scheduleMatchDays();
    faseDeGrupos.printGroups();
    // startChampionshipText();

    // console.log(group);

    // console.log(teamA);

    // const teamB = faseDeGrupos.scheduleMatchDays()[0][1];
    // console.log(teamB);
    // console.log(faseDeGrupos.scheduleMatchDays()[0][0].toString());

    //
    //
    //
    // v2 (WorldCup CLASS)

    const worldCup = new WorldCup(
        'Mundial de fútbol',
        teamNamesArr,
        numberOfTeams
    );

    // The championship start
    // worldCup.start(worldCup.teams); // Desactivado de momento para hacer la primera fase
} catch (error) {
    console.error('ERROR', error);
}
