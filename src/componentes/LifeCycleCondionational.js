import React from 'react'

class LifeCycleConditional extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        console.log("Saludos desde el componente condicinal")
    }
    fakeApi(){
        setTimeout(() => {
            propiedad:1
        }, 8000);
    }
    componentDidMount(){
        const datos = this.fakeApi()
        console.log()
        console.log('mount')
    }
    componentDidUpdate(){
        console.log('update')
    }
    render(){
        return <p>LifeCycleConditional</p>
    }
}
export default LifeCycleConditional