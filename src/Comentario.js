//import { handleBreakpoints } from '@mui/system'
import React from 'react'
const style = {
    display: "flex",
    alignItems:"center",
    gap:"10px"
}

const Comentario = (props)=>{
    const [hide, setHide] = React.useState(false);
    return(
        <div >
            <div style={{border:"1px solid", width:'450px', padding: "10px"}}>
                <div style={style}>
                <img src={props.comentario.image} alt={props.comentario.name}
                    style={{borderRadius:"50%", width:'50px', height:'50px'}}
                />
                    <h3>{props.comentario.name}</h3>
                    <i>{props.comentario.time}</i>
 
                </div>
                <p>{props.comentario.text}</p>
                <div style={{display:"flex", justifyContent:"flex-end"}}>
                    {props.comentario.comments && <button onClick={()=> setHide(!hide)}>Respuestas</button>}
                </div>
            </div>

            {(props.comentario.comments && hide)&&
                props.comentario.comments.map((e, i)=>{
                    return(
                    <div key={i+'1'} style={{marginLeft:"0px", display:'flex'}}>
                        <h1>------</h1>
                        <Comentario comentario={e} />
                    </div>
                    ) 
                })
            }
        
        </div>
        
    )
}
export default Comentario