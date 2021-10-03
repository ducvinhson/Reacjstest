import { Box, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        borderTop: `1px solid ${theme.palette.grey[300]}`,
        padding: theme.spacing(2),
    },
    List: {
        padding: 0,
        margin: 0,
        listStyleType: ' none',

        '& > li': {
            margin: 0,
            marginTop: theme.spacing(1),

        }
    },
}));

FilterByService.propTypes = {
    filter: PropTypes.object,
    onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
    const classes = useStyles();
    const handleChange = (e) => {
        if (!onChange) return;

        const { name, checked } = e.target;
        onChange({ [name]: checked })
    };
    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2" >DỊCH VỤ</Typography>

            <ul className={classes.List}>
                {[{ value: 'isPromotion', label: 'Có khuyễn mãi ' }, { value: 'isFreeShip', label: 'Vận chuyển miễn phí' }].map(service => (
                    <li key={service}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={filters[service.value]}
                                    onChange={handleChange}
                                    name={service.value}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByService;