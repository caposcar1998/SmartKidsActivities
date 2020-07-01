import React from 'react';
import { Grid, Typography } from '@material-ui/core';


export default function SeleccionCurso() {
    

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

                    </Grid>
            

            </Grid>
            <Grid item xs={6} >
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
            <Typography>GRADES 1,2,3</Typography>

                </Grid>
                
            </Grid>

        </Grid>
    )

}