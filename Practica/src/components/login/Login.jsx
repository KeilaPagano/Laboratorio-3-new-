import { useState } from "react";

const Login = () => {
    const [input, setInput] = useState("");
    
    const inputHandler = (e) => {
        const inputContent = e.target.value;
        if (inputContent.includes("o") || inputContent.includes("O")){
            alert("No debe contener la letra o/O minuscula o mayuscula");
        }
        else{
            setInput(inputContent)
        }
    }

    const oAlert = () => {
        if (input == "")
        {
            alert("Ingrese un nombre de usuario por favor");
        } 
        else if (input.includes("o") || input.includes("O"))
        {
            alert("Usuario invalido para registrarse");
        }
        else
        {
            alert(`Usuario ${input} registrado correctamente`);
        }
    }

return (
    <div>
        <p>Ingrese su nombre de usuario</p>
        <input
            value={input}
            placeholder="Nombre de usuario"
            onChange={inputHandler}
        />
        
        <button onClick={oAlert}>Registrarse</button>
        <p>Su nombre de usuario es: {input}</p>
    </div>
    )
}

export default Login






























































