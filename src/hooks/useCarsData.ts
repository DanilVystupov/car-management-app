import { useEffect, useState } from 'react';
import { fetchCars } from '../api/CarService';
import { Car } from '../types';

const useCarsData = () => {
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCars();
                setCars(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const removeCar = (car: Car) => {
        setCars((prevCars) => prevCars.filter((c) => c.id !== car.id));
    };

    const updateCar = (updatedCars: Car[]) => {
        setCars(updatedCars);
    };

    const saveCar = (car: Car) => {
        const updatedCars = cars.map((c: Car) => {
            if (c.id === car.id) {
                return car;
            }
            return c;
        });
        updateCar(updatedCars);
    };

    return { cars, removeCar, updateCar, saveCar };
};

export default useCarsData;
