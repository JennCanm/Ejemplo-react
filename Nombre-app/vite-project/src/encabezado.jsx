import logo  from './assets/logo.png';
import iconoFacebook from './assets/redes/facebook.png';
import iconoInstagram from './assets/redes/instagram.png';
import iconoTwitter from './assets/redes/twitter.png';
import iconoYoutube from './assets/redes/youtube.png';
import iconoTikTok from './assets/redes/tik-tok.png';
import PropTypes from 'prop-types';
import Clima from './Clima';
import './Clima.css';


import './encabezado.css';

function Encabezado({cambiarVista}) {
    return (
        <div className='encabezadoDiv'>
            <Logo />
            <Menu cambiarVista={cambiarVista} />
            <RedesSociales/>
        </div>
    );
}

function Logo() {
    return(
        <div className='logoDiv'>
            <img src={logo} alt="main-logo" />
        </div>
    );
}

function Menu({cambiarVista}){
    return(
        <div className='menuDiv'>
            <ul>
                <li onClick={() => cambiarVista('Inicio')}>Inicio</li>
                <li onClick={() => cambiarVista('AcercaDe')}>Acerca de</li>
                <li onClick={() => cambiarVista('Productos')}>Productos</li>
                <li onClick={() => cambiarVista("Galeria")}>Galeria</li>
                <li onClick={() => cambiarVista('Sucursales')}>Sucursales</li>
                <li onClick={() => cambiarVista('Contacto')}>Contacto</li>
                <li onClick={() => cambiarVista('Usuarios')}>Usuarios</li>
                <li onClick={() => cambiarVista('Carrito')}>Carrito</li> 

            </ul>
        </div>
    )
}

function RedesSociales(){
    return(
        <div className='redesDiv'>
            <ul>
                <li><img src={iconoFacebook} alt="Facebook" /></li>
                <li><img src={iconoInstagram} alt="Instagram" /></li>
                <li><img src={iconoTwitter} alt="Twitter" /></li>
                <li><img src={iconoYoutube} alt="YouTube" /></li>
                <li><img src={iconoTikTok} alt="TikTok" /></li>
                
            </ul>
            <Clima/>
        </div>
    )
}


Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired
}

Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired
}

export default Encabezado