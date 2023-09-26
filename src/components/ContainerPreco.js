function PrecoDoPao() {
    function precoDosPaes(quantidade) {
        return (quantidade * 0.55);
    }
    
    const imagemPao = 'https://cdn.2rscms.com.br/imgcache/5054/uploads/5054/layout/Linha%20Gold%20Paes/pao-frances-12h-gg.png.webp';
    return (
        <div>
            <img src={imagemPao} alt='Imagem de pão' height="200px"/>
            <h1>O preço total de pães é: </h1>
            <h2>{precoDosPaes(10)}</h2>
        </div>
    );
}

export default PrecoDoPao;