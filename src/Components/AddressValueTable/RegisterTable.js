import React from 'react'
import './registerTable.css';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

function RegisterTable({ rows }) {
    const name = Object.keys(rows)
    return (
        <>
            <div className='registerContainer'>
                <h2>Registers</h2>
                <div className='registerTableContainer'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {name.map((val) => (
                                <tr key={val}>
                                    <td>{val}</td>
                                    <td type="icon">{rows[val]}
                                        <span className='edit-icon'>
                                            <EditTwoToneIcon />
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default RegisterTable;