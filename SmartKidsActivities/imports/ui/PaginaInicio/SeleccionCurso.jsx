import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    foto: {
        
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

            <Grid item xs={6} >
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Typography>KINDERGARTEN AND PRE-K</Typography>
                    <img src="/images/FotosKinder.png" className={classes.foto} />
                    </Grid>
            

            </Grid>
            <Grid item xs={6} >
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Typography>GRADES 1,2,3</Typography>
                    <img src="/images/FondosGrades.jpg" className={classes.foto}/>
                </Grid>
                
            </Grid>

        </Grid>
    )

}