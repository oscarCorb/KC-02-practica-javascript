import { teamNames } from './index.js';

export const titleTexts = (round) => {
    switch (round) {
        case 'start':
            console.log('COMIENZA EL TORNEO (fase de eliminatorias)');
            console.log('Participantes:');
            break;
        case 'end':
            console.log('===================================');
            console.log(
                `¡${teamNames
                    .toString()
                    .toUpperCase()} es el campeón del mundo!`
            );
            console.log('===================================');
            break;
        case 1:
            console.log('========= OCTAVOS DE FINAL ========');
            break;
        case 2:
            console.log('========= CUARTOS DE FINAL ========');
            break;
        case 3:
            console.log('============ SEMIFINALES ==========');
            break;
        case 4:
            console.log('====== TERCER Y CUARTO PUESTO =====');
            break;
        case 5:
            console.log('=============== FINAL =============');
            break;
    }
};
