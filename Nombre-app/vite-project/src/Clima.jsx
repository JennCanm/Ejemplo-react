import { useEffect, useState } from "react";
import './Clima.css';

function Clima(){
    const [clima, setClima] = useState(null);
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const  lat = 20.748459
    const lng=  -97.629945
    console.log(API_KEY);

    useEffect(()=>{
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`)
            .then(res => res.json())
            .then((data)=>{
                setClima(data)
                console.log(data);
            })
            .catch((error)=>console.log("Error:",console.error));
    },[])
return(
    <div className="divclima">
        {
            clima?(
                <>
                <p>{clima.name} Temp: {clima.main.temp} Humeda: {clima.main.humidity}</p>
                <p>{clima.weather.description}</p>
                
                </>
            ):(
                <p>Cargando clima...</p>

            )
        }
    </div>
);
}

export default Clima;   