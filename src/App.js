import './App.css';
import React from 'react';
import Comentario from './Comentario';

const all = {
  "comments": [
    {
      "name": "John Smith",
      "text": "This is an awesome page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
      "image": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
      "time": "Oct 02, 2019",
      "comments": [
        {
          "name": "Karen Michaels",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
          "image": "https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?auto=format&fit=crop&w=200&q=80",
          "time": "Oct 10, 2019"
          
        },
        {
          "name": "Tim Parker",
          "text": "Tullam elementum vulputate lectus sed pellentesque. Maecenas convallis orci at elit consectetur tempus ac id.",
          "image": "https://images.unsplash.com/photo-1505247964246-1f0a90443c36?auto=format&fit=crop&w=200&q=80",
          "time": "Oct 05, 2019"
        }
      ]
    },
    {
      "name": "Sarah James",
      "text": "Nice! Nullam elementum vulputate lectus sed pellentesque. Maecenas convallis orci at elit consectetur tempus ac id.",
      "image": "https://images.unsplash.com/photo-1552607676-17f088307dce?auto=format&fit=crop&w=200&q=80",
      "time": "Sept 22, 2019"
    }
  ]
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  
  render(){
    return(
      <div style={{display: "grid", placeContent:""}}>
        {all.comments.map((e, i)=>{
          return (
          <div key={i} >
            <Comentario comentario={e} />
            <br/>
          </div>
          )
        })}
      </div>
    )
  }
}

export default App;
