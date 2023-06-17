import React from 'react';
import PropTypes from 'prop-types';

export default function ShowAndLoad({ children, isLoading, title }) {

    return (
        isLoading ?
            (<div className="flex justify-center items-center">
                <div
                    className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-green-500"
                    role="status"></div>
                <span className="visually-hidden">{title}</span>
            </div>)
            : children
    )

}

ShowAndLoad.propTypes = {
    title: "Loading..."
}

ShowAndLoad.propTypes = {
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool.isRequired,
    title: PropTypes.string,
}