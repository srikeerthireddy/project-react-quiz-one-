import { Component } from "react";
import './Result.css';

class Result extends Component{
    constructor(){
        super()
     }
     render(){
        return(
            <div className="class-container">
              <h1 className="result">Result</h1>
              <div className="white-box">
                <h3 className="practice">You need more practice!</h3>
                <h1 className="bold">Your score is 20%</h1>
                <div className="questions">
                <div className="question1">
                    <h3 className="que1">Total number of questions</h3>
                    <h3 className="num1">15</h3>
                    </div>
                    <div className="question2">
                    <h3 className="que2">Number of attempted questions</h3>
                    <h3 className="num2">9</h3>
                    </div>
                    <div className="question3">
                    <h3 className="que2">Number of correct questions</h3>
                    <h3 className="num3">3</h3>
                    </div>
                    <div className="question4">
                    <h3 className="que3">Number of correct answers</h3>
                    <h3 className="num3">6</h3>
                    </div>
                    
                    </div>
                    <div className="foot">
                <button className="play">PlayAgain</button>
                <button className="back">Back to home</button>
              </div>
                
              </div>
              
            </div>
        )
     }

    }
export default Result;