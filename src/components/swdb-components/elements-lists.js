import WithData from "../hoc/withData";
import ElementsList from "../elements/elements-list/elements-list";
import ServerApi from "../../serverApi/server-api";

const serverApi = new ServerApi();

const PeopleList = WithData(ElementsList, () => serverApi.get("peoples"));
const PlanetsList = WithData(ElementsList, () => serverApi.get("planets"));
const StarshipsList = WithData(ElementsList, () => serverApi.get("starships"));
const VehiclesList = WithData(ElementsList, () => serverApi.get("vehicles"));

export { PeopleList, PlanetsList, StarshipsList, VehiclesList };
