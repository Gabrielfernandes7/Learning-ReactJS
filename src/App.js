import './App.css';
import CardProdutoPadaria from './components/CardProduto';
import HelloWorld from './components/HelloWorld';
import Condicional from "./components/Condicional.1";

function App() {
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
    </div>
  )
}

export default App;
