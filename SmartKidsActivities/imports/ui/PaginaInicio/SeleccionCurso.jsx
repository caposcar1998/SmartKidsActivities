import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({


    foto: {
        height: "300px",
        width: "100%"
    },
    cajaUno: {
        backgroundColor: "#7FFFD4",
        padding: theme.spacing(1)
    },
    cajaDos: {
        backgroundColor: "#E9967A",
        padding: theme.spacing(1)
    },
    gridUno: {
        paddingRight: theme.spacing(10)
    },
    kinderTexto: {
        color: "blue"
    },
    gradesTexto: {
        color: "green"
    }

}));

export default function SeleccionCurso() {
    const classes = useStyles();


    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={6}  >
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.gridUno}
                >
                    <Grid item xs={12}>
                        <Grid container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="h3" className={classes.kinderTexto}>KINDERGARTEN </Typography>
                        </Grid>    
                    </Grid>
                    <Grid item xs={12} className={classes.cajaUno} >
                        <Grid container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                        <img src="/images/FotosKinder.png" className={classes.foto} />
                        </Grid>
                    </Grid>
                    </Grid>
                    
            

            </Grid>
            <Grid item xs={6}  >
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Grid container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="h3" className={classes.gradesTexto}>GRADES 1,2,3</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.cajaDos}  >
                        <Grid container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                        <img src="/images/FondosGrades.jpg" className={classes.foto} />
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>

        </Grid>
    )

}