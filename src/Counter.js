import React, {Component} from "react"

class Counter extends Component{
    constructor(){
        super()
        this.title = "ReactApp"
        this.state = {
            clickCounter: 0  
        }
    }
    renderClickCount(){
        <p>The button has been clicked {this.state.clickCounter} times</p>
    }
    render(){
        return(
            <div>
                <h1>{this.title}</h1>
                <br/>
                {this.state.clickCounter}
            </div>

        )
    }
}

export default Counter;