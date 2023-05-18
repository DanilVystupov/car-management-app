import React, { ChangeEvent } from 'react';
import { MySelectProps } from '../../types';


const MySelect: React.FC<MySelectProps> = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            value={value}
            onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default MySelect;

