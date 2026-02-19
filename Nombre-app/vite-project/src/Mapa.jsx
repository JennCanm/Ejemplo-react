import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '200px'
}

function Mapa({ lat = 20.748429, lng = -97.629916, nombre = 'Ubicación' }) {
    const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY
    
    if (!apiKey) {
        return <div style={{padding: '10px', background: '#fcc', color: '#c00'}}>Error: API Key no configurada</div>
    }

    const center = { lat, lng }

    return (
        <div>
            <h3>{nombre}</h3>
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default Mapa