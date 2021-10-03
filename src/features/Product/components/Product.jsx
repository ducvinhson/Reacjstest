import { Box, Typography } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLAYHOLDER } from 'constants/index';
import { formatPrice } from 'features/utils';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const history = useHistory();
    const thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLAYHOLDER
    const handleClick = () => {
        history.push(`/products/${product.id}`);
    }
    return (
        <Box padding={1} onClick={handleClick} >
            <Box padding={1} minHeight="215px">
                <img width="100%" src={thumbnailUrl} alt={product.name} />
            </Box>
            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                    {formatPrice(product.price)}
                </Box>

                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
            </Typography>
        </Box>
    );
}

export default Product;