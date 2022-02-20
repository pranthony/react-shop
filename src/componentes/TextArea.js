class TextArea extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        content: '',
        isEnabled: true
      }
    }
    handleEntry(event){
      const content = event.target.value;
      const isEnabled = event.target.value.length>= 100;
      this.setState({content, isEnabled}) 
    }
    render(){
      return(
        <form onSubmit={(e)=>{e.preventDefault();alert("Enviado...")}}>
          <textarea onChange={this.handleEntry.bind(this)}></textarea>
          <p>{this.state.content.length}</p>
          <button type="submit" disabled={this.state.isEnabled}>Enviar</button>
        </form>
      )
    }
}

export default TextArea;