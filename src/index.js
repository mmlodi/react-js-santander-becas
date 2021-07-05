import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
//import {Lista2, Item} from './components/Lista2'
import Formulario from './components/Formulario';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Formulario title="meu título">


      {/* Lista um dois tres Lorem ipsum
      
      <Item key={999} id={999} completo={false}> 
        teste 01
      </Item> 
      <Item key={1000} id={1000} completo={false}>
        teste 02
      </Item> 
      <Item key={998} id={998} completo={true}>
        teste 02
      </Item> 
      <Item key={997} id={997} completo={false}>
        teste 02
      </Item>  */}
      
    </Formulario>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
