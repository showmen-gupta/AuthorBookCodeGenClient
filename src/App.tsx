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
          <div className="container column is-three-fifths">
          <div className="notification is-primary">
            <h2 className="title is-2 is-centered"><center>Knowledge Sharing on GraphQL</center></h2>
          </div>
          </div>
          <div className="column is-three-fifths center">
            <CreateAuthor/>
          </div>
          <div className="column is-three-fifths center">
            <Authors />
          </div>
          <div className="column is-three-fifths center">
            <CreateBooks/>
          </div>
          <div className="column is-three-fifths center">
            <Books/>
          </div>
        </div>
      </NhostApolloProvider>
    </NhostProvider>
  );
}

export default App;
