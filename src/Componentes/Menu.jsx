import { Link } from "react-router-dom";
import './Menu.css'
const Menu =() =>{
    return(
        <div>
            <h1>Super Mário Burguer</h1>
            <div className="Menu">
                <Link to="/" style={{color:"#ffffff"}}>Home</Link>
                <Link to="/cardapio" style={{color:"#ffffff", padding:"8px"}}> Cardapio</Link>
                <Link to="/fornecedor" style={{color:"#ffffff"}}> Seja um Fornecedor</Link>
            </div>
        </div>
    );
}
export default Menu;