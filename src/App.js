import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Container/ItemListContainer'

function App() {
return (
  <div>
 <NavBar />
 <ItemListContainer greeting='Hola, soy list container' />
 </div>
 )
}

export default App;
