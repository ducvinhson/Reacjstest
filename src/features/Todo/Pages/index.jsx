import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from './../../../components/NotFound/index';
import DetailPage from './DetailPage/index';
import ListPage from './ListPage/index';


TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todoId`} component={DetailPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default TodoFeature;
