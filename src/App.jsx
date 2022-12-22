import "./styles.css"; //ESTILOS CSS DE LA APP
import NavBar from "./components/NavBar"; //COMPONENTES DEL NAVBAR
import { ItemListContainer } from "./components/ItemListContainer"; //CONTENEDOR DEL CARTWIDGET


export default function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    </>
  );
}
