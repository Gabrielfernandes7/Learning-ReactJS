function SeuNome({ setName }) {
    return (
        <div>
            <h2>Digite seu nome</h2>
            <input 
                type="text" 
                placeholder="qual é o seu nome ?"
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}

export default SeuNome;