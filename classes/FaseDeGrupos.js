class FaseDeGrupos {
    constructor(name, teams = [], numberOfTeams) {
        this.name = name;
        this.teams = teams;
        this.numberOfTeams = numberOfTeams;
        this.groups = [];
    }

    randomTeamNames(teamNames) {
        return teamNames.sort(() => Math.random() - 0.5);
    }

    getTeams() {
        const teamNames = this.teams;
        teamNames.length = this.numberOfTeams;
        return this.randomTeamNames(teamNames);
    }

    setupTeam(teamName) {
        return {
            teamName: teamName,
            matchesWon: 0,
            matchesDraw: 0,
            matchesLost: 0,
            points: 0,
        };
    }

    setupGroups() {
        const teams = this.getTeams();
        let groups = [];
        let group = [];

        for (const team of teams) {
            group.push(team);

            if (group.length === 4) {
                groups.push(group);
                group = [];
            }
        }
        return groups;
    }

    scheduleMatchDays() {
        const groups = this.setupGroups();

        let matchesInGroups = [];
        let matches = [];
        let match = [];

        for (const group of groups) {
            for (let i = 0; i < group.length; i++) {
                for (let j = i + 1; j < group.length; j++) {
                    match.push(group[i]);
                    match.push(group[j]);

                    if (match.length === 2) {
                        matches.push(match);
                        match = [];
                    }
                    if (matches.length === 6) {
                        matchesInGroups.push(matches);
                        matches = [];
                    }
                }
            }
        }

        let matchDays = [];
        let groupStage = [];

        for (const grupo of matchesInGroups) {
            let team1 = 0;
            let team2 = 5;
            for (let i = 0; i < grupo.length / 2; i++) {
                matchDays.push([grupo[team1], grupo[team2]]);
                team1++;
                team2--;
                if (matchDays.length === 3) {
                    groupStage.push(matchDays);
                    matchDays = [];
                }
            }
        }

        return groupStage;
    }

    printGroups() {
        const letterOfTheGroups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

        let count = 0;
        for (const group of this.scheduleMatchDays()) {
            console.log(
                '\x1b[32m%s\x1b[0m',
                `Grupo ${letterOfTheGroups[count]}`
            );
            for (let i = 0; i < 1; i++) {
                const teams = group[i][0].concat(group[i][1]);

                for (let j = 0; j < teams.length; j++) {
                    console.log(teams[j]);
                }
                console.log('');
            }
            for (let k = 0; k < group.length; k++) {
                console.log(`Jornada ${k + 1}:`);
                console.log(`- ${group[k][0][0]} vs ${group[k][0][1]}`);
                console.log(`- ${group[k][1][0]} vs ${group[k][1][1]}`);
                console.log('');
            }
            count++;
        }
    }

    startChampionship() {}
} // fin de la clase

export default FaseDeGrupos;

// √. divide teams in groups of 4 (groups A to H)
// √. schedule match days
// -. print groups and match days
// 2. play all in each group
// 3. first and second of each group pass next level
// 4. save points

//

// setupTeams()
// este método da forma a los equipos: name, partids ganados/empatados/perdidos, puntos
