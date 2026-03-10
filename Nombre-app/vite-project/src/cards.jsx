import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import './cards.css';
import axios from "axios";
import api from './Services/api';
import { useAuth } from './authContext';

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
import xIcon from './assets/x.png';
import PromosContenedor from './PromosContenedor'
import MapaGeolocalizacion from './MapaGeolocalizacion';
import Mapa from './Mapa';
import RegistrarProductos from './RegistrarProductos.jsx';
import RegistrarUsuarios from './RegistrarUsuarios.jsx';
import RegistrarCarrito from './RegistrarCarrito.jsx';


function Target(props) {
    return (
        <div className='card'>
            <img src={props.imagen} alt={props.name} />
            <h1>{props.name}</h1>
            <p>{props.descripcion}</p>
            <a href="#">Leer más</a>
            {props.saludarFunc && <button onClick={props.saludarFunc}>Saludar</button>}
        </div>
    )
}

function Inicio() {
    return (
        <div>
            <h2>Bienvenido a la página de Inicio</h2>
            <h1>Descubre un lugar donde la creatividad, el talento y la inspiración se unen.
                Nuestra página está diseñada para mostrar a personas increíbles, proyectos únicos y contenido que conecta contigo.

                Explora nuestras secciones, conoce más sobre nosotros y disfruta de una experiencia visual pensada especialmente para ti.</h1>
        </div>
    );
}

function AcercaDe() {
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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const response = await api.get("products");
                setProductos(response.data);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            } finally {
                setLoading(false);
            }
        };
        obtenerProductos();
    }, []);

    if (loading) {
        return <p>Cargando productos...</p>
    }

    return (
        <div>
            <RegistrarProductos />
            <main className='classmain'>
                <header>
                    <h1>Nuestro catalogo</h1>
                </header>

                {productos.map((producto) => (
                    <article key={producto.id} className='classArticle'>
                        <p>{producto.title}</p>
                        <p>{producto.description}</p>
                        <img src={producto.image} alt={producto.title} className='classImg' />
                        <p>${producto.price}</p>
                    </article>
                ))}
            </main>
        </div>
    );
}


