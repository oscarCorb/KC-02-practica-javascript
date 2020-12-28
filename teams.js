import axios from 'axios';

export const getNewTeams = async (numberOfTeams) => {
    const url =
        'https://gist.githubusercontent.com/chankok/6b085b08e29ccafc60c34542afc10acc/raw/909b4acf54e225cdcc2fc7ffa3a182425d9dd35a/countries.json';
    const response = await axios.get(url);
    const listOfCountries = response.data;

    const countriesArr = listOfCountries.map((country) => country.name);
    const shuffledCountries = countriesArr.sort((a, b) => 0.5 - Math.random());
    shuffledCountries.length = numberOfTeams;

    return shuffledCountries;
};
