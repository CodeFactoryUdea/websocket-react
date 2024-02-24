import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StompSessionProvider } from "react-stomp-hooks";

const App = ({ Component, pageProps }: AppProps) => {
  return (

    <StompSessionProvider
      url={"http://localhost:8090/api/ws-endpoint"}
      //All options supported by @stomp/stompjs can be used here
    >
      <Component {...pageProps} />
    </StompSessionProvider>
    
  )
}

export default App
