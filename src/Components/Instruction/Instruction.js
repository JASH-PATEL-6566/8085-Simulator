import React from 'react'
import './instruction.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function Instruction() {
    return (
        <div className='instruction_container'>
            <h2>Instruction</h2>
            <TextField id="standard-basic" label="Enter Instruction" variant="standard" />
            <Button variant="contained" sx={{ marginTop: "10px" }} startIcon={<AddIcon />}>Load Instruction</Button>
        </div>
    )
}

export default Instruction;