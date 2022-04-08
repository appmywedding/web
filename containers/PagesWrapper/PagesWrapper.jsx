import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';

export default function PagesWrapper({ children }) {
    const user = useSelector((reducers) => reducers.auth.user);
    const currentRoute = useRouter().pathname;

    useEffect(() => {
        if (!user) {
            Router.push({
                pathname: '/login',
            }, `${currentRoute}`)
        }
    })

    return (
        user ? children : ''
    )

}

PagesWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
