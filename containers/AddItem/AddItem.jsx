import React from 'react';
import PropTypes from 'prop-types';

export default function AddItem({ name }) {
    return (
        <div>
            This is add item: {name}
        </div>
    )
}

AddItem.propTypes = {
    name: PropTypes.string,
}