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
import { AccountCircle, Close } from '@material-ui/icons';
import Login from './../../features/Auth/components/Login/index';
import { Box, Menu, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'features/Auth/userSlice';

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
    },

}));

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register'
};

export default function Header() {
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!loggedInUser.id;

    const [open, setOpen] = useState(false);
    const [mode, SetMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handleCloseMenu = () => {
        setAnchorEl(null)
    }
    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
        handleCloseMenu();
    }
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>SHOPDUKE </Link>
                    </Typography>
                    <NavLink to="/todos" className={classes.link}>
                        <Button color="inherit">TODOS</Button>
                    </NavLink>
                    <NavLink to="/albums" className={classes.link}>
                        <Button color="inherit">ALBUMS</Button>
                    </NavLink>
                    <NavLink to="/products" className={classes.link}>
                        <Button color="inherit">PRODUCT</Button>
                    </NavLink>
                    {!isLoggedIn && (
                        <Button color="inherit" onClick={handleClickOpen} className={classes.btnlogin} >Login</Button>
                    )}

                    {isLoggedIn && (
                        <IconButton color="inherit" onClick={handleUserClick}>
                            <AccountCircle />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            <Menu
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
            >
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>

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
                                <Login closeDialog={handleClose} />`

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