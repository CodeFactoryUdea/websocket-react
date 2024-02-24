import { Passenger } from '@/adapters/passenger';
import { useFetchAllPassengers } from '@/hooks/useFetchAllPassengers';
import React, { useEffect, useState } from 'react'
import { useSubscription } from 'react-stomp-hooks';


const Suscriber = () => {


  const [message, setMessage] = useState("");
  const [cuentaPeticiones, setCuentaPeticiones] = useState(0)

  const { fetchAllPassengers, passengers, setPassengers } = useFetchAllPassengers()

  //canal donde se suscribe
  useSubscription('/topic/reply', (message) => {
    setMessage(message.body)
    setCuentaPeticiones(cuentaPeticiones + 1)

  });

  useSubscription('/topic/passengers', (message) => {
    const passenger: Passenger = JSON.parse(message.body);
    setPassengers([...passengers, passenger]);
  });

  useEffect(() => {
    fetchAllPassengers()
  }, [])

  return (
    <>
      <div>Suscriber, message received: {message}
        <p>cantidad de peticiones: {cuentaPeticiones}</p>
      </div>

      <div className="main">
        <h2 className="title-my">Lista de Pasajeros</h2>
        <ul className="list">
          {passengers.map((passenger) => (
            <li className="passengers" key={passenger.id}>{passenger.document} - {passenger.fullName}</li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default Suscriber