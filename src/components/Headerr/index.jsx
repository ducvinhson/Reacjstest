import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import Register from 'features/Auth/components/Register';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { Close } from '@material-ui/icons';
import Login from './../../features/Auth/components/Login/index';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'relative',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
        zIndex: 1,
    }
}));

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register'
};

export default function Header() {
    const [open, setOpen] = useState(false);
    const [mode, SetMode] = useState(MODE.LOGIN)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CodeIcon className={classes.menuButton} />
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>DUCVINHSON </Link>
                    </Typography>
                    <NavLink to="/todos" className={classes.link}>
                        <Button color="inherit">TODOS</Button>
                    </NavLink>
                    <NavLink to="/albums" className={classes.link}>
                        <Button color="inherit">ALBUMS</Button>
                    </NavLink>
                    <Button color="inherit" onClick={handleClickOpen} >Register</Button>
                </Toolbar>
            </AppBar>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" disableBackdropClick disableEscapeKeyDown>
                <IconButton className={classes.closeButton} onClick={handleClose} >
                    <Close />
                </IconButton>
                <DialogContent>
                    <DialogContentText>
                        {mode === MODE.REGISTER && (
                            <>
                                <Register closeDialog={handleClose} />

                                <Box textAlign="center" >
                                    <Button color="primary" onClick={() => SetMode(MODE.LOGIN)}>
                                        Allready have an account. Login here
                                    </Button>
                                </Box>
                            </>
                        )}
                        {mode === MODE.LOGIN && (
                            <>
                                <Login closeDialog={handleClose} />

                                <Box textAlign="center" >
                                    <Button color="primary" onClick={() => SetMode(MODE.REGISTER)}>
                                        Dont have an account. Register here
                                    </Button>
                                </Box>
                            </>
                        )}

                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}