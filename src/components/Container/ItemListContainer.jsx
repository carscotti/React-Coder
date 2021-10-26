import ItemCount from "../ItemCount";

const ItemListContainer = (props) => {
    return (
        <div className="contenedorDivBotonCount">
          <h1>{props.greeting}</h1>
            <ItemCount initial={1} stock={5} />
        </div>
    )
}
;

export default ItemListContainer


