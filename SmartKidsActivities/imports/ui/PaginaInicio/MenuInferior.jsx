import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


export default function MenuInferior() {
    const classes = useStyles()


    return (
        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
        >

            <Grid item xs={2}>
                <Button variant="contained" size="large" color="primary" className={classes.margin}>
                    About
        </Button>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" size="large" color="primary" className={classes.margin}>
                    Help
        </Button>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" size="large" color="primary" className={classes.margin}>
                    Terms
        </Button>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" size="large" color="primary" className={classes.margin}>
                    Privacy
        </Button>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" size="large" color="primary" className={classes.margin}>
                    Contact
        </Button>
            </Grid>

        
       
        
       
       

        </Grid>
    )
}