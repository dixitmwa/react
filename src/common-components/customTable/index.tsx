import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const CustomTable = (props: any) => {
    const { rows } = props
    const handleCellClick = (id: number) => {

    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Paid On</TableCell>
                        <TableCell>Test Name</TableCell>
                        <TableCell align="right">Start</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row: any, index: number) => (
                        <TableRow
                            key={row.id}
                            style={{ backgroundColor: index % 2 === 0 ? '#F1FAFF' : 'white' }}
                        >
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell >{row.name}</TableCell>
                            <TableCell align="right" style={{
                                cursor: "pointer",
                                color: "#5141B0",
                                fontSize: "14px",
                                fontWeight: "700"
                            }} onClick={() => handleCellClick(row?.id)}>
                                Start
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CustomTable