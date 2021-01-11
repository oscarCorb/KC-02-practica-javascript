let last2Matches = 2;

function printStartChampionship() {
    console.log(' ');
    console.log('\x1b[33m%s\x1b[0m', '¡COMIENZA EL TORNEO');
    console.log(' ');
    console.log('\x1b[32m%s\x1b[0m', 'Fase de eliminatorias');
    console.log(' ');
    console.log('\x1b[33m%s\x1b[0m', 'Participantes');
}

function printEndChampionship(winner) {
    console.log(' ');
    console.log('\x1b[32m%s\x1b[0m', '==============================');
    console.log(`¡${winner} ES CAMPEÓN DEL MUNDO!`);
    console.log('\x1b[32m%s\x1b[0m', '==============================');
}

function headerTexts(matches) {
    const numberOfMatches = matches.length;

    switch (numberOfMatches) {
        case 8:
            console.log(' ');
            console.log('\x1b[32m%s\x1b[0m', 'Octavos de final');
            break;
        case 4:
            console.log(' ');
            console.log('\x1b[32m%s\x1b[0m', 'Cuartos de final');
            break;
        case 2:
            console.log(' ');
            console.log('\x1b[32m%s\x1b[0m', 'Semifinales');
            break;
        case 1:
            if (last2Matches === 2) {
                console.log(' ');
                console.log('\x1b[32m%s\x1b[0m', 'Tercer y cuarto puesto');
                last2Matches--;
                break;
            } else if (last2Matches === 1) {
                console.log(' ');
                console.log('\x1b[32m%s\x1b[0m', 'Final');
                last2Matches--;
            }
    }
}

export default headerTexts;
export { last2Matches, printEndChampionship, printStartChampionship };
