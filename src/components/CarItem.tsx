import React, { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import { Car, CarItemProps } from '../types';
import { Link } from 'react-router-dom';
import { CAR_LOCATION } from '../utils/paths';
import CarEditorItem from './CarEditorItem';

const CarItem: React.FC<CarItemProps> = ({ car, number, removeCar, saveCar }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleRemove = () => {
        removeCar(car);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = (editedCar: Car) => {
        saveCar(editedCar);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <CarEditorItem
                car={car}
                saveCar={handleSave}
                onCancel={handleCancel}
            />
        );
    }

    return (
        <div className="card">
            <strong>
                {number}. {car.name}
            </strong>
            <p>Модель: {car.model}</p>
            <p>Год выпуска: {car.year}</p>
            <p>Цвет: {car.color}</p>
            <p>Цена: {car.price}</p>
            <p>Широта: {car.latitude}</p>
            <p>Долгота: {car.longitude}</p>

            <div>
                <MyButton onClick={handleRemove}>Удалить</MyButton>
                <MyButton onClick={handleEdit}>Редактировать</MyButton>
                <Link to={CAR_LOCATION + `${car.id}`}>
                    <MyButton>Посмотреть местоположение</MyButton>
                </Link>
            </div>
        </div>
    );
};

export default CarItem;

