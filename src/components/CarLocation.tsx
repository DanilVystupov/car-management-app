import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'leaflet';
import { CarLocationProps } from '../types';
import 'leaflet/dist/leaflet.css';

const CarLocation: React.FC<CarLocationProps> = ({ cars }) => {
    const { id } = useParams();

    const car = cars.find((car) => car.id === Number(id));

    const mapRef = useRef<Map | null>(null);

    useEffect(() => {
        if (car) {
            const { latitude, longitude } = car;
            mapRef.current = new Map('map', {
                center: [latitude, longitude],
                zoom: 15,
            });
            new Marker([latitude, longitude]).addTo(mapRef.current);
            new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
                mapRef.current
            );
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [car]);

    if (!car) {
        return (
            <div className="error-message">
                Автомобиль не найден
            </div>
        )
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>
                Местоположение автомобиля {car.name} {car.model}
            </h2>
            <div id="map"></div>
        </div >
    );
};

export default CarLocation;