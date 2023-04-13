import React from 'react'
import Button from '@mui/material/Button';
import "./navbar.css";

function Navbar() {
    return (
        <div className="nav_container">
            <h1 className="site_name">
                8085 Simulator
            </h1>
            <Button variant="outlined" sx={{
                color: "black", border: "2px solid black", ":hover": {
                    color: "#3F4E4F",
                    border: "2px solid #3F4E4F"
                }
            }} >All Available Instruction</Button>
        </div>
    )
}

export default Navbar;