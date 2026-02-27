import React, {useState} from "react";
import api from "./Services/api";
import './RegistrarUsuarios.css'
function RegistrarUsuarios() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoUsuario = {nombre, apellido, email, telefono, direccion};
        try{
            const respuesta= await api.post('/users', nuevoUsuario)
            console.log(respuesta.data);
            alert('¡Usuario guardado con exito!');
        }
        catch(error){
            console.error('Error al guardar el usuario:', error);
            
        }

    }
    return(
        <div className="registrar-container">
            <h2>Registrar Usuario</h2>
            <form className="registrar-form" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Apellido"            
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                />
                <input 
                type="email" 
                placeholder="Email"           
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input  
                type="text"
                placeholder="Telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                />
                <input 
                type="text"
                placeholder="Direccion"
                value={direccion}       
                onChange={(e) => setDireccion(e.target.value)}
                />
                <button type="submit">Guardar Usuario</button>

            </form>
        </div>
    )



}
export default RegistrarUsuarios