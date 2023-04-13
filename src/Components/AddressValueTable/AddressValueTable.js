import React from 'react'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import './table.css'

function AddressValueTable({ rows }) {
    const name = (rows && Object.keys(rows));
    return (
        <>
            <div className='addressContainer'>
                <h2>Memory</h2>
                <div className='addressTableContainer'>
                    <table>
                        <thead>
                            <tr>
                                <th>Address</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {name.length !== 0 && name.map((val) => (
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

export default AddressValueTable;