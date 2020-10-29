import React, {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLElement>{
    label: string;
    name: string;
}

const Input : React.FC<InputProps> = ({label, name, ...rest}) => {
    return(
        <div>
            <label htmlFor="">{label}</label>
            <input type="text"/>
        </div>
    );
}

export default Input;