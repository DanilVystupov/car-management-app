import React from 'react';
import CarItem from './CarItem';
import { CarsListProps } from '../types';


const CarsList: React.FC<CarsListProps> = ({ cars, removeCar, saveCar }) => {

    if (!cars.length) {
        return <h1 className="error-message">Машины не найдены!</h1>;
    }

    return (
        <>
            <div className="cards-container">
                {cars.map((car, index) => (
                    <CarItem
                        key={car.id}
                        car={car}
                        number={index + 1}
                        removeCar={removeCar}
                        saveCar={saveCar}
                    />
                ))}
            </div>
        </>
    );
};

export default CarsList;