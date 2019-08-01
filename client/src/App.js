import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Results from "./components/Results";
import SavedBooks from "./components/SavedBooks";


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Jumbotron />
                <Switch>
                    <Route exact path="/" component={Results} />
                    <Route exact path="/saved" component={SavedBooks} />
                </Switch>

            </div>
        </Router>
    )
}

export default App;