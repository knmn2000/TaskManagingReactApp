import React from "react";

import { Navbar } from "./components/Navbar";
import AddTask from "./components/AddTask";
import Description from "./components/Description";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="grid">
          <div className="column">
            <Sidebar />
          </div>
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
  );
}

export default App;
