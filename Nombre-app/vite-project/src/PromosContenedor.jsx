import React from "react"
import Mapa from "./Mapa"
import MapaGeolocalizacion from "./MapaGeolocalizacion"
import './PromosContenedor.css'


function PromosContenedor() {
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
            nombre: 'Sucursal Veracruz',
            lat: 19.163697547394353,
            lng: -96.13204298528498,
            promo: 'Hasta 30% en paquetes'
        }
    ]

    return (
        <div className="promos-contenedor">
            <h2>Promociones por Sucursal</h2>
            <p>Selecciona una sucursal para ver la oferta y ubicación</p>

            <div className="promos-list">
                {sucursales.map((s) => (
                    <article key={s.id} className="promo-card">
                        <div className="promo-info">
                            <h3>{s.nombre}</h3>
                            <p className="promo-text">{s.promo}</p>
                        </div>
                        <div className="promo-map">
                            <Mapa lat={s.lat} lng={s.lng} nombre={s.nombre} />
                        </div>
                    </article>
                ))}
            </div>
            <MapaGeolocalizacion/>
        </div>
    )
}

export default PromosContenedor