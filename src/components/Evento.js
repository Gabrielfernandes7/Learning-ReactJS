import PropType from "prop-types";
import Button from "./evento/Button";

function Evento() {
    
    const meuEvento = () => {
        console.log("ativando o primeiro evento");
    }

    function meuSegundoEvento() {
        console.log("ativando o segundo evento");
    }

    return (
        <div>
            <h3>
                Clique para despara meu evento
            </h3>

            <Button
                event={meuEvento}
                text="primeiro evento"
            />

            <Button
                event={meuSegundoEvento}
                text="segundo evento"
            />
        </div>
    );
}

Evento.propType = {
    numero: PropType.number,
}

Evento.defaultProp = {
    numero: 0,
}

export default Evento;
