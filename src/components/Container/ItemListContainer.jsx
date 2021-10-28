import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';

const ItemListContainer = (props) => {
    const [users, setUsers] = useState([])
    console.log(users)

    //const getUsers = fetch ("https://jsonplaceholder.typicode.com/users")
    //va  hacer un pedido fetch a determinada dirección

    const getUser = async() => {
        //se le indica que la función es asincrónica
        const data = await fetch ("https://jsonplaceholder.typicode.com/users")
            //le vamos a pedir que espere a que se resuelvav el pediod fetch de esta dirección, y cando se resuelva, que lo guarde en data porque estamos definiendo la variable para eso.
        const dataUsers = await data.json()
        setUsers(dataUsers)
        }

    useEffect(() => {
        setTimeout (()=> getUser(), 2000)
        //le pido que me ejecute la función y que la demora sea de 5 segundos
    }
   , [])


    // const handleClick=(counter) => {
    //     alert (`La cantidad agregada es ${ counter }`)

    //     //fetch con async y await
    // }
    // return (
    //     <div className="contenedorDivBotonCount">
    //       <h1>{props.greeting}</h1>
    //         <ItemCount initial={1} stock={5} onAdd={handleClick} />
    //         <ItemList users={ users }/>
    //     </div>
    // )
    

    return (
        <div className="contenedorDivBotonCount">
          <h1>{props.greeting}</h1>
            <ItemCount initial={1} stock={5}  />
            <ItemList/>
        </div>
    )
}
;

export default ItemListContainer


//Tiene que tener el Delay porque va a recibir la promesa.  ItemList construye los items a través del ítem de la prop. Hago la promesa, le pongo el delay y escribo en itemlistcontainer.

