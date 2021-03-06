/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Link } from 'react-router-dom';
import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';
import { store } from '~/store';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    notOperador,
    isAdm,
    ...rest
}) {
    const { signed } = store.getState().auth;
    const { profile } = store.getState().user;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }
    if (signed && !isPrivate) {
        if (profile.cargo === 'Operador') {
            return <Redirect to="/operador" />;
        }
        return <Redirect to="/main" />;
    }
    if (signed && notOperador) {
        if (profile.cargo === 'Operador') {
            return <Redirect to="/operador" />;
        }
    }
    if (signed && isAdm) {
        if (
            profile.cargo !== 'Admnistrador' &&
            profile.cargo !== 'Plant Manager' &&
            profile.cargo !== 'Gerente Qualidade'
        ) {
            return <Redirect to="/main" />;
        }
    }
    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        <Route
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}
// eslint-disable-next-line react/no-typos
RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    notOperador: PropTypes.bool,
    isAdm: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};
RouteWrapper.defaultProps = {
    isPrivate: false,
    notOperador: false,
    isAdm: false,
};
