import { Passenger } from "@/adapters/passenger";
import flightRipperApi from "@/config/api/flightRipperApi";



const getAllPassengers = async () => {
	try {
		const response = await flightRipperApi.get<Passenger[]>(
			'/passenger/get-all-passengers'
		)

        console.log(response);
        
		return response.data
	} catch (error) {
		console.log("Error direct on fetch categories", error);
		throw error;
	}
}

export {
    getAllPassengers
}
