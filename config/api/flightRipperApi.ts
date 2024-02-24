import axios from "axios";
import CONFIGS from "../config";

const flightRipperApi = axios.create({
    baseURL: CONFIGS.FLIGHT_RIPPER.BASE_URL,
    timeout: CONFIGS.REQUEST_TIMEOUT_MS,
})

// aquí puedes agregar interceptores



export default flightRipperApi