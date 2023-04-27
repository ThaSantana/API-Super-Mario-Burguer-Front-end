import './Fornecedor.css';
import Axios from 'axios'; 
import { Component } from "react";

class Fornecedor extends Component{
    constructor(){
        super()
        this.fornecedor =[]
    }
    Salvar = () =>{
        Axios.post('https://localhost:7097/fornecedor').then(function (response) {
            this.fornecedor=response;
          })
    }
    render(){
    return(
        <>
        <h3>Gostaria de ser um de nossos fornecedores? Basta preencher o furmulário abaixo e entraremos em contato.</h3>
        <form method="post">
            <fieldset className="Formulario">
            <div className="form-cnpj">
                <p><label>CNPJ ou CPF</label></p>
                <input type="text" name='cnpj' maxLength="14" required/>
            </div>
            <div className="form-nome">
                <p><label>Nome da Empresa </label></p>
                <input type="text" name='nome' required/>
            </div>
            <div className="form-email">
                <p><label>E-mail</label></p>
                <input type="email" name="email" required/>
            </div>
            <div className="form-cep">
                <p><label>Cep</label></p>
                <input type="text" name='cep' maxLength="9" placeholder="00000-000" required/>
            </div>
            <div className="form-produto">
                <p><label>Produto Fornecido</label></p>
                <select >
                    <option>Limpeza e Higiêne</option>
                    <option>Alimentos</option>
                    <option>Louças</option>
                    <option>HortiFruti</option>
                </select>
                <p><button type="submit" onClick={this.Salvar}>Enviar</button></p>
            </div>
            </fieldset>
            
        </form>
        </>
    );
}
}
export default Fornecedor;