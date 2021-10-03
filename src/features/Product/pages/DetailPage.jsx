import { Box, Container, Grid, Paper, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductMenu from '../components/ProductMenu';
import ProductThumbnail from '../components/ProductThumbnail';
import AddToCartForm from './../components/AddToCartForm';
import ProductAdditional from './../components/ProductAdditional';
import ProductDescription from './../components/ProductDescription';
import ProductInfo from './../components/ProductInfo';
import ProductReviews from './../components/ProductReviews';
import useProductDetail from './../hooks/useProductDetail';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: theme.spacing(3)
    },
    left: {
        width: '400px',
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`,
    },
    right: {
        flex: '1 1 0',
        padding: theme.spacing(1.5),

    },
    loading: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
    },
}));

function DetailPage() {
    const classes = useStyles();
    const { params: { productId }, url
    } = useRouteMatch()

    const { product, loading } = useProductDetail(productId)
    if (loading) {
        return <Box className={classes.loading}>
            <LinearProgress />
        </Box>
    }
    const handleAddToCartSubmit = (formValue) => {
        console.log('form submit', formValue);
    }
    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddToCartSubmit} />
                        </Grid>
                    </Grid>
                </Paper>

                <ProductMenu />
                <Switch>
                    <Route exact path={url} >
                        <ProductDescription product={product} />
                    </Route>
                    <Route path={`${url}/additional`} component={ProductAdditional} />
                    <Route path={`${url}/reviews`} component={ProductReviews} />
                </Switch>
            </Container>
        </Box>
    );
}

export default DetailPage;