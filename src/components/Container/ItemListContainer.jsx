
import ItemCount from "../ItemCount";

const ItemListContainer = (props) => {
    const handleClick=(total) => {
        alert('La cantidad agregada es ${total}')
    }
    return (
        <div className="contenedorDivBotonCount">
          <h1>{props.greeting}</h1>
            <ItemCount initial={1} stock={5} onAdd={handleClick} />
        </div>
    )
}
;

export default ItemListContainer


