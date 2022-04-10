import "../styles/layout/ItemList.scss";

const ItemList = (props) => {
  return (
    <div className="itemContainer">
      <div className="itemContainer__img" key={props.item.id}>
        <img
          className="itemContainer__img--item"
          src={props.item.largeImage}
          alt="color"
        />
      </div>
      <div className="itemContainer__info">
        <p className="itemContainer__info--item">{props.item.title}</p>
      </div>
    </div>
  );
};

export default ItemList;
