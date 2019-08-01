import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Results from "./components/Results";

function App(){
    return(
        <div>
            <Navbar />
            <Jumbotron />
            <Results />
        </div>
    )
}

export default App;