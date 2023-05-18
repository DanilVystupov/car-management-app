import React, { useState, ChangeEvent } from 'react';
import MyButton from '../UI/button/MyButton';
import { Car, CarEditorItemProps } from '../types';

const CarEditorItem: React.FC<CarEditorItemProps> = ({ car, saveCar, onCancel }) => {
    const [editedCar, setEditedCar] = useState<Car>(car);

    const handleSave = () => {
        saveCar(editedCar);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditedCar((prevCar) => ({
            ...prevCar,
            [name]: value,
        }));
    };

    return (
        <div className="card">
            <strong>
                {editedCar.name}
            </strong>
            <p>
                Модель:
                <input type="text" name="model" value={editedCar.model} onChange={handleChange} />
            </p>
            <p>
                Год выпуска:
                <input type="text" name="year" value={editedCar.year} onChange={handleChange} />
            </p>
            <p>
                Цвет:
                <input type="text" name="color" value={editedCar.color} onChange={handleChange} />
            </p>
            <p>
                Цена:
                <input type="text" name="price" value={editedCar.price} onChange={handleChange} />
            </p>
            <p>Широта: {editedCar.latitude}</p>
            <p>Долгота: {editedCar.longitude}</p>
            <div>
                <MyButton onClick={handleSave}>Сохранить</MyButton>
                <MyButton onClick={onCancel}>Отмена</MyButton>
            </div>
        </div>
    );
};

export default CarEditorItem;

