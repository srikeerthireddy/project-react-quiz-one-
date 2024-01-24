import { Component } from "react";
import './Home.css';

class Home extends Component{
    constructor(){
        super()
     }
     render(){
        return(
            <div className="home">
              <h1 className="heading">Quiz App</h1>
              <button className="btn">Play</button>
            </div>
        )
     }

    }
export default Home;