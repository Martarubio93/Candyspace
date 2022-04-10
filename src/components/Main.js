import "../styles/layout/Main.scss";
import ItemList from "./ItemList";

const Main = (props) => {
  const renderList = () => {
    return props.dataFromApi.map((item, index) => {
      return <ItemList key={index} item={item} />;
    });
  };
  return (
    <main>
      <div className="mainContainer">{renderList()}</div>
    </main>
  );
};

export default Main;
