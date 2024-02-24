import React from 'react'
import { useStompClient } from 'react-stomp-hooks';

const Publisher = () => {

    const stompClient = useStompClient();

    const publishMessage = () => {
        if (stompClient) {
            stompClient.publish({ destination: '/app/broadcast', body: 'Hello World' })
        }
    }

    return (
        <button onClick={publishMessage}>
        Click Me
      </button>
    )
}

export default Publisher