function Galeria() {
    return (
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

function Sucursales() {
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

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
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

        alert("Mensaje enviado correctamente ");

        setFormData({
            nombre: "",
            telefono: "",
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
                    type="tel"
                    name="telefono"
                    placeholder="Tu teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
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

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                const response = await api.get("users");
                setUsuarios(response.data);
            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
            } finally {
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
        <div className="usuarios-container">
            <RegistrarUsuarios />
            <h1>Gestión de Usuarios</h1>
            <table className="usuarios-table">
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
                    {usuarios.map((usuario) => (
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
                                    <img src={editarIcon} alt="Editar" style={{ width: '20px', height: '20px' }} />
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => handleEliminar(usuario.id)}
                                    title="Eliminar"
                                >
                                    <img src={eliminarIcon} alt="Eliminar" style={{ width: '20px', height: '20px' }} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );

}


function Carrito() {
    const [ordenes, setOrdenes] = useState([]);
    const [loading, setLoading] = useState(true);


    const handleRemove = (ordenId, productId) => {
        console.log(`Quitar producto ${productId} del pedido ${ordenId}`);

    };

    useEffect(() => {
        const obtenerOrdenes = async () => {
            try {
                const response = await api.get("carts");
                setOrdenes(response.data);
            } catch (error) {
                console.error('Error al obtener las órdenes:', error);
            } finally {
                setLoading(false);
            }
        };
        obtenerOrdenes();
    }, []);

    if (loading) {
        return <p>Cargando Pedidos...</p>
    }

    return (
        <div className="carrito-container">
            <h2>Carrito de Compras</h2>

            <div className="carrito-grid">

                {ordenes.map((orden) => (
                    <div key={orden.id} className='orden-card'>
                        <h3>Pedido #{orden.id}</h3>
                        <p>Usuario: {orden.userId}</p>
                        <p>Fecha: {new Date(orden.date).toLocaleDateString()}</p>

                        <h4>Productos:</h4>
                        <ul className="productos-list">
                            {orden.products.map((producto) => (
                                <li key={producto.productId}>
                                    <span>Producto ID: {producto.productId} - Cantidad: {producto.quantity}</span>
                                    <button
                                        className="btn-eliminar"
                                        onClick={() => handleRemove(orden.id, producto.productId)}
                                        title="Eliminar producto"
                                    >
                                        <img src={xIcon} alt="Eliminar" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <RegistrarCarrito />
        </div>
    );

}


const Login = ({ chVista }) => {

    const { login } = useAuth();

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const obtenerUsuarios = async () => {
            try {
                const respuesta = await api.get('/users');
                setUsuarios(respuesta.data);
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
            }
        };
        obtenerUsuarios();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const usuarioEncontrado = usuarios.find(
            (user) =>
                (user.username === usuario || user.email === usuario) &&
                user.password === password
        );

        if (usuarioEncontrado) {
            const token = btoa(JSON.stringify({ id: usuarioEncontrado.id, username: usuarioEncontrado.username }));
            alert(`¡Bienvenido ${usuarioEncontrado.name.firstname}!`);
            login(token);
            localStorage.setItem('usuario', JSON.stringify(usuarioEncontrado));
            chVista("Usuarios");
        } else {
            setError('Usuario o contraseña incorrectos');
            alert('Usuario o contraseña incorrectos');
        }
    };

    const handleCancel = () => {
        setUsuario("");
        setPassword("");
        setError("");
    };

    return (
        <div className="login-container">

            <form onSubmit={handleSubmit}>

                <div className="icono">

                </div>

                <h2>LOGIN</h2>

                {error && <div className="error-message">{error}</div>}

                <label>
                    Usuario
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Ingresa tu usuario"
                        required
                    />
                </label>

                <label>
                    Contraseña
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Ingresa tu contraseña"
                        required
                    />
                </label>

                <div className="botones">
                    <button type="submit">Iniciar</button>
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                </div>

                <div className="links">
                    <a href="#">Recordar contraseña</a>
                    <a href="#">Registrar</a>
                </div>

            </form>

        </div>
    );


}


function Categorias() {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiCategorias = import.meta.env.VITE_API_CATEGORIES;

    useEffect(() => {
        const obtenerCategorias = async () => {
            try {
                const response = await axios.get(apiCategorias);
                setCategorias(response.data.categories);
            } catch (error) {
                console.error("Error al obtener categorías:", error);
            } finally {
                setLoading(false);
            }
        };

        obtenerCategorias();
    }, []);

    if (loading) return <p>Cargando categorías...</p>;

    return (
        <div>
            <main className='categorias-main'>
                <header>
                    <h1>Categorías</h1>
                </header>

                {categorias.map((categoria) => (
                    <article key={categoria.idCategory} className='categoria-article'>
                        <h3>{categoria.strCategory}</h3>
                        <img src={categoria.strCategoryThumb} alt={categoria.strCategory} className='categoria-img' />
                        <p>{categoria.strCategoryDescription}</p>
                    </article>
                ))}
            </main>
        </div>
    );
}

function CerrarSesion() {
    const { logout } = useAuth();
    const handleLogout = () => {
        logout();
        alert("Has cerrado sesión correctamente");
    }
    return (
        <div className="logout-container">
            <h2>¿Deseas cerrar sesión?</h2>
            <div className='botones'>
                <button onClick={handleLogout}>Cerrar Sesión</button>
            </div>
        </div>
    );
}



function ContenedorCards({ vista }) {

    const vistas = {
        'Inicio': <Inicio />,
        'AcercaDe': <AcercaDe />,
        'Productos': <Productos />,
        'Galeria': <Galeria />,
        'Sucursales': <Sucursales />,
        'Contacto': <Contacto />,
        'Usuarios': <Usuarios />,
        'Carrito': <Carrito />,
        'Login': <Login />,
        'Categorias': <Categorias />,
        'Logout': <CerrarSesion />
    };

    return (
        <div className="main-container">
            {vistas[vista] || <Inicio />}
        </div>
    )
}

ContenedorCards.propTypes = {
    vista: PropTypes.string.isRequired
}

export default ContenedorCards;