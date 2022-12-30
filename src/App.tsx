import { NhostProvider } from "@nhost/react";
import { NhostApolloProvider } from "@nhost/react-apollo";
import React from "react";
import "./App.css";
import { Authors } from "./components/Authors";
import { nhost } from "./utils/nhost";

function App() {
  return (
    <NhostProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <div className="App">
          <div>
            <Authors />
          </div>
        </div>
      </NhostApolloProvider>
    </NhostProvider>
  );
}

export default App;
