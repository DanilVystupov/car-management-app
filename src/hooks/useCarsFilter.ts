import { useEffect, useState } from 'react';
import { Car } from '../types';

const useCarsFilter = (cars: Car[], selectedSort: string) => {
    const [sortedCars, setSortedCars] = useState<Car[]>([]);

    const sortCars = () => {
        const sorted = [...cars].sort((a, b) => {
            if (selectedSort === 'year') {
                return Number(b.year) - Number(a.year);
            }
            if (selectedSort === 'price') {
                return Number(b.price) - Number(a.price);
            }
            return 0;
        });
        setSortedCars(sorted);
    };

    useEffect(() => {
        if (selectedSort) {
            sortCars();
        }
    }, [selectedSort, cars]);

    return sortedCars;
};

export default useCarsFilter;
