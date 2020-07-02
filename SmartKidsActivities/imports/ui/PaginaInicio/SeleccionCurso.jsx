import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({


    foto: {
        height: "300px"

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
                >
                    <Grid item xs={12}>
                        <Grid container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="h3">KINDERGARTEN AND PRE-K</Typography>
                        </Grid>    
                    </Grid>
                    <Grid item xs={12}>
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
            <Grid item xs={6} >
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
                            <Typography variant="h3">GRADES 1,2,3</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
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