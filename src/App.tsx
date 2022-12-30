import { NhostProvider } from "@nhost/react";
import { NhostApolloProvider } from "@nhost/react-apollo";
import React from "react";
import "./App.css";
import { Authors } from "./components/Authors";
import { Books } from "./components/Books";
import { CreateAuthor } from "./components/CreateAuthor";
import { CreateBooks } from "./components/CreateBooks";
import { nhost } from "./utils/nhost";

function App() {
  return (
    <NhostProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <div className="App">
          <h1>Author Book App Graphql Code Gen</h1>
          <div>
            <CreateAuthor/>
          </div>
          <div>
            <Authors />
          </div>
          <div>
            <CreateBooks/>
          </div>
          <div>
            <Books/>
          </div>
        </div>
      </NhostApolloProvider>
    </NhostProvider>
  );
}

export default App;
