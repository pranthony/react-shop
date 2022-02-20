import React from "react"

class Evento extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen : true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleSubmit(){
        this.setState((prevState, props)=>({
            isOpen: !prevState.isOpen
        }))
    }
    handleClick(){
        this.setState((prevState)=>({
            isOpen: !prevState.isOpen
        }))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Change"/>
                </form>
                <button onClick={this.handleClick}>Change Async</button>     
                <h3>{this.state.isOpen?'OPEN':'CLOSE'}</h3>
            </div>
        )
    }
}

export default Evento;