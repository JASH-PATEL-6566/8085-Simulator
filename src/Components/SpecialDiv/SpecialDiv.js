import React, { useState } from 'react'
import './specialdiv.css'
import { IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


function SpecialDiv({ children, compStyle }) {
    const [className, setClassName] = useState('none-display');

    const add_class = () => {
        setClassName('block-display')
    }

    const remove_class = () => {
        setClassName('none-display')
    }

    return (
        <div
            onMouseOver={add_class}
            onMouseLeave={remove_class}
            style={compStyle}
        >
            {children}
            <div className={`info_button ${className}`} >
                <IconButton>
                    <InfoOutlinedIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default SpecialDiv;