function Saudacao({ name }) {
    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, chama`
    }

    return (
        <>
            <p>{ name ? (
                gerarSaudacao(name)
            ) : (
                <div>
                    <h3>Sem nome, Meu fi</h3>
                </div>
            )}
            </p>
        </>
    )
}

export default Saudacao;