import React from 'react'
import { Typography } from '@mui/material';
import "./Footer.css"

const Footer = () => {

    return (
        <footer>
            <Typography variant='body2' align='right' fontFamily={"monospace"}>
            Hecho con &#128150; por Matías Godoy.
            </Typography>
        </footer>
    )
}

export default Footer