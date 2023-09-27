import { useState } from "react";

function Formulario() { 
    function cadastrarUsuario(event) {
        /*
            Mesmo após o cadastro e mesmo depois de clicar no botão
            o que está escrito no nosso input continua por lá
        */
       console.log(name)
        event.preventDefault();
        console.log("Cadastrou usuário")
    }

    const [name, setName] = useState("");
    const [password, setpassword] = useState("")

    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                    />
                </div>

                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    );
}

export default Formulario;