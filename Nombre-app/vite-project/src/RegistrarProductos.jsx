import React, {useState} from "react";
import api from "./Services/api";
import './RegistrarProductos.css'
function RegistrarProductos() {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState();
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoProducto = {title, price, description, category, image};
        try{
            const respuesta= await api.post('/products', nuevoProducto)
            console.log(respuesta.data);
            alert('¡Producto guardado con exito!');
        }
        catch(error){
            console.error('Error al guardar el producto:', error);
            
        }

    }
    return(
        <div className="registrar-container">
            <h2>Registrar Producto</h2>
            <form className="registrar-form" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                type="number" 
                placeholder="Precio"            
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="Descripción"           
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <input  
                type="text"
                placeholder="Categoría"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                />
                <input 
                type="text"
                placeholder="Imagen"
                value={image}       
                onChange={(e) => setImage(e.target.value)}
                />
                <button type="submit">Guardar Producto</button>

            </form>
        </div>
    )



}
export default RegistrarProductos