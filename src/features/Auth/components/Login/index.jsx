import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from './../LoginForm/index';
import { login } from 'features/Auth/userSlice';

Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const handleSubmit = async (values) => {
        try {
            const action = login(values);
            const user = await dispatch(action).unwrap()

            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }
        } catch (err) {
            console.log('Fail to login', err);
            enqueueSnackbar(err.message, { variant: 'error' })

        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;