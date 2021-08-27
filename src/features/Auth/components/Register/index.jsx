import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from './../RegisterForm/index';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const handleSubmit = async (values) => {
        try {
            values.username = values.email;


            const action = register(values);
            const user = await dispatch(action).unwrap()

            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }

            enqueueSnackbar('Register successfully!!!', { variant: 'success' })
        } catch (err) {
            console.log('Fail to register user', err);
            enqueueSnackbar(err.message, { variant: 'error' })

        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;