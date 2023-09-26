import stylesProduto from "../components/CardProduto.css";
function CardProdutoPadaria({nomeDoProduto, preco, urlImagemProduto, descricaoImagem}) {
    return (
        <div className={stylesProduto}>
            <div class="card">
                <img src={urlImagemProduto}
                    alt={descricaoImagem}
                    height="200px"
                    className="imagem-produto"
                />
                <h3>{nomeDoProduto}</h3>
                <h3>{preco}</h3>
            </div>
        </div>
    );
}

export default CardProdutoPadaria;