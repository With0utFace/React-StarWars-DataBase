export default class ServerApi {
    _baseApiURL = "https://swapi.co/api";
    _baseImageUrl = "https://starwars-visualguide.com/assets/img";

    generateID = element => {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = element.url.match(idRegExp)[1];
        return id;
    };

    makeRequest = async url => {
        const serverResponse = await fetch(`${this._baseApiURL}${url}`);
        return await serverResponse.json();
    };

    get = async (element, id = "") => {
        let current = null;
        let refactorCurrent = null;

        switch (element) {
            case "peoples":
                current = "/people/";
                refactorCurrent = this._refactorDataPerson;
                break;

            case "planets":
                current = "/planets/";
                refactorCurrent = this._refactorDataPlanets;
                break;

            case "starships":
                current = "/starships/";
                refactorCurrent = this._refactorDataStarships;
                break;

            case "vehicles":
                current = "/vehicles/";
                refactorCurrent = this._refactorDataVehicles;
                break;

            case "person":
                current = `/people/${id}`;
                refactorCurrent = this._refactorDataPerson;
                break;

            case "planet":
                current = `/planets/${id}`;
                refactorCurrent = this._refactorDataPlanets;
                break;

            case "starship":
                current = `/starships/${id}`;
                refactorCurrent = this._refactorDataStarships;
                break;

            case "vehicle":
                current = `/vehicles/${id}`;
                refactorCurrent = this._refactorDataVehicles;
                break;

            default:
                current = "";
                break;
        }

        const result = await this.makeRequest(current);

        const ObjectToShow =
            id === ""
                ? result.results.map(refactorCurrent)
                : refactorCurrent(result);

        return ObjectToShow;
    };

    _refactorDataPerson = person => {
        return {
            id: this.generateID(person),
            image: `${this._baseImageUrl}/characters/${this.generateID(
                person
            )}.jpg`,
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            skinColor: person.skin_color,
            height: person.height
        };
    };

    _refactorDataPlanets = planet => {
        return {
            id: this.generateID(planet),
            image: `${this._baseImageUrl}/planets/${this.generateID(
                planet
            )}.jpg`,
            name: planet.name,
            climate: planet.climate,
            diameter: planet.diameter,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            terrain: planet.terrain
        };
    };

    _refactorDataStarships = starship => {
        return {
            id: this.generateID(starship),
            image: `${this._baseImageUrl}/starships/${this.generateID(
                starship
            )}.jpg`,
            price: starship.cost_in_credits,
            length: starship.length,
            model: starship.model,
            name: starship.name,
            pilots: starship.pilots,
            manufacturer: starship.manufacturer,
            shipClass: starship.starship_class,
            url: starship.url
        };
    };

    _refactorDataVehicles = vehicle => {
        return {
            id: this.generateID(vehicle),
            image: `${this._baseImageUrl}/vehicles/${this.generateID(
                vehicle
            )}.jpg`,
            name: vehicle.name,
            price: vehicle.cost_in_credits,
            length: vehicle.length,
            model: vehicle.model,
            maxSpeed: vehicle.max_atmosphering_speed,
            capacity: vehicle.cargo_capacity,
            url: vehicle.url
        };
    };
}
