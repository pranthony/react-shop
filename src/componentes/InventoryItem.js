export default function InventoryItem(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <hr/>
        </div>
    )
}