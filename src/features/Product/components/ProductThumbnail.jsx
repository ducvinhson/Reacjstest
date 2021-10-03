import { Box } from '@material-ui/core';
import { THUMBNAIL_PLAYHOLDER, STATIC_HOST } from 'constants/index';
import PropTypes from 'prop-types';
import React from 'react';

ProductThumbnail.propTypes = {
    product: PropTypes.object,

};

function ProductThumbnail({ product }) {

    const thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLAYHOLDER

    return (
        <Box>
            <img width="100%" src={thumbnailUrl} alt={product.name} />
        </Box>
    );
}

export default ProductThumbnail;