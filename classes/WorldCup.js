import headerTexts, {
    last2Matches,
    printStartChampionship,
    printEndChampionship,
} from '../headerTexts.js';

class WorldCup {
    constructor(name, teams, numberOfTeams) {
        this.name = name;
        this.teams = teams;
        this.numberOfTeams = numberOfTeams;
        this.matches = [];
        this.winner = '';
    }

    randomTeams(teams) {
        const shuffleTeams = teams.sort((a, b) => 0.5 - Math.random());
        return shuffleTeams;
    }

    getNames(teams) {
        this.randomTeams(teams);

        // print participant list
        for (let i = 0; i < this.numberOfTeams; i++) {
            console.log(i + 1, this.teams[i]);
        }

        this.teams.length = this.numberOfTeams;
        this.setupMatches(this.teams);
    }

    // group the teams un pairs
    setupMatches(teams) {
        let match = {};
        let matches = [];

        // create objetcts with two temas
        for (const team of teams) {
            if (!match.team1) {
                match.team1 = team;
            } else {
                match.team2 = team;
            }
            // once object has two teams, push it into matches array
            if (match.team1 && match.team2) {
                matches.push(match);
                match = {};
            }
        }

        this.playMatches(matches);
    }

    // random goals generator
    generateGoals() {
        const randomGoals = Math.floor(Math.random() * 7);
        return randomGoals;
    }

    // play matches and assign goals to each team
    playMatches(matches) {
        for (const match of matches) {
            // generate match goals
            const team1Goals = this.generateGoals();
            let team2Goals = this.generateGoals();

            // if draw, generate goals again
            while (team1Goals === team2Goals) {
                team2Goals = this.generateGoals();
            }
            // place goals to each team in the object
            match.goalsTeam1 = team1Goals;
            match.goalsTeam2 = team2Goals;
        }

        this.displayResults(matches);
    }

    start(teams) {
        printStartChampionship();
        this.getNames(teams);
    }

    end() {
        printEndChampionship(this.winner);
    }

    // prepare next matches or finish competition
    prepareNextMatches(matches, winnerTeams, loserTeams) {
        if (matches.length > 2) {
            this.setupMatches(winnerTeams);
        } else if (matches.length > 1) {
            if (last2Matches === 2) {
                this.setupMatches(loserTeams);
            }
            if (last2Matches === 1) {
                this.setupMatches(winnerTeams);
            }
            // end championship
            if (last2Matches === 0) {
                this.end();
            }
        }
    }

    displayResults(matches) {
        headerTexts(matches);
        let winnerTeams = [];
        let loserTeams = [];

        matches.forEach((match) => {
            const winner =
                match.goalsTeam1 > match.goalsTeam2 ? match.team1 : match.team2;
            winnerTeams.push(winner);

            const loser =
                match.goalsTeam1 > match.goalsTeam2 ? match.team2 : match.team1;
            loserTeams.push(loser);

            console.log(
                `${match.team1} ${match.goalsTeam1} - ${match.goalsTeam2} ${match.team2} => ${winner}`
            );
        });

        this.winner = winnerTeams;
        this.prepareNextMatches(matches, winnerTeams, loserTeams);
    }
}

export default WorldCup;
