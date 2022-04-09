const ItemList = (props) => {
    return (
        <>
          <li key={props.item.id}>
          <h2>{props.item.title}</h2>
          <img src={props.item.largeImage} />
        </li>
        </>
    )
}



export default ItemList; 