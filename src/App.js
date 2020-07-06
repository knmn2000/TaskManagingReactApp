import React from "react";
import { Navbar } from "./components/Navbar";
import { Description } from "./components/Description";
import { AddTask } from "./components/AddTask";
import { Tasks } from "./components/Tasks";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="grid">
            <div className="column">
              <Tasks />
            </div>
            <div className="column">
              <div className="formgroup">
                <Description />
                <AddTask />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
