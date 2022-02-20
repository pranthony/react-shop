import React, { Component } from 'react'
import Mensajeria from './Mensajeria'

const styles = {
    valid: {background: 'green'},
    invalid: {background: 'red'}
    
}
class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            userValid: false,
            pswValid: false,
            isLogin: false
        }
    }

    validate(value, min, forbiden){
        return value.length>min &&  !value.includes(forbiden) 
    }

    handleChangeUser(event){
        const username = event.target.value;
        const userValid = (this.validate(username, 8, '\\'))
        this.setState({username, userValid}) 
    }
    handleChangePsw(event){
        const password = event.target.value;
        const pswValid = (this.validate(password, 8, '\\'))
        this.setState({password, pswValid}) 
    };
    handleClick(){
        this.setState({isLogin: true})
    }
    render(){
        if (this.state.isLogin){
            return (
                <Mensajeria/>
            )
        }
        return(
            <form>
                <label>Username: </label>
                <input type="text" onChange={this.handleChangeUser.bind(this)} style={this.state.userValid?styles.valid:styles.invalid}/>
                <label>Password</label>
                <input type="password" onChange={this.handleChangePsw.bind(this)} style={this.state.pswValid?styles.valid:styles.invalid}/>
                
                <button onClick={this.handleClick.bind(this)} disabled={!(this.state.pswValid && this.state.userValid)}>Login</button>
                
                {this.state.userValid?'true':'false'}
                {this.state.pswValid?'true':'false'}
            </form>
        )
    }
}
export default Login