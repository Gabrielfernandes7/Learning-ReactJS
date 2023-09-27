import PropType from "prop-types";

function Evento({ numero }) {
    function meuEvento() {
        console.log("Olá mundo");
        alert(`${numero}`);
    }
    return (
        <div>
            <h3>
                Clique para despara meu evento
            </h3>

            <button onClick={meuEvento}>apenas clique</button>
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
