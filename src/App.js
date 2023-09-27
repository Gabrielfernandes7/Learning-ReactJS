import './App.css';
import CardFalaNome from './components/CardFalaNome';
import CardProdutoPadaria from './components/CardProduto';
import PrecoDoPao from './components/ContainerPreco';
import HelloWorld from './components/HelloWorld';

import './components/CardProduto.css';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      
      <CardFalaNome />

      <PrecoDoPao />

      <CardProdutoPadaria 
        nomeDoProduto="Cupcake"
        preco="R$ 33.90"
        descricaoDoProduto="Cupcake imagem"
        urlImagemProduto="https://img.freepik.com/vetores-gratis/cupcake-vetorizado-coberto-com-sobreposicao-de-adesivo-de-cereja-maraschino-com-uma-borda-branca_53876-170386.jpg?t=st=1695735486~exp=1695736086~hmac=2cef72cb91c0448c2083e1923bb4c936a568f246460e179a7d20541ece79d038"
      />
    </div>
  )
}

export default App;
