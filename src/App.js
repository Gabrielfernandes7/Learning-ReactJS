import './App.css';
import { useState } from 'react';
import CardProdutoPadaria from './components/CardProdutoComponente/CardProduto';
import HelloWorld from './components/HelloWorld';
import Condicional from "./components/Condicional";
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {
  const [name, setName] = useState();
  const meusItem = [];

  return (
    <div className="App">
      <HelloWorld />

      <CardProdutoPadaria 
        nomeDoProduto="Cupcake"
        preco="R$ 33.90"
        descricaoDoProduto="Cupcake imagem"
        urlImagemProduto="https://img.freepik.com/vetores-gratis/cupcake-vetorizado-coberto-com-sobreposicao-de-adesivo-de-cereja-maraschino-com-uma-borda-branca_53876-170386.jpg?t=st=1695735486~exp=1695736086~hmac=2cef72cb91c0448c2083e1923bb4c936a568f246460e179a7d20541ece79d038"
      />

      <CardProdutoPadaria 
        nomeDoProduto="Pao"
        preco="R$ 0.90"
        descricaoDoProduto="Cupcake imagem"
        urlImagemProduto="https://cdn.2rscms.com.br/imgcache/5054/uploads/5054/layout/Linha%20Gold%20Paes/pao-frances-12h-gg.png.webp"
      />

      <h1>Renderização condicional</h1>
      <Condicional />

      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItem} />

      <h1>State lift</h1>
      <SeuNome setName={setName}/>
      <Saudacao name={name}/>

    </div>
  )
}

export default App;
