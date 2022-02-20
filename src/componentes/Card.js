import React from 'react';
class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isFliped: false
        }
    }
    handleClick(){
        if(!this.state.isFliped)this.setState({isFliped: true})

    }
    render(){
        return(
            <div onClick={this.handleClick.bind(this)} className="card" style={{width:100, height:100, border:"1px solid", display:"grid", placeItems:"center", margin:10}}>
                {this.state.isFliped && <div className="cardField">{this.props.number}</div>}
            </div>
        )
    }
}
export default Card