import '../styles/layout/ItemList.scss'

const ItemList = (props) => {
  return (
    <div className="itemContainer">
      <div className="itemContainer__img" key={props.item.id}>
        <img className="itemContainer__img--item" src={props.item.largeImage} />
      </div>
      <div className="itemContainer__info">
        <h2 className="itemContainer__info--item">{props.item.title}</h2>
      </div>
    </div>
  );
};

export default ItemList;
