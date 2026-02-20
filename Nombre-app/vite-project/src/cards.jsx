import PropTypes from 'prop-types'; 
import { useEffect, useState } from "react";
import './cards.css';
import api from './Services/api';

import imgCard1 from './assets/harry.png';
import imgCard2 from './assets/ssong.png';
import imgCard3 from './assets/jos.png'; 
import Card1 from './assets/selena.png'    
import Card2 from './assets/taylor.png';
import Card3 from './assets/sabrina.png';
import Card4 from './assets/bad.png';
import Card5 from './assets/dua.png';
import Card6 from './assets/lana.png';
import editarIcon from './assets/Usuarios/editar.png';
import eliminarIcon from './assets/Usuarios/eliminar.png';
import PromosContenedor from './PromosContenedor'
import MapaGeolocalizacion from './MapaGeolocalizacion';
import Mapa from './Mapa';


function Target(props){
    return(
        <div className='card'>
            <img src={props.imagen} alt={props.name} />
            <h1>{props.name}</h1>
            <p>{props.descripcion}</p>
            <a href="#">Leer más</a>
            {props.saludarFunc && <button onClick={props.saludarFunc}>Saludar</button>}
        </div>
    )
}

function Inicio(){
    return( 
    <div>
         <h2>Bienvenido a la página de Inicio</h2>
    <h1>Descubre un lugar donde la creatividad, el talento y la inspiración se unen.
Nuestra página está diseñada para mostrar a personas increíbles, proyectos únicos y contenido que conecta contigo.

Explora nuestras secciones, conoce más sobre nosotros y disfruta de una experiencia visual pensada especialmente para ti.</h1>
    </div>
    );
}

function AcercaDe(){
    return (
        <div>
            <h2>Acerca De Nosotros</h2>
            <h1>
                Somos un espacio creado para destacar el talento, el talento, la creatividad y la pasión por el arte y el entretenimiento. Nuestro objetivo es compartir contenido inspirador y acercarte a personas que han dejado huella en la música, la actuación y la cultura actual.

                Creemos en la importancia de la expresión, la autenticidad y el impacto que el arte puede tener en las personas. Por eso, trabajamos para ofrecer una experiencia visual atractiva y fácil de explorar.

                Gracias por formar parte de nuestra comunidad 💖
            </h1>
        </div>
    );
}


function Productos() {
    const [productos, setProductos] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        const obtenerProductos = async () => {
            try{
                const response = await api.get("products");
                setProductos(response.data);
            } catch (error){
                console.error('Error al obtener los productos:', error);
            } finally{
                setLoading(false);
            }
        };
        obtenerProductos();
    }, [])
    if (loading) {
        return <p>Cargando productos...</p>
    } 
    return (
        <div>
            <main className='classmain'>
                <header>
                    <h1>Nuestro catalogo</h1>
                </header>
                {productos.map((producto)=>(
                    <article key={producto.id} className='classArticle'>
                        <p>{producto.title}</p>
                        <p>{producto.description}</p>
                        <img src={producto.image} alt={producto.title} className='classImg'/>
                        <p>${producto.price}</p>

                    </article>
                ))}
            </main>
        </div>
      
    );
}


function Galeria(){
    return(
        <div className='cardsDiv'> 
            <Target 
                name='Harry Styles' 
                descripcion='Cantante de Inglaterra' 
                imagen={imgCard1} 
            />
            <Target 
                name='Song Kang' 
                descripcion='Actor surCoreano' 
                imagen={imgCard2} 
            />
            <Target 
                name='Jos Canela' 
                descripcion='Cantante e Integrante de cd9' 
                imagen={imgCard3} 
            />
             <Target 
                    name='Selena Gomez'
                    descripcion='Cantante y actriz pop estadounidense'
                    imagen={Card1}
                />
                <Target 
                    name='Taylor Swift'
                    descripcion='Cantante y compositora internacional'
                    imagen={Card2}
                />
                <Target 
                    name='Sabrina Carpenter'
                    descripcion='Cantante y actriz del pop moderno'
                    imagen={Card3}
                />
                <Target 
                    name='Bad Bunny'
                    descripcion='Artista urbano puertorriqueño'
                    imagen={Card4}
                />
                <Target 
                    name='Dua Lipa'
                    descripcion='Cantante pop británica'
                    imagen={Card5}
                />
                <Target 
                    name='Lana Del Rey'
                    descripcion='Cantante alternativa y compositora'
                    imagen={Card6}
                />
            
        </div>
    );
}

