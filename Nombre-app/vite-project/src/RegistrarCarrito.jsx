import React, {useState} from "react";
import api from "./Services/api";
import './RegistrarUsuarios.css'
function RegistrarUsuarios() {
    const [userId, setUserId] = useState('');
    const [productId, setProductId] = useState('');
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoUsuario = {userId, productId, price, title, description, category, image};
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
                placeholder="UserID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="ProductoID"            
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Precio"           
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Titulo del producto"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Descripcion del producto"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Categoria del producto"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Imagen del producto"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
                <button type="submit">Guardar Usuario</button>

            </form>
        </div>
    )



}
export default RegistrarUsuarios