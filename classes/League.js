import { getNewTeams } from "../teams.js";

export class League {
    constructor(numberOfTeams = 32, teams = []) {
        this.teams = teams;
    }

    async createTeams(numberOfTeams) {
        const teams = await getNewTeams(numberOfTeams);
    }

    setup() {
        throw Error("setup method not implemented");
    }

    customizeTeam(teamName) {
        return {
            name: teamName,
            points: 0,
        };
    }

    setMatches() {
        throw Error("setMatches method not implemented");
    }
}
