import React, {Component} from "react";
import API from "./utils/API";
import { Link } from "react-router-dom";

class Results extends Component{
    constructor(){
        super()
        this.state = {
            books: [],
            title: "",
            author: "",
            description: ""
        };
    }

componentDidMount() {
    this.loadBooks();
}

loadBooks = () => {
    API.getbooks().then(res => 
        this.setState({books: res.data, title: "", author: "", description: ""})

    )
    .catch(err =>console.log(err));
}


    render() {
        return(
            <div>Searched Books</div>
        )
    }
    }
   
export default Results;