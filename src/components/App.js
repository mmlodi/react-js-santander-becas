import React from 'react';

class App extends React.Component{

    render(){
        return (
          <div>
          <p>Meu primeiro parágrafo em React.</p>
          <p>Meu segundo parágrafo em React.</p>
            <pre>Cansei de parágrafos...</pre>
          <p>{ new Date().toLocaleDateString("pt-BR")}</p>
          </div>
        );
    }
}

export default App;
