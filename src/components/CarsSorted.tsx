import React from 'react';
import MySelect from '../UI/select/MySelect';
import { CarsSortedProps } from '../types';

const CarsSorted: React.FC<CarsSortedProps> = ({ value, onChange }) => {
    return (
        <>
            <div className='select-container'>
                <MySelect
                    value={value}
                    onChange={onChange}
                    defaultValue="Сортировка"
                    options={[
                        { value: 'year', name: 'По году выпуска' },
                        { value: 'price', name: 'По цене' },
                    ]}
                />
            </div>
            <hr />
        </>
    );
};

export default CarsSorted;