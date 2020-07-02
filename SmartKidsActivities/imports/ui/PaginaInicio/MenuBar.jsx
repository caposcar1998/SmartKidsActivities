import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    foto: {
        height: 70
    },
    fondo: {
        backgroundColor: "#cc00cc"
    }
}));

export default function MenuBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.fondo}>
                <Toolbar>
                    
                    <Typography variant="h3" className={classes.title}>
                        SMART KIDS - LEARN
                    </Typography>
                    <img src="/images/ninosSaltando.png" className={classes.foto}/>
                </Toolbar>
            </AppBar>
        </div>
    );
}