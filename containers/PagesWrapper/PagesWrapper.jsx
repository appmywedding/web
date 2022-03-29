import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Router from 'next/router';

export default function PagesWrapper({ children }) {
    const user = useSelector((reducers) => reducers.auth.user);

    useEffect(() => {
        if (!user) {
            Router.push('login');
        }
    })

    return (
        user ? children : ''
    )

}

PagesWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
