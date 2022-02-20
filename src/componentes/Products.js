import BasicCard from './Greating';
import Clock from './Clock';
import Header from './Header';
//import InventoryItem from './InventoryItem';

const styles = {
  body:{
    background: "black",
    color: "white", 
    width:"90%", 
    margin: "30px auto",
    display: "grid",
    placeContent: "center"
  }, 
  container: {
    display: "flex",
    flexWrap: "wrap"
    
  },
  card:{
    margin: "10px"
  }
}

let products = [
  {id:"1" ,name: "shoes", price: 12.2, categoria: "ropa", description: "For every ocation"},
  {id:"2" ,name: "pants", price: 80.2, categoria: "ropa", description: "In all sizes"},
  
]
class Producto extends React.Component{
  /* constructor(){
    super()
  } */
  render(){
    return(
      
      <div
        className="Example"
        style = {styles.body}
        id = "my-element">
        
        
        <Header title="Coolbox"/>
        <div
          style={styles.container}>
          {products.map(e =>{
            return(
              <div
                key={e.id}
                style={styles.card}>
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
        </div>
          

        <Clock/>
      </div>
    )
  }
}
export default Producto;
