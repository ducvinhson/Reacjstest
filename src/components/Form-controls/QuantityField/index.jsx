import { Box, FormHelperText, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
    root: {},
    box: {
        maxWidth: '100px',
    },
}))
function QuantityField(props) {
    const classes = useStyles();
    const { form, name, label, disabled, } = props;
    const { formState: { errors } } = form;
    const hasError = !!errors[name];

    return (
        <FormControl error={hasError} fullWidth margin="normal" variant="outlined" size="small">
            <Typography>{label}</Typography>
            <Controller
                name={name}
                control={form.control}
                render={({ field, value }) => (
                    <Box className={classes.box}>
                        <OutlinedInput
                            {...field}
                            disabled={disabled}
                            id={name}
                            type="number"
                            value={value}
                        />
                    </Box>
                )}
            />
            <FormHelperText >{errors[name]?.message}</FormHelperText>
        </FormControl>

    );
}

export default QuantityField;
