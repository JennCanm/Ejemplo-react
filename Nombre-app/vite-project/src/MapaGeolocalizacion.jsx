import {useEffect, useState} from "react";
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";

function MapaGeolocalizacion(){
    const [ubicacion, setUbicacion] = useState(null);
    const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;
 
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                setUbicacion({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            },
            (error)=> console.error(error),
            {enableHighAccuracy:true}

        )
    }, [])
    
    if (!apiKey) {
        return <div style={{padding: '20px', background: '#fcc', color: '#c00'}}>Error: API Key no configurada</div>
    }

    return(
        <div style={{padding: '20px', background: 'linear-gradient(to right, #da18d0 15%, #eb9ae0)', width: '100%'}}>
            <h2 style={{color: 'white', textAlign: 'center'}}>Tu Ubicación Actual</h2>
            <LoadScript googleMapsApiKey={apiKey}>
                {ubicacion ? (
                    <GoogleMap
                        mapContainerStyle={{width:"100%", height: "300px", borderRadius: '10px'}}
                        center={ubicacion}
                        zoom={15}
                    >
                        <Marker position={ubicacion}/>
                    </GoogleMap>
                ) : (
                    <div style={{width:"100%", height: "300px", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f0f0"}}>
                        <p>Cargando tu ubicación...</p>
                    </div>
                )}
            </LoadScript>
        </div>
    )
}

export default MapaGeolocalizacion;