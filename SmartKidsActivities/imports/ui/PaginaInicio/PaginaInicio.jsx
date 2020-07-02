import React from 'react';
import MenuBar from './MenuBar';
import OpcionesIngreso from './OpcionesIngreso';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SeleccionCurso from './SeleccionCurso';
import MenuInferior from './MenuInferior';



const useStyles = makeStyles((theme) => ({

    boxUp: {
        marginBottom: theme.spacing(9)
    },
    menuInferior: {
        marginBottom: 0
    },
    boxUno: {
        marginTop: theme.spacing(3)
    }

}));

export default function PaginaInicio() {
    const classes = useStyles();

    return (
        <Grid>
        <Box className={classes.boxUno} />
        <MenuBar />
        <Box className={classes.boxUp} />
        <OpcionesIngreso />  
        <Box className={classes.boxUp} />
        <SeleccionCurso />
        <Box className={classes.boxUp} />
        <MenuInferior className= {classes.menuInferior}/>
        </Grid>
    )
}