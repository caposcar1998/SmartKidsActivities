import React from 'react';
import MenuBar from './MenuBar';
import OpcionesIngreso from './OpcionesIngreso';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SeleccionCurso from './SeleccionCurso';
import MenuInferior from './MenuInferior';



const useStyles = makeStyles((theme) => ({

    boxUp: {
        marginBottom: theme.spacing(10)
    }

}));

export default function PaginaInicio() {
    const classes = useStyles();

    return (
        <>
            <MenuBar />
            <Box className={classes.boxUp} />
            <OpcionesIngreso />  
            <Box className={classes.boxUp} />
            <SeleccionCurso/>
            <MenuInferior/>
        </>
    )
}