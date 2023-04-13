import React, { useState } from 'react'
import "./info.css"
import Instruction from '../Instruction/Instruction';
import AddressValueTable from '../AddressValueTable/AddressValueTable';
import SpecialDiv from '../SpecialDiv/SpecialDiv';
import RegisterTable from '../AddressValueTable/RegisterTable';


function InfoSection() {
    const [register, setRegister] = useState({
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        H: 0,
        L: 0,
        W: 0,
        Z: 0,
        SP: 0,
        PC: 0
    })

    const [memory, setMemory] = useState({});

    setMemory();
    setRegister(register);
    return (
        <div className="info_container">
            <SpecialDiv
                compStyle={{
                    "position": "relative",
                    "height": "30%",
                    "maxHeight": "30%",
                    "padding": "0px 10px 15px 10px",
                    "borderRadius": "5px",
                    "background": "#daf5ff85",
                    "boxShadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                }}
            >
                <Instruction />
            </SpecialDiv>
            <div className="table_container">
                <SpecialDiv
                    compStyle={{
                        "position": "relative",
                        "width": "50%",
                        "padding": "10px 25px",
                        "borderRadius": "5px",
                    }}
                >
                    <RegisterTable rows={register} />
                </SpecialDiv>
                <SpecialDiv
                    compStyle={{
                        "position": "relative",
                        "width": "50%",
                        "padding": "10px 25px",
                        "borderRadius": "5px",
                    }}
                >
                    <AddressValueTable rows={memory} />
                </SpecialDiv>
            </div>
        </div >
    )
}

export default InfoSection;