function Sucursales(){
    const sucursales = [
        {
            id: 1,
            nombre: 'GNP Seguros CDMX',
            lat: 19.405351,
            lng: -99.096035,
            promo: '10% en tu primer seguro'
        },
        {
            id: 2,
            nombre: 'Sucursal Puebla',
            lat: 19.07580345719797,
            lng: -98.16623252710241,
            promo: '2x1 en revisiones'
        },
        {
            id: 3,
            nombre: 'Sucursal Monterrey',
            lat: 25.686,
            lng: -100.316,
            promo: 'Hasta 30% en paquetes'
        }
    ]
    
    return (
        <div className="sucursales-container">
            <h2>Nuestras Sucursales</h2>

            <div className="sucursalesGrid">
                {sucursales.map((s) => (
                    <div key={s.id} className="sucursalCard">
                        <h3>{s.nombre}</h3>
                        <p>{s.promo}</p>
                        <Mapa lat={s.lat} lng={s.lng} nombre={s.nombre} />
                    </div>
                ))}
            </div>

            <MapaGeolocalizacion />
            
        </div>
    );
}

function Contacto(){
   const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos guardados:", formData);

        alert("Mensaje enviado correctamente ✨");

        setFormData({
            nombre: "",
            email: "",
            mensaje: ""
        });
    };

    return (
        <div className="contacto-container">
            <h2>Contacto</h2>

            <form className="contacto-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Tu correo"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="mensaje"
                    placeholder="Escribe tu mensaje..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Enviar mensaje</button>
            </form>
        </div>
    );
}

function Usuarios(){
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const obtenerUsuarios = async () => {
            try{
                const response = await api.get("users");
                setUsuarios(response.data);
            } catch (error){
                console.error('Error al obtener los usuarios:', error);
            } finally{
                setLoading(false);
            }
        };
        obtenerUsuarios();
    }, [])
    
    if (loading) {
        return <p>Cargando usuarios...</p>
    }
    
    const handleEditar = (usuario) => {
        console.log('Editar usuario:', usuario);
    }
    
    const handleEliminar = (id) => {
        console.log('Eliminar usuario con ID:', id);
    }
    
    return (
        <div>
            <h1>Gestión de Usuarios</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Dirección</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario)=>(
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.name.firstname}</td>
                            <td>{usuario.name.lastname}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.phone}</td>
                            <td>{usuario.address.street}, {usuario.address.city}</td>
                            <td>
                                <button 
                                    onClick={() => handleEditar(usuario)}
                                    title="Editar"
                                >
                                    <img src={editarIcon} alt="Editar" style={{width: '20px', height: '20px'}} />
                                </button>
                            </td>
                            <td>
                                <button 
                                    onClick={() => handleEliminar(usuario.id)}
                                    title="Eliminar"
                                >
                                    <img src={eliminarIcon} alt="Eliminar" style={{width: '20px', height: '20px'}} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


function ContenedorCards({ vista }){
    
    const vistas = {
        'Inicio': <Inicio/>,
        'AcercaDe': <AcercaDe/>,
        'Productos': <Productos/>, 
        'Galeria': <Galeria/>,
        'Sucursales': <Sucursales/>,
        'Contacto': <Contacto/>,
        'Usuarios': <Usuarios/>
    };

    return(
        <div className="main-container"> 
            { vistas[vista] || <Inicio/> }
        </div>
    )
}

ContenedorCards.propTypes = {
    vista: PropTypes.string.isRequired
}

export default ContenedorCards;