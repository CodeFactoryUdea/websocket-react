import { Passenger } from "@/adapters/passenger"
import { getAllPassengers } from "@/service/passenger.service"
import { useState } from "react"


export const useFetchAllPassengers = () => {

    const [passengers, setPassengers] = useState<Passenger[]>([])

    const fetchAllPassengers = async () => {
        console.log("Llamando a la api...");
        try {
            const response = await getAllPassengers()
            setPassengers(response)
        } catch (error) {
            throw error;
        }
        
    }


    return {
        fetchAllPassengers,
        passengers,
        setPassengers
    }
}