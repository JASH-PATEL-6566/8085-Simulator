import React, { useState } from 'react'
import './specialdiv.css'
import { IconButton } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Tooltip } from "react-tooltip";


function SpecialDiv({ children, compStyle, toolTip }) {
    const [className, setClassName] = useState('none-display');

    const add_class = () => {
        setClassName('block-display')
    }

    const remove_class = () => {
        setClassName('none-display')
    }

    return (
        <>
            <div
                onMouseOver={add_class}
                onMouseLeave={remove_class}
                style={compStyle}
            >
                {children}
                <div className={`info_button ${className}`} data-tooltip-html={toolTip}>
                    <IconButton>
                        <InfoOutlinedIcon />
                    </IconButton>
                </div>
            </div >
            <Tooltip anchorSelect=".info_button" />
        </>
    )
}

export default SpecialDiv;