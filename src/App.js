import './App.css';
import React from 'react';
import BasicCard from './Greating';

import Clock from './Clock';
import Header from './Header';
//import InventoryItem from './InventoryItem';


const styles = {
  body:{
    background: "black",
    color: "white", 
    width:"330px", 
    margin: "30px auto",
    display: "grid",
    placeContent: "center"
  }, 
  container: {
    display: "flex",
    flexWrap: "wrap"
    
  }
}

let products = [
  {name: "shoes", price: 12.2, categoria: "ropa", description: "For every ocation"},
  {name: "pants", price: 80.2, categoria: "ropa", description: "In all sizes"},
  
]
class App extends React.Component{
  /* constructor(){
    super()
  } */
  render(){
    return(
      
      <div
        className="Example"
        style = {styles.body}
        id = "my-element">
        
        
        <Header title="coolbox"/>
        {products.map(e =>{
          return(
            <div
              style={styles.container}>
              <BasicCard 
                name={e.name} 
                price={e.price}
                description={e.description}
                categoria={e.categoria}
                />
              <br/>
            </div>
            )
        })}
          

        <Clock/>
      </div>
    )
  }
}

export default App;
