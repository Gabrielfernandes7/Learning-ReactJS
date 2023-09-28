import { useState } from "react";

export function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        console.log(`Está funcionando: ${email}`);
        setUserEmail(email);
    }

    function limparEmail() {
        setUserEmail("");
    }


    return (
        <div>
            <form>
                <input
                    type="email"
                    placeholder="Digite o seu e-mail"
                    onChange={(e) => setEmail(e.target.value)} />

                <button type="submit" onClick={enviarEmail}>
                    Enviar email
                </button>
                { userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail} </p>
                        <button onClick={limparEmail}>
                            Limpar email
                        </button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional;
