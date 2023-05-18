import React from 'react';
import { MyButtonProps } from '../../types';

const MyButton: React.FC<MyButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props} className="myBtn">
            {children}
        </button>
    );
};

export default MyButton;
