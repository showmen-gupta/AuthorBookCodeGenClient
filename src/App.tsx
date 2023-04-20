import { NhostProvider } from "@nhost/react";
import { NhostApolloProvider } from "@nhost/react-apollo";
import React from "react";
import "./App.css";
import { Authors } from "./components/authors/Authors";
import { Books } from "./components/books/Books";
import { CreateAuthor } from "./components/authors/CreateAuthor";
import { CreateBooks } from "./components/books/CreateBooks";
import { nhost } from "./utils/nhost";
import { UpdateAuthor } from "./components/authors/UpdateAuthor";
import { SideMenu } from "./components/dashboard/SideMenu";

function App() {
  return (
    <NhostProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <div className="App">
          <div className="column is-full">
          <div className="notification">
            <h2 className="title is-2 is-centered"><center>Knowledge Sharing on GraphQL</center></h2>
          </div>
          </div>
          <div className="columns">
            <div className="column">
              <SideMenu/>
            </div>
            <div className="column is-four-fifths">
            <div className="column">
              <CreateAuthor/>
            </div>
            <div className="column">
              <UpdateAuthor/>
            </div>
            <div className="column">
              <Authors />
            </div>
            <div className="column">
              <CreateBooks/>
            </div>
            <div className="column">
              <Books/>
            </div>
            </div>
          </div>
        </div>
      </NhostApolloProvider>
    </NhostProvider>
  );
}

export default App;
