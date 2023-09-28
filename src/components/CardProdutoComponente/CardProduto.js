import PropType from 'prop-types';
import stylesProduto from "../CardProdutoComponente/CardProduto.css"
function CardProdutoPadaria({nomeDoProduto, preco, urlImagemProduto, descricaoImagem}) {
    return (
        <>
            <div className={stylesProduto}>
                <div className="card">
                    <img src={urlImagemProduto}
                        alt={descricaoImagem}
                        height="200px"
                        className="imagem-produto"
                    />
                    <h3>{nomeDoProduto}</h3>
                    <h3>{preco}</h3>
                </div>
            </div>
        </>
    );
}

CardProdutoPadaria.prototype = {
    nomeDoProduto: PropType.string,
    preco: PropType.number,
    urlImagemProduto: PropType.string,
    descricaoImagem: PropType.string,
}

CardProdutoPadaria.defaultProps = {
    nomeDoProduto: "Faltou o nome do produto",
    preco: 0.0,
    urlImagemProduto: "Faltou a URL da imagem",
    descricaoImagem: "Faltou a descrição da imagem",
}

export default CardProdutoPadaria;