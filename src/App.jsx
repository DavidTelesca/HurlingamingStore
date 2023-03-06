import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="ItemList">
        <ItemListContainer greeting={"Bienvenidos a la tienda online de Hurlingaming"} /> </div>
    </div>
  );
};

export default App