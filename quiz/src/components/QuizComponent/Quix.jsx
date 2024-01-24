import { Component } from "react";
import './Quiz.css';

class Quix extends Component{
    constructor(){
        super()
     }
     render(){
        return(
            <div className="main-container">
                <div className="white-back">
              <h1 className="head">Question</h1>
              <p className="num">1 of 15</p>
              <p className="para">Which is the only mammal that can jump?</p>
              <div className="main">
              <div className="display">
              <button className="dog">Dog</button>
              <button className="ele">Elephant</button>
              </div>
              <div className="display1">
                <button className="goat">Goat</button>
                <button className="lion">Lion</button>
              </div>
              </div>
              <div className="footer">
                <button className="blue">Previous</button>
                <button className="green">Next</button>
                <button className="red">Quit</button>
              </div>
              </div>

            </div>
        )
     }

    }
export default Quix;