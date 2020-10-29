import React from 'react';
import './style.css';
import '../../assets/style/global.css'

interface ButtonProps{
    value: string;
}

const Button: React.FC<ButtonProps> = ({value}) => {
    return(
        <div className="btn">
            <input className="button" type="submit" value={value}/>
        </div>    
    )
}

export default Button;