import React from 'react';
import App2 from './App2';

class App3 extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      nome : undefined,
      txtNome : ''
    }
    //this.changeNome = this.changeNome.bind(this);
  }

  componentDidMount = ()=>{
    const nome = sessionStorage.getItem('nome');
    if(nome) this.setState({nome});
  }

  changeTxtNome =  (event) => {
    this.setState({txtNome : event.target.value});
  }

  persistTxtName = () =>{
    this.setState({nome: this.state.txtNome});
    sessionStorage.setItem('nome', this.state.txtNome);
  }

  render(){
    const renderForm = () => {

      return (
        <> 
        Nome: <input type='text' value={this.state.nome} onChange={this.changeTxtNome}></input>
        <button onClick={this.persistTxtName}>Salvar</button>
        </>
      );
    }
    
    const renderTxt = () => {
      return (
        <>
        <p>Olá {this.state.nome}</p>
        </>
      );
    }

    return !this.state.nome ? renderForm() : renderTxt();
  }
}

export default App3;
