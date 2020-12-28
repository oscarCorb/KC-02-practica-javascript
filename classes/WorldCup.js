export class WorldCup {
    constructor(name, teamNames = [], config = {}) {
        this.name = name;
        this.teamNames = teamNames;
        this.setup(config);
        this.setupTeams(teamNames);
    }

    setup(config) {
        this.defaultConfig = { rounds: 1 };
        this.config = this.defaultConfig;
        const defaultConfig = {
            pointsPerWin: 3,
            pointsPerDraw: 1,
            pointsPerLost: 0,
        };
        this.config = Object.assign(defaultConfig, config);
    }

    setupTeams(teamNames) {
        this.teams = [];
        for (const teamName of teamNames) {
            const team = this.customizeTeams(teamName);
            this.teams.push(team);
        }
    }

    customizeTeams(teamName) {
        return {
            teamName: teamName,
            matchesWon: 0,
            matchesDrawn: 0,
            matchesLost: 0,
            points: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalsDiff: 0,
        };
    }

    setupMatch(team1, team2) {
        return {
            team1: team1,
            team2: team2,
            goalsTeam1: goalsTeam1,
            goalsTeam2: goalsTeam2,
        };
    }

    playMatch(team1, team2) {
        goalsTeam1 = Math.floor(Math.random * 7);
        goalsTeam2 = 0;
    }
}
