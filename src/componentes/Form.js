class Form extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        username: '',
        password: '',
        passwordConfirmation: '',
        email : '',
        errors: []
      }
      this.handleBlur = this.handleBlur.bind(this)
    }
    displayForm(){
        return(
          <div>
            Username : <input type="text" onBlur={this.validateUsernameOnBlur.bind(this)}/><br/>
            Password : <input type="text" onBlur={this.handleBlur}/><br/>
            ConfirmP : <input type="text" onBlur={this.handleBlur}/><br/>
            Email : <input type="text" onBlur={this.handleBlur}/><br/>
            <br/>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        )
    }
    handleSubmit(event) {
      event.preventDefault()
      console.log("That's", event)
    }
    handleBlur(event){
      if(event.target.value!==''){
        this.setState({
          username: event.target.value
        })
      }else(
        console.log('Invalid')
      )
    }
    validateNotEmpty(fName, value){
      if(!value.length) return `${fName} must be filled out.`
      
    }
    validateUsernameOnBlur(event){
      const username = event.target.value;
      const errors = this.state.errors;
      errors.push(this.validateNotEmpty('Username', username))
      this.setState({username, errors})
    }
    
    displayErrors(){
      return(
        <div className='errors' style={{color:"red"}}>
          {this.state.errors.map((err, i)=><span key={`err-${i}`}>{err} </span>)}
        </div>
      )
    }
    
    render(){
      return(
        <div>
          <h3>Create Account</h3>
          <hr/>
          {this.displayErrors()}
          <br/>
          {this.displayForm()}<br/>
        </div>
      )
    }
  }

export default Form;