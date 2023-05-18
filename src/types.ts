export interface Car {
    id: number;
    name: string;
    model: string;
    year: string;
    color: string;
    price: string;
    latitude: number;
    longitude: number;
}

export interface CarItemProps {
    car: Car;
    number: number;
    removeCar: (car: Car) => void;
    saveCar: (car: Car) => void;
}

export interface CarsListProps {
    cars: Car[];
    removeCar: (car: Car) => void;
    saveCar: (car: Car) => void;
}

export interface CarsSortedProps {
    value: string;
    onChange: (value: string) => void;
}

export interface CarEditorProps extends CarItemProps {
    onCancel: () => void;
}

export interface CarLocationProps {
    cars: Car[];
}

export interface CarEditorItemProps {
    car: Car;
    saveCar: (editedCar: Car) => void;
    onCancel: () => void;
}

/// src/UI ///

export interface Option {
    value: string;
    name: string;
}

export interface MySelectProps {
    options: Option[];
    defaultValue: string;
    value: string;
    onChange: (value: string) => void;
}

import { ButtonHTMLAttributes } from 'react';

export interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
