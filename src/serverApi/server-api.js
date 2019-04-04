export default class ServerApi {
    _baseApiURL = "https://swapi.co/api";

    async makeRequest(url) {
        const serverResponse = await fetch(`${this._baseApiURL}${url}`);
        return await serverResponse.json();
    }

    async getPeopleList() {
        const result = await this.makeRequest(`/people/`);
        return result.results.map(this._refactorDataPerson);
    }

    async getOnePerson(id) {
        const person = await this.makeRequest(`/people/${id}/`);
        return this._refactorDataPerson(person);
    }

    async getPlanetsList() {
        const result = await this.makeRequest(`/planets/`);
        return result.results.map(this._refactorDataPlanets);
    }

    async getOnePlanet(id) {
        const planet = await this.makeRequest(`/planets/${id}/`);
        return this._refactorDataPlanets(planet);
    }

    async getStarshipsList() {
        const result = await this.makeRequest(`/starships/`);
        return result.results.map(this._refactorDataStarships);
    }

    async getOneStarship(id) {
        const ship = await this.makeRequest(`/starships/${id}/`);
        return this._refactorDataStarships(ship);
    }

    _refactorDataPerson(person) {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = person.url.match(idRegExp)[1];
        return {
            id: id,
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            skinColor: person.skin_color,
            films: person.films,
            height: person.height
        };
    }

    _refactorDataPlanets(planet) {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = planet.url.match(idRegExp)[1];
        return {
            id: id,
            name: planet.name,
            climate: planet.climate,
            diameter: planet.diameter,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            terrain: planet.terrain
        };
    }

    _refactorDataStarships(starship) {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = starship.url.match(idRegExp)[1];
        return {
            id: id,
            price: starship.cost_in_credits,
            length: starship.length,
            model: starship.model,
            name: starship.name,
            pilots: starship.pilots,
            manufacturer: starship.manufacturer,
            shipClass: starship.starship_class,
            url: starship.url
        };
    }
}
