import React, { useState } from 'react'
import './instruction.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SignalWifi1Bar } from '@mui/icons-material';

function Instruction() {
    const [inputInstruction, setInputInstruction] = useState("");
    const position = {
        position: toast.POSITION.BOTTOM_RIGHT
    }

    function validateRegisterAndMemory(oparand, index) {

    }

    function validate8bitData(oparand, index) {

    }

    function validateRegister(oparand, index) {

    }

    function validate16bit(oparand, index) {

    }

    const onLoad = (e) => {
        const rawInstruction = inputInstruction.toUpperCase();
        let isValid = false;

        if (rawInstruction.length === 0) {
            toast.error("Please enter instruction....", position);
            return
        }

        const instructionArray = rawInstruction.split(" ");
        let inst = [];
        instructionArray.forEach((item) => {
            let temp = item.split(",");
            inst.push(...temp);
        });
        inst = inst.filter((item) => (item !== ""))
        inst = inst.filter((item) => (item !== " "))

        switch (inst[0]) {
            case "ADD":
            case "SUB":
            case "INR":
            case "DCR":
            case "CMP":
            case "ANA":
            case "XRA":
            case "ORA":
                isValid = validateRegisterAndMemory(inst, 1);
                break;
            case "ADI":
            case "SUI":
            case "CPI":
            case "ANI":
            case "ORI":
            case "XRI":
                isValid = validate8bitData(inst, 1);
                break;
            case "MOV":
                isValid = validateRegister(inst, 1);
                if (isValid) {
                    isValid = validateRegisterAndMemory(inst, 2);
                }
                break;
            case "MVI":
                isValid = validateRegister(inst, 1);
                if (isValid) {
                    isValid = validate8bitData(inst, 2);
                }
                break;
            case "LDA":
            case "STA":
            case "LHLD":
            case "SHLD":
                isValid = validate16bit(inst, 1);
                break;
            default:
                toast.error("Invalid Register/Memory Address Passed", position);
                break;
        }
    }

    return (
        <>
            <div className='instruction_container'>
                <h2>Instruction</h2>
                <TextField id="standard-basic" label="Enter Instruction" variant="standard" value={inputInstruction} onChange={(e) => setInputInstruction(e.target.value)} />
                <Button variant="contained" sx={{ marginTop: "10px" }} startIcon={<AddIcon />} onClick={(e) => onLoad(e)}>Load Instruction</Button>
            </div>
            <ToastContainer autoClose={2000} />
        </>
    )
}

export default Instruction;